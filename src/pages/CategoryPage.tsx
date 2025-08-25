import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { ProductCatalog } from '@/components/ProductCatalog';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { LegumesHero } from '@/components/LegumesHero';
import { FruitsHero } from '@/components/FruitsHero';
import { SaladesHero } from '@/components/SaladesHero';
import { HerbesHero } from '@/components/HerbesHero';

const categoryNames = {
  legumes: 'Légumes',
  fruits: 'Fruits', 
  salades: 'Salades',
  herbes: 'Herbes'
};

const categoryContent = {
  legumes: 'Plongez dans l\'univers de nos légumes du terroir marocain ! Nos producteurs partenaires cultivent avec passion des légumes d\'exception : tomates charnues gorgées de soleil, carottes croquantes aux saveurs sucrées, oignons parfumés et pommes de terre onctueuses. Chaque légume est soigneusement sélectionné pour vous offrir le meilleur de la nature marocaine.',
  fruits: 'Laissez-vous séduire par la richesse de nos vergers ! Nos fruits marocains sont de véritables joyaux gustatifs : oranges juteuses aux arômes intenses, figues moelleuses, dattes sucrées et bien d\'autres trésors fruités. Cultivés sous le soleil généreux du Maroc, ils vous offrent une explosion de saveurs authentiques à chaque bouchée.',
  salades: 'Croquant, frais et plein de vitalité ! Nos salades et légumes verts sont la garantie d\'une alimentation saine et savoureuse. Laitue tendre, roquette piquante, épinards fondants... Cueillis à la rosée du matin, ils conservent toute leur fraîcheur et leurs qualités nutritionnelles pour égayer vos assiettes.',
  herbes: 'Réveillez vos papilles avec nos herbes aromatiques d\'exception ! Menthe rafraîchissante, coriandre parfumée, persil généreux, basilic envoûtant... Nos herbes fraîches sont cultivées selon les traditions ancestrales marocaines pour apporter authenticité, parfum et caractère à tous vos plats.'
};

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
  const { category } = useParams<{ category: string }>();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categoryName = categoryNames[category as keyof typeof categoryNames] || 'Légumes';
  const categoryContentText = categoryContent[category as keyof typeof categoryContent] || '';

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
                Notre sélection de {categoryName?.toLowerCase()}
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                {categoryContentText}
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
      
      <WhatsAppButton />
    </div>
  );
}