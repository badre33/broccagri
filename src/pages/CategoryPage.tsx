import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { ProductCatalog } from '@/components/ProductCatalog';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import categoryVegetables from '@/assets/category-vegetables.jpg';
import categoryFruits from '@/assets/category-fruits.jpg';
import categoryHerbs from '@/assets/category-herbs.jpg';
import categorySalads from '@/assets/category-salads-hero.jpg';
import categoryHerbsNew from '@/assets/category-herbs-hero.jpg';

const categoryNames = {
  legumes: 'Légumes',
  fruits: 'Fruits', 
  salades: 'Salades',
  herbes: 'Herbes'
};

const categoryDescriptions = {
  legumes: 'Découvrez nos légumes frais cultivés dans le respect des traditions agricoles marocaines. Des produits de qualité, récoltés à maturité pour préserver toutes leurs saveurs et leurs bienfaits nutritionnels.',
  fruits: 'Savourez nos fruits de saison, gorgés de soleil et récoltés à parfaite maturité. Une explosion de saveurs naturelles directement de nos vergers partenaires vers votre table.',
  salades: 'Croquantes et rafraîchissantes, nos salades et légumes verts sont cueillis quotidiennement pour vous garantir une fraîcheur optimale. Parfaites pour des repas sains et équilibrés.',
  herbes: 'Aromates et herbes fraîches pour sublimer vos plats. Cultivées avec soin selon les méthodes traditionnelles, elles apporteront authenticité et parfum à votre cuisine.'
};

const categoryContent = {
  legumes: 'Plongez dans l\'univers de nos légumes du terroir marocain ! Nos producteurs partenaires cultivent avec passion des légumes d\'exception : tomates charnues gorgées de soleil, carottes croquantes aux saveurs sucrées, oignons parfumés et pommes de terre onctueuses. Chaque légume est soigneusement sélectionné pour vous offrir le meilleur de la nature marocaine.',
  fruits: 'Laissez-vous séduire par la richesse de nos vergers ! Nos fruits marocains sont de véritables joyaux gustatifs : oranges juteuses aux arômes intenses, figues moelleuses, dattes sucrées et bien d\'autres trésors fruités. Cultivés sous le soleil généreux du Maroc, ils vous offrent une explosion de saveurs authentiques à chaque bouchée.',
  salades: 'Croquant, frais et plein de vitalité ! Nos salades et légumes verts sont la garantie d\'une alimentation saine et savoureuse. Laitue tendre, roquette piquante, épinards fondants... Cueillis à la rosée du matin, ils conservent toute leur fraîcheur et leurs qualités nutritionnelles pour égayer vos assiettes.',
  herbes: 'Réveillez vos papilles avec nos herbes aromatiques d\'exception ! Menthe rafraîchissante, coriandre parfumée, persil généreux, basilic envoûtant... Nos herbes fraîches sont cultivées selon les traditions ancestrales marocaines pour apporter authenticité, parfum et caractère à tous vos plats.'
};

const categoryImages = {
  legumes: categoryVegetables,
  fruits: categoryFruits,
  salades: categorySalads,
  herbes: categoryHerbsNew
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // FORCER les bons noms de catégories - SANS FALLBACK FOIREUX
  let categoryName = 'Légumes'; // Par défaut légumes
  let categoryDescription = categoryDescriptions.legumes;
  let categoryContentText = categoryContent.legumes;
  let categoryImage = categoryImages.legumes;

  if (category === 'legumes') {
    categoryName = 'Légumes';
    categoryDescription = categoryDescriptions.legumes;
    categoryContentText = categoryContent.legumes;
    categoryImage = categoryImages.legumes;
  } else if (category === 'fruits') {
    categoryName = 'Fruits';
    categoryDescription = categoryDescriptions.fruits;
    categoryContentText = categoryContent.fruits;
    categoryImage = categoryImages.fruits;
  } else if (category === 'salades') {
    categoryName = 'Salades';
    categoryDescription = categoryDescriptions.salades;
    categoryContentText = categoryContent.salades;
    categoryImage = categoryImages.salades;
  } else if (category === 'herbes') {
    categoryName = 'Herbes';
    categoryDescription = categoryDescriptions.herbes;
    categoryContentText = categoryContent.herbes;
    categoryImage = categoryImages.herbes;
  }

  // Debug pour vérifier les valeurs
  console.log('Category:', category);
  console.log('CategoryName:', categoryName);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMobileMenuOpen(true)}
      />
      
      <main>
        {/* Hero Section */}
        <section 
          className="py-20 bg-gradient-to-br from-primary/20 to-accent/20 relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${categoryImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              {categoryName}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {categoryDescription}
            </p>
          </div>
        </section>

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