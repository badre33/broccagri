import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Categories } from '@/components/Categories';
import { ProductCatalog } from '@/components/ProductCatalog';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    // Scroll to catalog section
    const catalogElement = document.getElementById('catalogue');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderClick = () => {
    const catalogElement = document.getElementById('catalogue');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMobileMenuOpen(true)}
      />
      
      <main>
        <Hero onOrderClick={handleOrderClick} />
        <Categories onCategoryClick={handleCategoryClick} />
        <ProductCatalog selectedCategory={selectedCategory} />
        <About />
        <Contact />
      </main>
      
      <Footer />
      
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
};

export default Index;
