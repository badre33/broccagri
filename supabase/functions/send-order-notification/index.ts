import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface OrderNotificationRequest {
  orderId: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  total: number;
  items: Array<{
    product_name: string;
    quantity: number;
    unit_price: number;
    total_price: number;
  }>;
  deliveryAddress: {
    street: string;
    city: string;
    postalCode: string;
  };
  deliveryDate?: string;
  deliveryTimeSlot?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      orderId,
      orderNumber,
      customerName,
      customerPhone,
      total,
      items,
      deliveryAddress,
      deliveryDate,
      deliveryTimeSlot
    }: OrderNotificationRequest = await req.json();

    console.log('Processing order notification:', orderNumber);

    // Formatage du message pour WhatsApp/Email
    const itemsList = items.map(item => 
      `• ${item.product_name} x${item.quantity} = ${item.total_price.toFixed(2)} DH`
    ).join('\n');

    const timeSlotText = deliveryTimeSlot === 'morning' ? '8h-12h' :
                        deliveryTimeSlot === 'afternoon' ? '14h-18h' :
                        deliveryTimeSlot === 'evening' ? '18h-20h' : 
                        deliveryTimeSlot || 'Non spécifié';

    const message = `🛍️ **NOUVELLE COMMANDE** 

📋 **Commande:** ${orderNumber}
👤 **Client:** ${customerName || 'Non renseigné'}
📞 **Téléphone:** ${customerPhone}

**📦 Produits commandés:**
${itemsList}

💰 **Total:** ${total.toFixed(2)} DH

📍 **Adresse de livraison:**
${deliveryAddress.street}
${deliveryAddress.city}${deliveryAddress.postalCode ? ', ' + deliveryAddress.postalCode : ''}

📅 **Livraison demandée:**
${deliveryDate ? new Date(deliveryDate).toLocaleDateString('fr-FR') : 'Non spécifiée'}
⏰ **Créneau:** ${timeSlotText}

---
Connectez-vous au back-office pour traiter cette commande.`;

    // Pour le moment, on log juste le message
    // Dans une version future, vous pouvez intégrer WhatsApp Business API ou email
    console.log('Order notification message:');
    console.log(message);

    // Simulation d'envoi (remplacez par votre logique d'envoi réelle)
    const response = {
      success: true,
      message: 'Notification envoyée avec succès',
      orderId,
      orderNumber,
      notificationContent: message
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error('Error in send-order-notification function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: 'Erreur lors de l\'envoi de la notification de commande'
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json', 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);