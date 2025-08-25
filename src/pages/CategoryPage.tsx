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

const categoryNames = {
  legumes: 'Légumes',
  fruits: 'Fruits', 
  salades: 'Salades',
  herbes: 'Herbes'
};

const categoryDescriptions = {
  legumes: 'Découvrez notre sélection de légumes frais du terroir marocain',
  fruits: 'Des fruits de saison juteux et savoureux',
  salades: 'Salades et légumes verts croquants',
  herbes: 'Herbes fraîches et épices aromatiques'
};

const categoryImages = {
  legumes: categoryVegetables,
  fruits: categoryFruits,
  salades: categoryHerbs,
  herbes: categoryHerbs
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categoryName = categoryNames[category as keyof typeof categoryNames] || 'Produits';
  const categoryDescription = categoryDescriptions[category as keyof typeof categoryDescriptions] || '';
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
        <ProductCatalog selectedCategory={category} />
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