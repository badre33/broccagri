import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/custom-button';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { useProducts, useCategories, Product } from '@/hooks/useProducts';
import { useSupabaseCart } from '@/hooks/useSupabaseCart';

interface ProductCatalogHomeProps {
  selectedCategory?: string;
}

export function ProductCatalogHome({ selectedCategory }: ProductCatalogHomeProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<string>('all');
  
  const { addToCart } = useSupabaseCart();
  const { categories, loading: categoriesLoading } = useCategories();
  
  // Page d'accueil : afficher les produits mis en avant
  const showFeaturedOnly = true;
  
  const { products, loading: productsLoading } = useProducts(
    selectedCategory || undefined,
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
            Produits Mis en Avant
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de produits les plus populaires, cultivés avec passion par nos agriculteurs partenaires
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Rechercher un produit..."
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
            <Button variant="premium" className="text-sm">
              Produits mis en avant
            </Button>
            <Button variant="outline" className="text-sm">
              Fruits
            </Button>
            <Button variant="outline" className="text-sm">
              Herbes
            </Button>
            <Button variant="outline" className="text-sm">
              Légumes
            </Button>
            <Button variant="outline" className="text-sm">
              Salades
            </Button>
          </div>

          {/* Filtres par prix */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={priceRange === 'all' ? 'premium' : 'outline'}
              onClick={() => setPriceRange('all')}
              className="text-sm"
            >
              Tous les prix
            </Button>
            <Button
              variant={priceRange === 'low' ? 'premium' : 'outline'}
              onClick={() => setPriceRange('low')}
              className="text-sm"
            >
              ≤ 10 DH
            </Button>
            <Button
              variant={priceRange === 'medium' ? 'premium' : 'outline'}
              onClick={() => setPriceRange('medium')}
              className="text-sm"
            >
              10-20 DH
            </Button>
            <Button
              variant={priceRange === 'high' ? 'premium' : 'outline'}
              onClick={() => setPriceRange('high')}
              className="text-sm"
            >
              &gt; 20 DH
            </Button>
          </div>
        </div>

        {/* Nombre de produits trouvés */}
        <div className="flex items-center justify-between mb-6">
          <Badge variant="outline" className="text-sm">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
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
              Aucun produit trouvé pour vos critères
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setPriceRange('all');
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}