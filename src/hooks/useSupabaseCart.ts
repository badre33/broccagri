import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { Product } from './useProducts';
import { toast } from '@/hooks/use-toast';

export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  created_at: string;
  updated_at: string;
  products: Product;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  loading: boolean;
}

export const useSupabaseCart = () => {
  const { user, session } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  // Generate session ID for anonymous users
  const getSessionId = useCallback(() => {
    let sessionId = localStorage.getItem('cart_session_id');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('cart_session_id', sessionId);
    }
    return sessionId;
  }, []);

  // Fetch cart items
  const fetchCart = useCallback(async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('cart_items')
        .select(`
          *,
          products (*)
        `);

      if (user) {
        query = query.eq('user_id', user.id);
      } else {
        const sessionId = getSessionId();
        query = query.eq('session_id', sessionId);
      }

      const { data, error } = await query;

      if (error) throw error;

      setCart(data || []);
    } catch (error: any) {
      console.error('Error fetching cart:', error);
      setCart([]);
    } finally {
      setLoading(false);
    }
  }, [user, getSessionId]);

  // Load cart on component mount and when user changes
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Migrate anonymous cart to user cart when user logs in
  useEffect(() => {
    const migrateAnonymousCart = async () => {
      if (user && session) {
        const sessionId = localStorage.getItem('cart_session_id');
        if (sessionId) {
          try {
            // Get anonymous cart items
            const { data: anonymousItems } = await supabase
              .from('cart_items')
              .select('*')
              .eq('session_id', sessionId);

            if (anonymousItems && anonymousItems.length > 0) {
              // Update anonymous items with user_id
              for (const item of anonymousItems) {
                await supabase
                  .from('cart_items')
                  .update({ 
                    user_id: user.id, 
                    session_id: null 
                  })
                  .eq('id', item.id);
              }

              // Clear session ID
              localStorage.removeItem('cart_session_id');
              
              // Refresh cart
              fetchCart();
            }
          } catch (error) {
            console.error('Error migrating cart:', error);
          }
        }
      }
    };

    migrateAnonymousCart();
  }, [user, session, fetchCart]);

  const addToCart = useCallback(async (product: Product, quantity: number = 1) => {
    try {
      const payload: any = {
        product_id: product.id,
        quantity,
      };

      if (user) {
        payload.user_id = user.id;
      } else {
        payload.session_id = getSessionId();
      }

      // Check if item already exists
      let existingQuery = supabase
        .from('cart_items')
        .select('*')
        .eq('product_id', product.id);

      if (user) {
        existingQuery = existingQuery.eq('user_id', user.id);
      } else {
        existingQuery = existingQuery.eq('session_id', getSessionId());
      }

      const { data: existing } = await existingQuery.maybeSingle();

      if (existing) {
        // Update quantity
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity: existing.quantity + quantity })
          .eq('id', existing.id);

        if (error) throw error;
      } else {
        // Insert new item
        const { error } = await supabase
          .from('cart_items')
          .insert(payload);

        if (error) throw error;
      }

      // Force refresh cart data
      setTimeout(async () => {
        await fetchCart();
      }, 100);
      
      toast({
        title: "Produit ajouté",
        description: `${product.name} a été ajouté à votre panier`,
      });
    } catch (error: any) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'ajouter le produit au panier",
        variant: "destructive",
      });
    }
  }, [user, getSessionId, fetchCart]);

  const updateQuantity = useCallback(async (itemId: string, quantity: number) => {
    try {
      if (quantity <= 0) {
        await removeFromCart(itemId);
        return;
      }

      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('id', itemId);

      if (error) throw error;

      // Force refresh cart data
      setTimeout(async () => {
        await fetchCart();
      }, 100);
    } catch (error: any) {
      console.error('Error updating quantity:', error);
      toast({
        title: "Erreur",
        description: "Impossible de modifier la quantité",
        variant: "destructive",
      });
    }
  }, [fetchCart]);

  const removeFromCart = useCallback(async (itemId: string) => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId);

      if (error) throw error;

      // Force refresh cart data  
      setTimeout(async () => {
        await fetchCart();
      }, 100);
      
      toast({
        title: "Produit retiré",
        description: "Le produit a été retiré de votre panier",
      });
    } catch (error: any) {
      console.error('Error removing from cart:', error);
      toast({
        title: "Erreur",
        description: "Impossible de retirer le produit",
        variant: "destructive",
      });
    }
  }, [fetchCart]);

  const clearCart = useCallback(async () => {
    try {
      let query = supabase.from('cart_items').delete();

      if (user) {
        query = query.eq('user_id', user.id);
      } else {
        const sessionId = getSessionId();
        query = query.eq('session_id', sessionId);
      }

      const { error } = await query;

      if (error) throw error;

      setCart([]);
      
      toast({
        title: "Panier vidé",
        description: "Votre panier a été vidé",
      });
    } catch (error: any) {
      console.error('Error clearing cart:', error);
      toast({
        title: "Erreur",
        description: "Impossible de vider le panier",
        variant: "destructive",
      });
    }
  }, [user, getSessionId]);

  const getCartState = useCallback((): CartState => {
    const total = cart.reduce((sum, item) => {
      return sum + (item.products.price * item.quantity);
    }, 0);
    
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return {
      items: cart,
      total,
      itemCount,
      loading,
    };
  }, [cart, loading]);

  return {
    ...getCartState(),
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    refetch: fetchCart,
  };
};