import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { ProductCatalog } from '@/components/ProductCatalog';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';

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
  herbes: 'Herbes fraîches et légumes verts aromatiques'
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categoryName = categoryNames[category as keyof typeof categoryNames] || 'Produits';
  const categoryDescription = categoryDescriptions[category as keyof typeof categoryDescriptions] || '';

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMobileMenuOpen(true)}
      />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-slate mb-4">
              {categoryName}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
    </div>
  );
}