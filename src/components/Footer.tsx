import { MapPin, Phone, Mail, Facebook, Instagram, Heart } from 'lucide-react';
import { Button } from '@/components/ui/custom-button';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/d1e12569-f4ca-4c88-9d38-38d5962561d4.png" 
                alt="BroccAgri" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="opacity-90 leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20"
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61572799044315', '_blank')}
            >
              <Facebook className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20"
              onClick={() => window.open('https://www.instagram.com/brocc_agri/', '_blank')}
            >
              <Instagram className="h-5 w-5" />
            </Button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 opacity-90">
                <Phone className="h-4 w-4" />
                <span>+212661-792473</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <Mail className="h-4 w-4" />
                <span>contact@broccagri.ma</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <MapPin className="h-4 w-4" />
                <span>{t('header.delivery')}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h4>
            <div className="space-y-2">
              <a href="/" className="block opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.home')}
              </a>
              <a href="/legumes" className="block opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.vegetables')}
              </a>
              <a href="/fruits" className="block opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.fruits')}
              </a>
              <a href="/salades" className="block opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.salads')}
              </a>
              <a href="/herbes" className="block opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.herbs')}
              </a>
              <a href="/contact" className="block opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.contact')}
              </a>
              <a href="/blog" className="block opacity-90 hover:opacity-100 transition-opacity">
                {t('nav.blog')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © 2024 BroccAgri. {t('footer.rights')}
            </p>
            <p className="text-sm opacity-80 flex items-center gap-1">
              Fait avec <Heart className="h-4 w-4 text-accent" /> pour l'agriculture marocaine
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}