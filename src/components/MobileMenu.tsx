import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Menu panel - Direction RTL pour l'arabe */}
      <div className={`fixed top-0 h-full w-80 max-w-[85vw] bg-white shadow-lg ${isArabic ? 'left-0' : 'right-0'}`}>
        <div className={`flex items-center justify-between p-4 border-b ${isArabic ? 'flex-row-reverse' : ''}`}>
          <h2 className="text-lg font-semibold text-primary">{t('header.menu')}</h2>
          <Button
            variant="ghost"
            size="icon"
            className="min-h-[44px] min-w-[44px]"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="p-4">
          <div className="space-y-1">
            <a 
              href="/" 
              className="block px-4 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium rounded-md min-h-[44px] flex items-center"
              onClick={onClose}
            >
              {t('nav.home')}
            </a>
            <a 
              href="/blog" 
              className="block px-4 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium rounded-md min-h-[44px] flex items-center"
              onClick={onClose}
            >
              {t('nav.blog')}
            </a>
            <a 
              href="/contact" 
              className="block px-4 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium rounded-md min-h-[44px] flex items-center"
              onClick={onClose}
            >
              {t('nav.contact')}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}