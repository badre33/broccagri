import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/custom-button';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { useProducts, useCategories, Product } from '@/hooks/useProducts';
import { useSupabaseCart } from '@/hooks/useSupabaseCart';

interface ProductCatalogProps {
  selectedCategory?: string;
}

// Descriptions personnalisées par catégorie
const getCategoryDescription = (selectedCategory?: string, categoryName?: string) => {
  if (!selectedCategory) {
    return 'Découvrez notre sélection de produits les plus populaires, cultivés avec passion par nos agriculteurs partenaires';
  }

  const descriptions = {
    legumes: 'Découvrez nos légumes frais cultivés dans le respect des traditions agricoles marocaines. Des produits de qualité, récoltés à maturité pour préserver toutes leurs saveurs et leurs bienfaits nutritionnels.',
    fruits: 'Savourez nos fruits de saison, gorgés de soleil et récoltés à parfaite maturité. Une explosion de saveurs naturelles directement de nos vergers partenaires vers votre table.',
    salades: 'Croquantes et rafraîchissantes, nos salades et légumes verts sont cueillis quotidiennement pour vous garantir une fraîcheur optimale. Parfaites pour des repas sains et équilibrés.',
    herbes: 'Aromates et herbes fraîches pour sublimer vos plats. Cultivées avec soin selon les méthodes traditionnelles, elles apporteront authenticité et parfum à votre cuisine.'
  };

  return descriptions[selectedCategory as keyof typeof descriptions] || 
    `Découvrez notre sélection complète de ${categoryName?.toLowerCase() || 'produits'} frais du terroir marocain`;
};

export function ProductCatalog({ selectedCategory }: ProductCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<string>('all');
  
  const { addToCart } = useSupabaseCart();
  const { categories, loading: categoriesLoading } = useCategories();
  
  // Si une catégorie est sélectionnée, on n'affiche que les produits de cette catégorie
  // Si aucune catégorie n'est sélectionnée (page d'accueil), on affiche les produits mis en avant
  const showFeaturedOnly = !selectedCategory;
  
  const { products, loading: productsLoading } = useProducts(
    selectedCategory || undefined,
    searchTerm || undefined,
    showFeaturedOnly
  );

  // Ne pas permettre de changer de catégorie si une catégorie est déjà sélectionnée
  const currentCategory = categories.find(c => c.slug === selectedCategory);

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
            {selectedCategory ? 
              currentCategory?.name || 'Produits' : 
              'Produits Mis en Avant'
            }
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {getCategoryDescription(selectedCategory, currentCategory?.name)}
          </p>
        </div>

        {/* Barre de recherche - Seulement sur page d'accueil */}
        {!selectedCategory && (
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
        )}

        {/* Filtres - Adaptés selon le contexte */}
        <div className="mb-8">
          {/* Filtres de catégories seulement sur la page d'accueil */}
          {!selectedCategory && (
            <div className="flex flex-wrap gap-2 mb-6">
              <Button
                variant="premium"
                className="text-sm"
              >
                Produits mis en avant
              </Button>
            </div>
          )}

          {/* Filtres par prix - Toujours disponibles */}
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