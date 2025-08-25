import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Menu panel */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-primary">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="p-4">
          <div className="space-y-1">
            <a 
              href="/" 
              className="block px-4 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium rounded-md"
              onClick={onClose}
            >
              Accueil
            </a>
            <a 
              href="/legumes" 
              className="block px-4 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium rounded-md"
              onClick={onClose}
            >
              Légumes
            </a>
            <a 
              href="/fruits" 
              className="block px-4 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium rounded-md"
              onClick={onClose}
            >
              Fruits
            </a>
            <a 
              href="/salades" 
              className="block px-4 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium rounded-md"
              onClick={onClose}
            >
              Salades
            </a>
            <a 
              href="/herbes" 
              className="block px-4 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium rounded-md"
              onClick={onClose}
            >
              Herbes
            </a>
            <a 
              href="/blog" 
              className="block px-4 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium rounded-md"
              onClick={onClose}
            >
              Blog
            </a>
            <a 
              href="/contact" 
              className="block px-4 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium rounded-md"
              onClick={onClose}
            >
              Contact
            </a>
            <a 
              href="/admin" 
              className="block px-4 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium rounded-md border-t mt-2 pt-4"
              onClick={onClose}
            >
              🔐 Admin
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}