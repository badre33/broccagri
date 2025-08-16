import React from 'react';
import { Button } from '@/components/ui/custom-button';
import { Card, CardContent } from '@/components/ui/card';
import { useCategories } from '@/hooks/useProducts';

interface CategoriesProps {
  onCategoryClick: (category: string) => void;
}

export function Categories({ onCategoryClick }: CategoriesProps) {
  const { categories, loading } = useCategories();

  // Mapping des images par slug de catégorie
  const categoryImages = {
    'legumes': '/src/assets/category-vegetables.jpg',
    'fruits': '/src/assets/category-fruits.jpg', 
    'salades': '/src/assets/category-herbs.jpg',
    'herbes': '/src/assets/category-herbs.jpg'
  };

  if (loading) {
    return (
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nos Catégories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-64 bg-muted animate-pulse rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nos Catégories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explorez notre gamme complète de produits frais, soigneusement sélectionnés pour vous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="premium-card cursor-pointer group overflow-hidden"
              onClick={() => onCategoryClick(category.slug)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={categoryImages[category.slug as keyof typeof categoryImages] || '/src/assets/category-vegetables.jpg'}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-white/90 text-sm">{category.description}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <Button variant="premium" className="w-full">
                  Voir les produits
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}