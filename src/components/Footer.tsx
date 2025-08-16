import { MapPin, Phone, Mail, Facebook, Instagram, Heart } from 'lucide-react';
import { Button } from '@/components/ui/custom-button';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white text-primary p-2 rounded-lg">
                <span className="text-xl font-bold">🥬</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">BroccAgri</h3>
                <p className="text-sm opacity-80">Frais & Local</p>
              </div>
            </div>
            <p className="opacity-90 leading-relaxed mb-4">
              Votre partenaire de confiance pour des produits agricoles frais, 
              directement du terroir marocain à votre table.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 opacity-90">
                <Phone className="h-4 w-4" />
                <span>+212 8 61 44 27 41</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <Mail className="h-4 w-4" />
                <span>contact@broccagri.ma</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <MapPin className="h-4 w-4" />
                <span>Livraison dans tout le Maroc</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              <a href="#accueil" className="block opacity-90 hover:opacity-100 transition-opacity">
                Accueil
              </a>
              <a href="#legumes" className="block opacity-90 hover:opacity-100 transition-opacity">
                Légumes
              </a>
              <a href="#fruits" className="block opacity-90 hover:opacity-100 transition-opacity">
                Fruits
              </a>
              <a href="#salades" className="block opacity-90 hover:opacity-100 transition-opacity">
                Salades
              </a>
              <a href="#herbes" className="block opacity-90 hover:opacity-100 transition-opacity">
                Herbes
              </a>
              <a href="#contact" className="block opacity-90 hover:opacity-100 transition-opacity">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © 2024 BroccAgri. Tous droits réservés.
            </p>
            <p className="text-sm opacity-80 flex items-center gap-1">
              Fait avec <Heart className="h-4 w-4 text-accent" /> pour l'agriculture marocaine
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}