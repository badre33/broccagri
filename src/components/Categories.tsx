import React, { useState } from 'react';
import { Button } from '@/components/ui/custom-button';
import { Card, CardContent } from '@/components/ui/card';
import { useCategories } from '@/hooks/useProducts';
import { useTranslation } from 'react-i18next';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import categoryVegetables from '@/assets/category-vegetables.jpg';
import categoryFruits from '@/assets/category-fruits.jpg';
import categoryHerbs from '@/assets/category-herbs.jpg';
import categorySalades from '@/assets/category-salades.jpg';

interface CategoriesProps {
  onCategoryClick: (category: string) => void;
}

export function Categories({ onCategoryClick }: CategoriesProps) {
  const { categories, loading } = useCategories();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  // Gestion des gestures de swipe
  const swipeElementRef = useSwipeGesture({
    onSwipeLeft: () => {
      if (currentCategoryIndex < categories.length - 1) {
        const nextIndex = currentCategoryIndex + 1;
        setCurrentCategoryIndex(nextIndex);
        onCategoryClick(categories[nextIndex].slug);
      }
    },
    onSwipeRight: () => {
      if (currentCategoryIndex > 0) {
        const prevIndex = currentCategoryIndex - 1;
        setCurrentCategoryIndex(prevIndex);
        onCategoryClick(categories[prevIndex].slug);
      }
    },
    threshold: 50
  });

  // Mapping des images par slug de catégorie
  const categoryImages = {
    'legumes': categoryVegetables,
    'fruits': categoryFruits, 
    'salades': categorySalades,
    'herbes': categoryHerbs
  };

  if (loading) {
    return (
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t('categories.title')}</h2>
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
            {t('categories.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('categories.subtitle')}
          </p>
        </div>

        {/* Navigation par scroll horizontal sur mobile avec gestures */}
        <div 
          ref={swipeElementRef as React.RefObject<HTMLDivElement>}
          className="block md:hidden mb-8 touch-pan-x"
        >
          <div className="flex overflow-x-auto scrollbar-hide gap-4 px-4 py-2 -mx-4 snap-x snap-mandatory">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`flex-shrink-0 w-32 cursor-pointer snap-center transition-all duration-300 ${
                  index === currentCategoryIndex ? 'scale-105 opacity-100' : 'opacity-75'
                }`}
                onClick={() => {
                  setCurrentCategoryIndex(index);
                  onCategoryClick(category.slug);
                }}
              >
                <div className="relative h-24 w-32 rounded-lg overflow-hidden mb-2 min-h-[44px]">
                  <img 
                    src={categoryImages[category.slug as keyof typeof categoryImages] || categoryVegetables}
                    alt={isArabic ? category.name_ar || category.name : category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-sm font-medium text-center text-foreground truncate">
                  {isArabic ? category.name_ar || category.name : category.name}
                </h3>
              </div>
            ))}
          </div>
          
          {/* Indicateurs de position */}
          <div className="flex justify-center mt-4 gap-1">
            {categories.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentCategoryIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid pour desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="premium-card cursor-pointer group overflow-hidden"
              style={{ minHeight: '44px' }}
              onClick={() => onCategoryClick(category.slug)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={categoryImages[category.slug as keyof typeof categoryImages] || categoryVegetables}
                  alt={isArabic ? category.name_ar || category.name : category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {isArabic ? category.name_ar || category.name : category.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {isArabic ? category.description_ar || category.description : category.description}
                  </p>
                </div>
              </div>
              <CardContent className="p-4">
                <Button variant="premium" className="w-full min-h-[44px]">
                  {t('categories.viewProducts', 'Voir les produits')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}