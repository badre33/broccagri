import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Leaf, Award } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Partenariat Agricole",
      description: "Nous travaillons directement avec plus de 50 agriculteurs marocains pour vous garantir des produits authentiques."
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Passion & Qualité",
      description: "Chaque produit est sélectionné avec soin pour vous offrir le meilleur du terroir marocain."
    },
    {
      icon: <Leaf className="h-8 w-8 text-success" />,
      title: "Agriculture Responsable",
      description: "Nous privilégions les pratiques agricoles durables et respectueuses de l'environnement."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence Garantie",
      description: "Notre engagement : vous livrer des produits frais de la plus haute qualité, directement du producteur."
    }
  ];

  return (
    <section id="apropos" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre Mission : Soutenir l'Agriculture Marocaine
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Chez BroccAgri, nous croyons fermement au potentiel de l'agriculture marocaine. 
              Notre mission est de créer un pont direct entre les producteurs locaux et les consommateurs, 
              garantissant ainsi une rémunération juste pour nos agriculteurs partenaires tout en vous 
              offrant des produits d'une fraîcheur exceptionnelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {values.map((value, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ensemble, cultivons l'avenir du Maroc
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              En choisissant BroccAgri, vous participez directement au développement de l'agriculture locale 
              et soutenez les familles d'agriculteurs marocains. Chaque achat est un geste de solidarité 
              qui contribue à préserver notre patrimoine agricole et à promouvoir une alimentation saine et locale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}