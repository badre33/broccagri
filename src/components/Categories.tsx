import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/custom-button';
import categoryVegetables from '@/assets/category-vegetables.jpg';
import categoryFruits from '@/assets/category-fruits.jpg';
import categoryHerbs from '@/assets/category-herbs.jpg';

interface CategoriesProps {
  onCategoryClick: (category: string) => void;
}

export function Categories({ onCategoryClick }: CategoriesProps) {
  const categories = [
    {
      id: 'legumes',
      name: 'Légumes',
      description: 'Légumes frais du terroir marocain',
      image: categoryVegetables,
      count: '20+ variétés'
    },
    {
      id: 'fruits',
      name: 'Fruits',
      description: 'Fruits de saison juteux et savoureux',
      image: categoryFruits,
      count: '15+ variétés'
    },
    {
      id: 'salades',
      name: 'Salades',
      description: 'Salades et légumes verts croquants',
      image: categoryHerbs,
      count: '8+ variétés'
    },
    {
      id: 'herbes',
      name: 'Herbes',
      description: 'Herbes fraîches et légumes verts',
      image: categoryHerbs,
      count: '10+ variétés'
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Catégories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explorez notre sélection de produits frais, cultivés avec soin par nos partenaires agriculteurs marocains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="premium-card overflow-hidden group cursor-pointer"
              onClick={() => onCategoryClick(category.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {category.count}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Découvrir
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}