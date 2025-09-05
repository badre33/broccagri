// Import des images de produits générées
import tomatoImg from '@/assets/products/tomates.jpg';
import orangeImg from '@/assets/products/oranges.jpg';
import lettuceImg from '@/assets/products/laitue.jpg';
import mintImg from '@/assets/products/menthe.jpg';
import whitePotatoes from '@/assets/products/pommes-de-terre-blanches.jpg';
import redPotatoes from '@/assets/products/pommes-de-terre-rouges.jpg';
import carrots from '@/assets/products/carottes.jpg';
import whiteOnions from '@/assets/products/oignons-blancs.jpg';
import redOnions from '@/assets/products/oignons-rouges.jpg';
import greenOnions from '@/assets/products/oignons-verts.jpg';
import persil from '@/assets/products/persil.jpg';
import coriandre from '@/assets/products/coriandre.jpg';
import saladeIceberg from '@/assets/products/salade-iceberg.jpg';
import laitueRomaine from '@/assets/products/laitue-romaine.jpg';
import saladeFrisee from '@/assets/products/salade-frisee.jpg';
import bataviaVerte from '@/assets/products/batavia-verte.jpg';
import pommesDeTerresPetites from '@/assets/products/pommes-de-terre-petites.jpg';
import thym from '@/assets/products/thym.jpg';
import celeri from '@/assets/products/celeri.jpg';

// Mapping des images de produits
export const productImages: Record<string, string> = {
  '/src/assets/products/tomates.jpg': tomatoImg,
  '/src/assets/products/oranges.jpg': orangeImg,
  '/src/assets/products/laitue.jpg': lettuceImg,
  '/src/assets/products/menthe.jpg': mintImg,
  '/src/assets/products/pommes-de-terre-blanches.jpg': whitePotatoes,
  '/src/assets/products/pommes-de-terre-rouges.jpg': redPotatoes,
  '/src/assets/products/carottes.jpg': carrots,
  '/src/assets/products/oignons-blancs.jpg': whiteOnions,
  '/src/assets/products/oignons-rouges.jpg': redOnions,
  '/src/assets/products/oignons-verts.jpg': greenOnions,
  '/src/assets/products/persil.jpg': persil,
  '/src/assets/products/coriandre.jpg': coriandre,
  '/src/assets/products/salade-iceberg.jpg': saladeIceberg,
  '/src/assets/products/laitue-romaine.jpg': laitueRomaine,
  '/src/assets/products/salade-frisee.jpg': saladeFrisee,
  '/src/assets/products/batavia-verte.jpg': bataviaVerte,
  '/src/assets/products/pommes-de-terre-petites.jpg': pommesDeTerresPetites,
  '/src/assets/products/thym.jpg': thym,
  '/src/assets/products/celeri.jpg': celeri,
};

// Fonction pour obtenir l'image d'un produit
export const getProductImage = (imageUrl: string): string => {
  return productImages[imageUrl] || imageUrl;
};