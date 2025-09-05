import { Button } from '@/components/ui/custom-button';
import { ArrowRight, Leaf, Truck, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useDirection } from '@/hooks/useDirection';
import heroImage from '@/assets/hero-fresh-produce.jpg';

interface HeroProps {
  onOrderClick: () => void;
  onShopClick?: () => void;
}

export function Hero({ onOrderClick, onShopClick }: HeroProps) {
  const { t } = useTranslation();
  const { isRTL } = useDirection();
  
  const handleShopClick = () => {
    if (onShopClick) {
      onShopClick();
    } else {
      // Scroll to categories section
      const categoriesSection = document.querySelector('#categories');
      if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <section id="accueil" className="relative min-h-[80vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Produits frais BroccAgri" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
              <span className="block bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button 
                variant="hero" 
                size="xl" 
                onClick={onOrderClick}
                className="group"
              >
                {t('hero.orderNow')}
                <ArrowRight className={`h-5 w-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 scale-x-[-1]' : 'ml-2'}`} />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                onClick={handleShopClick}
              >
                {t('hero.shopNow')}
              </Button>
            </div>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Leaf className="h-8 w-8 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold mb-2">{t('hero.features.fresh')}</h3>
              <p className="text-sm text-white/80">{t('hero.features.freshDesc')}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Truck className="h-8 w-8 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold mb-2">{t('hero.features.delivery')}</h3>
              <p className="text-sm text-white/80">{t('hero.features.deliveryDesc')}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Shield className="h-8 w-8 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold mb-2">{t('hero.features.quality')}</h3>
              <p className="text-sm text-white/80">{t('hero.features.qualityDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}