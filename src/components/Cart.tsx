import { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, CreditCard, Truck } from 'lucide-react';
import { Button } from '@/components/ui/custom-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/useCart';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ isOpen, onClose }: CartProps) {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  const deliveryFee = total > 100 ? 0 : 15;
  const finalTotal = total + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b bg-primary text-primary-foreground">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                <h2 className="text-lg font-semibold">Mon Panier</h2>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {items.length}
                </Badge>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Votre panier est vide</h3>
                <p className="text-muted-foreground mb-6">
                  Découvrez nos produits frais et commencez vos achats !
                </p>
                <Button variant="premium" onClick={onClose}>
                  Continuer mes achats
                </Button>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {items.map(item => (
                  <Card key={item.product.id} className="p-4">
                    <div className="flex items-start gap-3">
                      <img 
                        src={`https://images.unsplash.com/400x300/?${encodeURIComponent(item.product.name)}&fit=crop&auto=format`}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-md"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&h=300&fit=crop&auto=format';
                        }}
                      />
                      
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.product.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.product.price.toFixed(2)} DH/{item.product.unit}
                        </p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-6 w-6"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 0.5)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium min-w-[3rem] text-center">
                              {item.quantity} {item.product.unit}
                            </span>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-6 w-6"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 0.5)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            Supprimer
                          </Button>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-semibold">
                          {(item.product.price * item.quantity).toFixed(2)} DH
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              {/* Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Sous-total</span>
                  <span>{total.toFixed(2)} DH</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    <Truck className="h-4 w-4" />
                    Livraison
                  </span>
                  <span>
                    {deliveryFee === 0 ? (
                      <Badge variant="secondary" className="text-xs">Gratuite</Badge>
                    ) : (
                      `${deliveryFee.toFixed(2)} DH`
                    )}
                  </span>
                </div>
                {deliveryFee > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Livraison gratuite dès 100 DH d'achat
                  </p>
                )}
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{finalTotal.toFixed(2)} DH</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <Button variant="premium" className="w-full" size="lg">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Procéder au paiement
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={() => clearCart()}>
                    Vider le panier
                  </Button>
                  <Button variant="secondary" className="flex-1" onClick={onClose}>
                    Continuer
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