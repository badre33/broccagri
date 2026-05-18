import { Menu, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

interface HeaderProps {
  onMenuClick: () => void;
  onOrderClick: () => void;
}

export function Header({ onMenuClick, onOrderClick }: HeaderProps) {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>+212661-792473</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{t('header.delivery')}</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>🌱 {t('header.freshProducts')}</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo BroccAgri */}
          <div>
            <img
              src="/broccagri-logo.png"
              alt="Broccagri — fruits et légumes frais du Maroc"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.home')}
            </a>
            <a href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.blog')}
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            
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