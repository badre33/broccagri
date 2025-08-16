// Legacy data structure - now using Supabase
// This file is kept for backward compatibility

export interface LegacyProduct {
  id: number;
  name: string;
  category: 'legumes' | 'fruits' | 'salades' | 'herbes';
  price: number;
  unit: string;
  image: string;
  description?: string;
  origin?: string;
  season?: string;
  organic?: boolean;
}

export const legacyCategories = [
  { id: 'legumes', name: 'Légumes', description: 'Légumes frais du terroir marocain' },
  { id: 'fruits', name: 'Fruits', description: 'Fruits de saison juteux et savoureux' },
  { id: 'salades', name: 'Salades', description: 'Salades et légumes verts croquants' },
  { id: 'herbes', name: 'Herbes', description: 'Herbes fraîches et légumes verts' },
];