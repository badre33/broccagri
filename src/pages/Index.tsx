import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Categories } from '@/components/Categories';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MobileMenu } from '@/components/MobileMenu';
import { useGlobalDirection } from '@/hooks/useGlobalDirection';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Assurer la gestion RTL
  useGlobalDirection();

  const handleOrderClick = () => {
    window.open('https://preview--agro-hub-creator.lovable.app/', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onMenuClick={() => setIsMobileMenuOpen(true)}
        onOrderClick={handleOrderClick}
      />
      
      <main>
        <Hero onOrderClick={handleOrderClick} />
        <Categories />
        <About />
        <Contact />
      </main>
      
      <Footer />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;
