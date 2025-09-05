import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { ProductCatalog } from '@/components/ProductCatalog';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CheckoutButton } from '@/components/CheckoutButton';
import { MobileMenu } from '@/components/MobileMenu';
import { LegumesHero } from '@/components/LegumesHero';
import { FruitsHero } from '@/components/FruitsHero';
import { SaladesHero } from '@/components/SaladesHero';
import { HerbesHero } from '@/components/HerbesHero';
import { useGlobalDirection } from '@/components/LanguageSwitcher';

function renderHeroSection(category: string) {
  switch (category) {
    case 'legumes':
      return <LegumesHero />;
    case 'fruits':
      return <FruitsHero />;
    case 'salades':
      return <SaladesHero />;
    case 'herbes':
      return <HerbesHero />;
    default:
      return <LegumesHero />;
  }
}

export default function CategoryPage() {
  const location = useLocation();
  const { t } = useTranslation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Assurer la gestion RTL
  useGlobalDirection();

  // Extraire la catégorie depuis le pathname (/legumes -> legumes)
  const category = location.pathname.substring(1);
  
  const getTranslationKey = (category: string) => {
    const keyMap: { [key: string]: string } = {
      'legumes': 'vegetables',
      'fruits': 'fruits', 
      'salades': 'salads',
      'herbes': 'herbs'
    };
    return keyMap[category] || 'vegetables';
  };

  const translationKey = getTranslationKey(category);
  
  console.log('=== DEBUG LOCATION ===');
  console.log('Current pathname:', location.pathname);
  console.log('Extracted category:', category);
  console.log('Translation key:', translationKey);
  console.log('=====================');

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMobileMenuOpen(true)}
      />
      
      <main>
        {/* Hero Section spécifique à chaque catégorie */}
        {renderHeroSection(category || 'legumes')}

        {/* Products */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t(`categoryPages.${translationKey}.title`)}
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                {t(`categoryPages.${translationKey}.description`)}
              </p>
            </div>
            <ProductCatalog selectedCategory={category} />
          </div>
        </section>
      </main>
      
      <Footer />
      
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <WhatsAppButton />
      <CheckoutButton />
    </div>
  );
}