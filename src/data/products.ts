export interface Product {
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

export const products: Product[] = [
  // Légumes
  { id: 1, name: "Pomme de terre Blanche", category: "legumes", price: 6.00, unit: "kg", image: "/images/pomme-terre-blanche.jpg", description: "Pommes de terre fraîches du terroir marocain" },
  { id: 2, name: "Pomme de terre Rouge", category: "legumes", price: 6.00, unit: "kg", image: "/images/pomme-terre-rouge.jpg", description: "Pommes de terre rouges parfaites pour les grillades" },
  { id: 3, name: "Pomme de terre frite", category: "legumes", price: 6.00, unit: "kg", image: "/images/pomme-terre-frite.jpg", description: "Idéales pour les frites maison" },
  { id: 4, name: "Pomme de terre Pt", category: "legumes", price: 6.00, unit: "kg", image: "/images/pomme-terre-pt.jpg", description: "Petites pommes de terre tendres" },
  { id: 5, name: "Pomme douce", category: "legumes", price: 7.00, unit: "kg", image: "/images/pomme-douce.jpg", description: "Patates douces riches en vitamines" },
  { id: 6, name: "Topinambour", category: "legumes", price: 15.00, unit: "kg", image: "/images/topinambour.jpg", description: "Légume racine aux saveurs subtiles" },
  { id: 7, name: "Carotte", category: "legumes", price: 5.00, unit: "kg", image: "/images/carotte.jpg", description: "Carottes croquantes et sucrées" },
  { id: 8, name: "Oignon", category: "legumes", price: 12.00, unit: "kg", image: "/images/oignon.jpg", description: "Oignons frais de qualité premium" },
  { id: 9, name: "Oignon Rouge", category: "legumes", price: 14.00, unit: "kg", image: "/images/oignon-rouge.jpg", description: "Oignons rouges doux et parfumés" },
  { id: 10, name: "Oignon Verte", category: "legumes", price: 7.00, unit: "kg", image: "/images/oignon-vert.jpg", description: "Oignons verts frais pour vos salades" },
  { id: 11, name: "Tomate", category: "legumes", price: 6.00, unit: "kg", image: "/images/tomate.jpg", description: "Tomates juteuses et savoureuses" },
  { id: 12, name: "Poivron vert", category: "legumes", price: 6.00, unit: "kg", image: "/images/poivron-vert.jpg", description: "Poivrons verts croquants" },
  { id: 13, name: "Poivron Rouge", category: "legumes", price: 6.00, unit: "kg", image: "/images/poivron-rouge.jpg", description: "Poivrons rouges sucrés" },
  { id: 14, name: "Poivron Douce", category: "legumes", price: 12.00, unit: "kg", image: "/images/poivron-doux.jpg", description: "Poivrons doux et colorés" },
  { id: 15, name: "Aubergine", category: "legumes", price: 5.00, unit: "kg", image: "/images/aubergine.jpg", description: "Aubergines violettes brillantes" },
  { id: 16, name: "Courgette", category: "legumes", price: 5.00, unit: "kg", image: "/images/courgette.jpg", description: "Courgettes tendres et savoureuses" },
  { id: 17, name: "Brocoli", category: "legumes", price: 6.00, unit: "kg", image: "/images/brocoli.jpg", description: "Brocolis verts nutritifs" },
  { id: 18, name: "Chou Fleure", category: "legumes", price: 8.00, unit: "kg", image: "/images/chou-fleur.jpg", description: "Choux-fleurs blancs et fermes" },
  { id: 19, name: "Chou Vert", category: "legumes", price: 6.00, unit: "kg", image: "/images/chou-vert.jpg", description: "Choux verts frais" },
  { id: 20, name: "Chou Rouge", category: "legumes", price: 8.00, unit: "kg", image: "/images/chou-rouge.jpg", description: "Choux rouges colorés" },
  { id: 21, name: "Citrouille rouge", category: "legumes", price: 5.00, unit: "kg", image: "/images/citrouille.jpg", description: "Citrouilles rouge orangé" },
  { id: 22, name: "Concombre", category: "legumes", price: 5.00, unit: "kg", image: "/images/concombre.jpg", description: "Concombres frais et croquants" },

  // Herbes et Légumes verts
  { id: 23, name: "Cardon", category: "herbes", price: 5.00, unit: "botte", image: "/images/cardon.jpg", description: "Cardon frais en botte" },
  { id: 24, name: "Fenouil", category: "herbes", price: 5.00, unit: "botte", image: "/images/fenouil.jpg", description: "Fenouil parfumé" },
  { id: 25, name: "Haricot vert", category: "herbes", price: 18.00, unit: "botte", image: "/images/haricot-vert.jpg", description: "Haricots verts tendres" },
  { id: 26, name: "Petit pois", category: "herbes", price: 12.00, unit: "botte", image: "/images/petit-pois.jpg", description: "Petits pois sucrés" },
  { id: 27, name: "Fève", category: "herbes", price: 7.00, unit: "botte", image: "/images/feve.jpg", description: "Fèves fraîches" },
  { id: 28, name: "Navet", category: "herbes", price: 7.00, unit: "kg", image: "/images/navet.jpg", description: "Navets blancs et violets" },
  { id: 29, name: "Artichaud Beldi", category: "herbes", price: 5.00, unit: "kg", image: "/images/artichaud-beldi.jpg", description: "Artichauts locaux beldi" },
  { id: 30, name: "Artichaud", category: "herbes", price: 10.00, unit: "kg", image: "/images/artichaud.jpg", description: "Artichauts frais premium" },

  // Salades
  { id: 31, name: "Laitue", category: "salades", price: 3.00, unit: "pièce", image: "/images/laitue.jpg", description: "Laitue fraîche et croquante" },
  { id: 32, name: "Épinards", category: "salades", price: 5.00, unit: "botte", image: "/images/epinards.jpg", description: "Épinards verts nutritifs" },
  { id: 33, name: "Roquette", category: "salades", price: 8.00, unit: "botte", image: "/images/roquette.jpg", description: "Roquette piquante" },
  { id: 34, name: "Mâche", category: "salades", price: 12.00, unit: "botte", image: "/images/mache.jpg", description: "Mâche douce et tendre" },

  // Fruits (exemples)
  { id: 35, name: "Orange", category: "fruits", price: 8.00, unit: "kg", image: "/images/orange.jpg", description: "Oranges juteuses du Maroc" },
  { id: 36, name: "Pomme", category: "fruits", price: 15.00, unit: "kg", image: "/images/pomme.jpg", description: "Pommes croquantes" },
  { id: 37, name: "Banane", category: "fruits", price: 12.00, unit: "kg", image: "/images/banane.jpg", description: "Bananes mûres et sucrées" },
  { id: 38, name: "Citron", category: "fruits", price: 10.00, unit: "kg", image: "/images/citron.jpg", description: "Citrons frais et parfumés" },
];

export const categories = [
  { id: 'legumes', name: 'Légumes', description: 'Légumes frais du terroir marocain' },
  { id: 'fruits', name: 'Fruits', description: 'Fruits de saison juteux et savoureux' },
  { id: 'salades', name: 'Salades', description: 'Salades et légumes verts croquants' },
  { id: 'herbes', name: 'Herbes', description: 'Herbes fraîches et légumes verts' },
];