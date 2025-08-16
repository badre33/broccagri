import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/custom-button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from './ProductCard';
import { products, categories, Product } from '@/data/products';
import { useCart } from '@/hooks/useCart';

interface ProductCatalogProps {
  selectedCategory?: string;
}

export function ProductCatalog({ selectedCategory }: ProductCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>(selectedCategory || 'all');
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'medium' | 'high'>('all');
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
      
      const matchesPrice = priceRange === 'all' || 
                          (priceRange === 'low' && product.price <= 8) ||
                          (priceRange === 'medium' && product.price > 8 && product.price <= 15) ||
                          (priceRange === 'high' && product.price > 15);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, filterCategory, priceRange]);

  const handleAddToCart = (product: Product, quantity: number) => {
    addToCart(product, quantity);
  };

  return (
    <section id="catalogue" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre Catalogue
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection complète de produits frais, cultivés avec passion par nos agriculteurs partenaires.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={filterCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterCategory('all')}
            >
              Tous
            </Button>
            {categories.map(category => (
              <Button
                key={category.id}
                variant={filterCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Price filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm text-muted-foreground mr-2 self-center">Prix:</span>
            <Button
              variant={priceRange === 'all' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setPriceRange('all')}
            >
              Tous
            </Button>
            <Button
              variant={priceRange === 'low' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setPriceRange('low')}
            >
              ≤ 8 DH
            </Button>
            <Button
              variant={priceRange === 'medium' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setPriceRange('medium')}
            >
              8-15 DH
            </Button>
            <Button
              variant={priceRange === 'high' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setPriceRange('high')}
            >
              &gt; 15 DH
            </Button>
          </div>
        </div>

        {/* Results info */}
        <div className="mb-6">
          <Badge variant="outline" className="text-sm">
            {filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''} trouvé{filteredProducts.length !== 1 ? 's' : ''}
          </Badge>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Aucun produit trouvé avec ces critères.</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setFilterCategory('all');
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