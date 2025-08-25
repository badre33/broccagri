import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useSupabaseCart } from '@/hooks/useSupabaseCart';
import { Button } from '@/components/ui/button';
import { OrderFlow } from '@/components/OrderFlow';
import { ShoppingCart } from 'lucide-react';

export function CheckoutButton() {
  const { user } = useAuth();
  const { itemCount } = useSupabaseCart();
  const [showOrderFlow, setShowOrderFlow] = useState(false);

  if (itemCount === 0) return null;

  return (
    <>
      <Button 
        onClick={() => setShowOrderFlow(true)}
        className="fixed bottom-6 right-6 z-40 shadow-lg"
        size="lg"
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Commander ({itemCount})
      </Button>
      
      <OrderFlow 
        isOpen={showOrderFlow}
        onClose={() => setShowOrderFlow(false)}
      />
    </>
  );
}