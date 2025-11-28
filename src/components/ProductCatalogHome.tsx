import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/custom-button';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { useProducts, useCategories, Product } from '@/hooks/useProducts';
import { useSupabaseCart } from '@/hooks/useSupabaseCart';
import { useTranslation } from 'react-i18next';

interface ProductCatalogHomeProps {
  selectedCategory?: string;
}

export function ProductCatalogHome({ selectedCategory }: ProductCatalogHomeProps) {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  
  const { addToCart } = useSupabaseCart();
  const { categories, loading: categoriesLoading } = useCategories();
  
  // Page d'accueil : afficher les produits mis en avant seulement si aucun filtre n'est actif
  const showFeaturedOnly = categoryFilter === 'all' && !searchTerm;
  
  const { products, loading: productsLoading } = useProducts(
    categoryFilter !== 'all' ? categoryFilter : undefined,
    searchTerm || undefined,
    showFeaturedOnly
  );

  // Filtrer les produits par prix
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    
    return products.filter(product => {
      // Filtrer par prix
      const matchesPrice = priceRange === 'all' || 
        (priceRange === 'low' && product.price <= 10) ||
        (priceRange === 'medium' && product.price > 10 && product.price <= 20) ||
        (priceRange === 'high' && product.price > 20);
      
      return matchesPrice;
    });
  }, [products, priceRange]);

  const handleAddToCart = (product: Product, quantity: number) => {
    addToCart(product, quantity);
  };

  return (
    <section id="catalogue" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t('featured.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('featured.subtitle')}
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder={t('featured.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                onClick={() => setSearchTerm('')}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Filtres */}
        <div className="mb-8">
          {/* Filtres de catégories */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button 
              variant={categoryFilter === 'all' ? 'premium' : 'outline'} 
              onClick={() => setCategoryFilter('all')}
              className="text-sm"
            >
              {t('featured.title')}
            </Button>
            <Button 
              variant={categoryFilter === 'fruits' ? 'premium' : 'outline'}
              onClick={() => setCategoryFilter('fruits')}
              className="text-sm"
            >
              {t('categories.fruits')}
            </Button>
            <Button 
              variant={categoryFilter === 'herbes' ? 'premium' : 'outline'}
              onClick={() => setCategoryFilter('herbes')}
              className="text-sm"
            >
              {t('categories.herbs')}
            </Button>
            <Button 
              variant={categoryFilter === 'legumes' ? 'premium' : 'outline'}
              onClick={() => setCategoryFilter('legumes')}
              className="text-sm"
            >
              {t('categories.vegetables')}
            </Button>
            <Button 
              variant={categoryFilter === 'salades' ? 'premium' : 'outline'}
              onClick={() => setCategoryFilter('salades')}
              className="text-sm"
            >
              {t('categories.salads')}
            </Button>
          </div>

          {/* Filtres par prix */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={priceRange === 'all' ? 'premium' : 'outline'}
              onClick={() => setPriceRange('all')}
              className="text-sm"
            >
              {t('featured.allPrices')}
            </Button>
            <Button
              variant={priceRange === 'low' ? 'premium' : 'outline'}
              onClick={() => setPriceRange('low')}
              className="text-sm"
            >
              {t('featured.lowPrice')}
            </Button>
            <Button
              variant={priceRange === 'medium' ? 'premium' : 'outline'}
              onClick={() => setPriceRange('medium')}
              className="text-sm"
            >
              {t('featured.mediumPrice')}
            </Button>
            <Button
              variant={priceRange === 'high' ? 'premium' : 'outline'}
              onClick={() => setPriceRange('high')}
              className="text-sm"
            >
              {t('featured.highPrice')}
            </Button>
          </div>
        </div>

        {/* Nombre de produits trouvés */}
        <div className="flex items-center justify-between mb-6">
          <Badge variant="outline" className="text-sm">
            {filteredProducts.length} {filteredProducts.length > 1 ? t('featured.productsFoundPlural') : t('featured.productsFound')}
          </Badge>
        </div>

        {/* Loading state */}
        {(productsLoading || categoriesLoading) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-96 bg-muted animate-pulse rounded-lg"></div>
            ))}
          </div>
        )}

        {/* Grille de produits */}
        {!productsLoading && !categoriesLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {/* Aucun produit trouvé */}
        {!productsLoading && !categoriesLoading && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              {t('featured.noProducts')}
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setPriceRange('all');
                setCategoryFilter('all');
              }}
            >
              {t('featured.resetFilters')}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}