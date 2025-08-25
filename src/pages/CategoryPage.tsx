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

  // S'assurer que le nom de la catégorie est correct
  const categoryName = categoryNames[category as keyof typeof categoryNames];
  const categoryDescription = categoryDescriptions[category as keyof typeof categoryDescriptions];
  const categoryImage = categoryImages[category as keyof typeof categoryImages] || categoryVegetables;

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
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                {categoryDescription}
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