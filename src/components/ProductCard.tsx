import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/custom-button';
import { Badge } from '@/components/ui/badge';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(0.5);

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(0.5, quantity + change));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(0.5); // Reset quantity after adding
  };

  // Generate placeholder image URL based on product name
  const getImageUrl = (productName: string) => {
    // For demo purposes, we'll use a placeholder service
    // In production, you would use the actual product images
    const encodedName = encodeURIComponent(productName);
    return `https://images.unsplash.com/400x300/?${encodedName}&fit=crop&auto=format`;
  };

  return (
    <Card className="premium-card overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={getImageUrl(product.name)} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            // Fallback to a generic vegetable image
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&h=300&fit=crop&auto=format';
          }}
        />
        {product.organic && (
          <Badge 
            variant="secondary" 
            className="absolute top-3 left-3 bg-success text-success-foreground"
          >
            Bio
          </Badge>
        )}
        <Badge 
          variant="outline" 
          className="absolute top-3 right-3 bg-white/90 text-primary border-primary"
        >
          {product.category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 text-foreground">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-primary">
            {product.price.toFixed(2)} DH
            <span className="text-sm font-normal text-muted-foreground">/{product.unit}</span>
          </div>
        </div>
        
        {/* Quantity selector */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-foreground">Quantité:</span>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => handleQuantityChange(-0.5)}
              disabled={quantity <= 0.5}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="min-w-[3rem] text-center font-medium">
              {quantity} {product.unit}
            </span>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => handleQuantityChange(0.5)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Button 
          variant="premium" 
          className="w-full"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Ajouter au panier
        </Button>
      </CardContent>
    </Card>
  );
}