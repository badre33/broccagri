import { useState, useEffect } from 'react';
import { localProducts, localCategories, LocalProduct, LocalCategory } from '@/data/localProducts';

// Alias des types locaux pour compatibilité
export type Product = LocalProduct;
export type Category = LocalCategory;

export const useProducts = (categorySlug?: string, searchTerm?: string, featuredOnly?: boolean) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, [categorySlug, searchTerm, featuredOnly]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      
      let filtered = [...localProducts];

      // Filtrer par catégorie si spécifiée
      if (categorySlug && categorySlug !== 'all') {
        const category = localCategories.find(c => c.slug === categorySlug);
        if (category) {
          filtered = filtered.filter(p => p.category_id === category.id);
        }
      }

      // Filtrer par terme de recherche
      if (searchTerm && searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(term) || 
          (p.description && p.description.toLowerCase().includes(term))
        );
      }

      // Si on veut seulement les produits mis en avant
      if (featuredOnly) {
        filtered = filtered.sort((a, b) => a.price - b.price).slice(0, 12);
      } else {
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
      }

      setProducts(filtered);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
};

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const sorted = [...localCategories].sort((a, b) => a.name.localeCompare(b.name));
      setCategories(sorted);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    categories,
    loading,
    error,
    refetch: fetchCategories,
  };
};

export const useProduct = (slug: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const found = localProducts.find(p => p.slug === slug && p.is_active);
      setProduct(found || null);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    product,
    loading,
    error,
    refetch: fetchProduct,
  };
};
