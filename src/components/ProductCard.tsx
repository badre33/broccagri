import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/custom-button';
import { Badge } from '@/components/ui/badge';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Product } from '@/hooks/useProducts';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getProductImage } from '@/utils/productImages';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(0.5);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(0.5, quantity + change));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(0.5); // Reset quantity after adding
  };

  // Use the image URL from the database with our generated images
  const getImageUrl = () => {
    if (product.image_url) {
      return getProductImage(product.image_url);
    }
    return 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&h=300&fit=crop&auto=format';
  };

  return (
    <Card className="premium-card overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={getImageUrl()} 
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
            {t('product.organic')}
          </Badge>
        )}
        <Badge 
          variant="outline" 
          className="absolute top-3 right-3 bg-white/90 text-primary border-primary"
        >
          {product.categories?.name || t('product.unit')}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 text-foreground">
          {isArabic ? product.name_ar || product.name : product.name}
        </h3>
        {(product.description || product.description_ar) && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {isArabic ? product.description_ar || product.description : product.description}
          </p>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-primary">
            {product.price.toFixed(2)} {t('common.currency')}
            <span className="text-sm font-normal text-muted-foreground">/{product.unit}</span>
          </div>
        </div>
        
        {/* Quantity selector */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-foreground">{t('cart.quantity')}:</span>
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
          <ShoppingCart className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
          {t('product.addToCart')}
        </Button>
      </CardContent>
    </Card>
  );
}