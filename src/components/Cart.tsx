import React from 'react';
import { Button } from '@/components/ui/custom-button';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useSupabaseCart } from '@/hooks/useSupabaseCart';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ isOpen, onClose }: CartProps) {
  const { items, total, itemCount, updateQuantity, removeFromCart, clearCart } = useSupabaseCart();

  if (!isOpen) return null;

  const deliveryFee = total < 100 ? 15 : 0;
  const finalTotal = total + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-xl border-l">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-bold">Mon Panier</h2>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{itemCount} article{itemCount > 1 ? 's' : ''}</Badge>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-6">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Votre panier est vide</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Découvrez nos produits frais et ajoutez-les à votre panier
                </p>
                <Button onClick={onClose}>
                  Continuer mes achats
                </Button>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-card rounded-lg border">
                    <img 
                      src={item.products.image_url || '/placeholder.svg'} 
                      alt={item.products.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.products.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {item.products.price.toFixed(2)} DH/{item.products.unit}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 0.5)}
                        disabled={item.quantity <= 0.5}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="min-w-[3rem] text-center text-sm font-medium">
                        {item.quantity} {item.products.unit}
                      </span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 0.5)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-medium text-sm">
                        {(item.products.price * item.quantity).toFixed(2)} DH
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer with totals and actions */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Sous-total:</span>
                  <span>{total.toFixed(2)} DH</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Frais de livraison:</span>
                  <span>{deliveryFee === 0 ? 'Gratuit' : `${deliveryFee.toFixed(2)} DH`}</span>
                </div>
                {total < 100 && (
                  <p className="text-xs text-muted-foreground">
                    Livraison gratuite à partir de 100 DH
                  </p>
                )}
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span className="text-primary">{finalTotal.toFixed(2)} DH</span>
                </div>
              </div>

              <div className="space-y-2">
                <Button variant="premium" className="w-full">
                  Procéder au paiement
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={onClose}>
                    Continuer mes achats
                  </Button>
                  <Button variant="outline" onClick={clearCart}>
                    Vider le panier
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}