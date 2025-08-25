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
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 md:bottom-6 md:right-20 md:left-auto md:transform-none z-40 shadow-lg w-auto"
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