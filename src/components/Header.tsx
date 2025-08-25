import { ShoppingCart, Menu, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSupabaseCart } from '@/hooks/useSupabaseCart';

interface HeaderProps {
  onCartClick: () => void;
  onMenuClick: () => void;
}

export function Header({ onCartClick, onMenuClick }: HeaderProps) {
  const { itemCount } = useSupabaseCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>+212 8 61 44 27 41</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Livraison dans tout le Maroc</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>🌱 Produits 100% frais du terroir marocain</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo BroccAgri */}
          <div>
            <img 
              src="/lovable-uploads/d1e12569-f4ca-4c88-9d38-38d5962561d4.png" 
              alt="BroccAgri - Produits agricoles frais du Maroc" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Accueil
            </a>
            <a href="/legumes" className="text-foreground hover:text-primary transition-colors font-medium">
              Légumes
            </a>
            <a href="/fruits" className="text-foreground hover:text-primary transition-colors font-medium">
              Fruits
            </a>
            <a href="/salades" className="text-foreground hover:text-primary transition-colors font-medium">
              Salades
            </a>
            <a href="/herbes" className="text-foreground hover:text-primary transition-colors font-medium">
              Herbes
            </a>
            <a href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.location.href = '/auth'}
              className="hidden sm:inline-flex text-sm font-medium"
            >
              🔐 Admin
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={onCartClick}
              className="relative bg-primary/10 border-primary/20 hover:bg-primary/20"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {itemCount}
                </Badge>
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}