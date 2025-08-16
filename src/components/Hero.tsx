import { Button } from '@/components/ui/custom-button';
import { ArrowRight, Leaf, Truck, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-fresh-produce.jpg';

interface HeroProps {
  onOrderClick: () => void;
}

export function Hero({ onOrderClick }: HeroProps) {
  return (
    <section id="accueil" className="relative min-h-[80vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        <img 
          src={heroImage} 
          alt="Produits frais BroccAgri" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Vos produits agricoles frais,
              <span className="block bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                livrés à domicile
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Découvrez la fraîcheur authentique du terroir marocain. 
              Des légumes, fruits et herbes de qualité premium, 
              directement des producteurs locaux à votre table.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={onOrderClick}
                className="group"
              >
                Commander maintenant
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
              >
                Découvrir nos produits
              </Button>
            </div>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Leaf className="h-8 w-8 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold mb-2">100% Frais</h3>
              <p className="text-sm text-white/80">Produits récoltés quotidiennement</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Truck className="h-8 w-8 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold mb-2">Livraison Rapide</h3>
              <p className="text-sm text-white/80">Livré en 24h dans tout le Maroc</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Shield className="h-8 w-8 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold mb-2">Qualité Garantie</h3>
              <p className="text-sm text-white/80">Satisfaction 100% ou remboursé</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}