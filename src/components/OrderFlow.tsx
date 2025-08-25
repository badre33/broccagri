import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useSupabaseCart } from '@/hooks/useSupabaseCart';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Calendar, Clock, CreditCard } from 'lucide-react';

interface OrderFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DeliveryInfo {
  street: string;
  city: string;
  postalCode: string;
  phone: string;
  deliveryDate: string;
  deliveryTimeSlot: string;
  notes: string;
}

export function OrderFlow({ isOpen, onClose }: OrderFlowProps) {
  const { user } = useAuth();
  const { items, itemCount, total, clearCart } = useSupabaseCart();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    street: '',
    city: '',
    postalCode: '',
    phone: '',
    deliveryDate: '',
    deliveryTimeSlot: '',
    notes: ''
  });

  const deliveryFee = 25; // 25 DH de frais de livraison
  const finalTotal = total + deliveryFee;

  if (!isOpen) return null;

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Vous devez être connecté pour passer commande",
        variant: "destructive"
      });
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Panier vide",
        description: "Ajoutez des produits à votre panier avant de commander",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      // Créer la commande (order_number est généré automatiquement par la DB)
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          subtotal: total,
          delivery_fee: deliveryFee,
          total: finalTotal,
          delivery_date: deliveryInfo.deliveryDate || null,
          delivery_time_slot: deliveryInfo.deliveryTimeSlot || null,
          delivery_address: {
            street: deliveryInfo.street,
            city: deliveryInfo.city,
            postalCode: deliveryInfo.postalCode
          },
          notes: deliveryInfo.notes || null,
          status: 'pending' as const
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Ajouter les articles de la commande
      const orderItems = items.map(item => ({
        order_id: order.id,
        product_id: item.product_id,
        product_name: item.products?.name || 'Produit',
        quantity: item.quantity,
        unit_price: item.products?.price || 0,
        total_price: (item.products?.price || 0) * item.quantity,
        product_price: item.products?.price || 0
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      // Vider le panier
      await clearCart();

      // Déclencher la notification
      try {
        await supabase.functions.invoke('send-order-notification', {
          body: {
            orderId: order.id,
            orderNumber: order.order_number,
            customerName: `${user.user_metadata?.first_name || ''} ${user.user_metadata?.last_name || ''}`.trim(),
            customerPhone: deliveryInfo.phone,
            total: finalTotal,
            items: orderItems,
            deliveryAddress: deliveryInfo,
            deliveryDate: deliveryInfo.deliveryDate,
            deliveryTimeSlot: deliveryInfo.deliveryTimeSlot
          }
        });
      } catch (notificationError) {
        // On ne bloque pas la commande si la notification échoue
        console.warn('Notification failed:', notificationError);
      }

      toast({
        title: "Commande confirmée !",
        description: `Votre commande #${order.order_number} a été enregistrée. Vous serez contacté pour confirmation.`
      });

      onClose();
      
    } catch (error: any) {
      console.error('Order error:', error);
      toast({
        title: "Erreur",
        description: "Impossible de finaliser votre commande: " + error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof DeliveryInfo, value: string) => {
    setDeliveryInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Finaliser ma commande</h2>
            <Button variant="ghost" onClick={onClose} className="text-2xl">×</Button>
          </div>
        </div>

        <form onSubmit={handleSubmitOrder} className="p-6 space-y-6">
          {/* Résumé de la commande */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Résumé de votre commande
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.products?.name} x{item.quantity}</span>
                  <span>{((item.products?.price || 0) * item.quantity).toFixed(2)} DH</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between">
                <span>Sous-total:</span>
                <span>{total.toFixed(2)} DH</span>
              </div>
              <div className="flex justify-between">
                <span>Frais de livraison:</span>
                <span>{deliveryFee.toFixed(2)} DH</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>{finalTotal.toFixed(2)} DH</span>
              </div>
            </CardContent>
          </Card>

          {/* Informations de livraison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Adresse de livraison
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="street">Adresse complète *</Label>
                <Input
                  id="street"
                  value={deliveryInfo.street}
                  onChange={(e) => handleInputChange('street', e.target.value)}
                  placeholder="Rue, quartier, numéro..."
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">Ville *</Label>
                  <Input
                    id="city"
                    value={deliveryInfo.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Ville"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Code postal</Label>
                  <Input
                    id="postalCode"
                    value={deliveryInfo.postalCode}
                    onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    placeholder="Code postal"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  Téléphone *
                </Label>
                <Input
                  id="phone"
                  value={deliveryInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+212 6XX XX XX XX"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Planning de livraison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Planning de livraison
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="deliveryDate">Date souhaitée</Label>
                <Input
                  id="deliveryDate"
                  type="date"
                  value={deliveryInfo.deliveryDate}
                  onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <Label htmlFor="deliveryTimeSlot">Créneau horaire préféré</Label>
                <Select onValueChange={(value) => handleInputChange('deliveryTimeSlot', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un créneau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Matin (8h-12h)</SelectItem>
                    <SelectItem value="afternoon">Après-midi (14h-18h)</SelectItem>
                    <SelectItem value="evening">Soir (18h-20h)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Notes (optionnel)</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={deliveryInfo.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="Instructions spéciales, préférences de livraison..."
                rows={3}
              />
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Retour
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1"
            >
              {loading ? 'Envoi en cours...' : 'Confirmer ma commande'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}