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
import laitueVerte from '@/assets/products/laitue-verte.jpg';
import asperges from '@/assets/products/asperges.jpg';
import aubergines from '@/assets/products/aubergines.jpg';
import betteraves from '@/assets/products/betteraves.jpg';
import champignons from '@/assets/products/champignons.jpg';
import chouRouge from '@/assets/products/chou-rouge.jpg';
import chouVert from '@/assets/products/chou-vert.jpg';
import citrouille from '@/assets/products/citrouille.jpg';
import citrouillerouge from '@/assets/products/citrouille-rouge.jpg';
import courgettes from '@/assets/products/courgettes.jpg';
import endives from '@/assets/products/endives.jpg';
import epinards from '@/assets/products/epinards.jpg';
import epinardsPottes from '@/assets/products/epinards-pottes.jpg';
import petitsPois from '@/assets/products/petits-pois.jpg';
import poivronDoux from '@/assets/products/poivron-doux.jpg';
import poivronRouge from '@/assets/products/poivron-rouge.jpg';
import poivronVert from '@/assets/products/poivron-vert.jpg';
import pommesDeTerresFrites from '@/assets/products/pommes-de-terre-frites.jpg';
import pommesDouces from '@/assets/products/pommes-douces.jpg';
import topinambours from '@/assets/products/topinambours.jpg';
import ananas from '@/assets/products/ananas.jpg';
import bananeImportee from '@/assets/products/banane-importee.jpg';
import bananeLocale from '@/assets/products/banane-locale.jpg';
import fraises from '@/assets/products/fraises.jpg';
import kaki from '@/assets/products/kaki.jpg';
import kiwi from '@/assets/products/kiwi.jpg';
import mangues from '@/assets/products/mangues.jpg';
import orangeAJus from '@/assets/products/orange-a-jus.jpg';
import orangeClementine from '@/assets/products/orange-clementine.jpg';
import orangeNavel from '@/assets/products/orange-navel.jpg';
import poires from '@/assets/products/poires.jpg';
import pommeImportee from '@/assets/products/pomme-importee.jpg';
import pommeLocaleGrand from '@/assets/products/pomme-locale-grand.jpg';
import pommeLocaleMoyen from '@/assets/products/pomme-locale-moyen.jpg';
import bataviaRouge from '@/assets/products/batavia-rouge.jpg';
import celeriRave from '@/assets/products/celeri-rave.jpg';
import cheneRouge from '@/assets/products/chene-rouge.jpg';
import cheneVert from '@/assets/products/chene-vert.jpg';
import germeAlfalfa from '@/assets/products/germe-alfalfa-new.jpg';
import germeBetterave from '@/assets/products/germe-betterave-new.jpg';
import germePoireau from '@/assets/products/germe-poireau-new.jpg';
import laitueRouge from '@/assets/products/laitue-rouge.jpg';
import loloRouge from '@/assets/products/lollo-rouge-final.jpg';
import mesclun from '@/assets/products/mesclun.jpg';
import pousseBetterave from '@/assets/products/pousse-betterave-new.jpg';
import pousseEpinard from '@/assets/products/pousse-epinard-new.jpg';
import tomateCerise from '@/assets/products/tomate-cerise-new.jpg';
import aneth from '@/assets/products/aneth.jpg';
import artichaut from '@/assets/products/artichaut.jpg';
import artichautBeldi from '@/assets/products/artichaut-beldi.jpg';
import basilic from '@/assets/products/basilic.jpg';
import cardon from '@/assets/products/cardon.jpg';
import ciboulette from '@/assets/products/ciboulette.jpg';
import fenouil from '@/assets/products/fenouil.jpg';
import feves from '@/assets/products/feves.jpg';
import haricotsVerts from '@/assets/products/haricots-verts.jpg';
import mauveDesBois from '@/assets/products/mauve-des-bois.jpg';
import navets from '@/assets/products/navets.jpg';
import romarin from '@/assets/products/romarin.jpg';

// Mapping des images de produits par nom/slug
export const productImagesByName: Record<string, string> = {
  'persil': persil,
  'coriandre': coriandre,
  'iceberg': saladeIceberg,
  'laitue-romaine': laitueRomaine,
  'salade-frisee': saladeFrisee,
  'batavia-verte': bataviaVerte,
  'pomme-de-terre-petite': pommesDeTerresPetites,
  'thym': thym,
  'celeri': celeri,
  'laitue-verte': laitueVerte,
  'laitue': lettuceImg,
  'menthe': mintImg,
  'asperge': asperges,
  'aubergine': aubergines,
  'betterave': betteraves,
  'champignon': champignons,
  'chou-rouge': chouRouge,
  'chou-vert': chouVert,
  'citrouille': citrouille,
  'citrouille-rouge': citrouillerouge,
  'courgette': courgettes,
  'endive': endives,
  'epinard': epinards,
  'epinard-pottes': epinardsPottes,
  'petits-pois': petitsPois,
  'poivron-doux': poivronDoux,
  'poivron-rouge': poivronRouge,
  'poivron-vert': poivronVert,
  'pomme-de-terre-frite': pommesDeTerresFrites,
  'pomme-douce': pommesDouces,
  'topinambour': topinambours,
  'ananas': ananas,
  'banane-importee': bananeImportee,
  'banane-locale': bananeLocale,
  'fraise': fraises,
  'kaki': kaki,
  'kiwi': kiwi,
  'mangue': mangues,
  'orange-a-jus': orangeAJus,
  'orange-clementine': orangeClementine,
  'orange-navel': orangeNavel,
  'navel': orangeNavel,
  'poire': poires,
  'pomme-importee': pommeImportee,
  'pomme-locale-grand-calibre': pommeLocaleGrand,
  'pomme-locale-moyen-calibre': pommeLocaleMoyen,
  'pomme-locale-grand': pommeLocaleGrand,
  'pomme-locale-moyen': pommeLocaleMoyen,
  'pomme-locale': pommeLocaleMoyen,
  'batavia-rouge': bataviaRouge,
  'celeri-rave': celeriRave,
  'chene-rouge': cheneRouge,
  'chene-vert': cheneVert,
  'germe-alfalfa': germeAlfalfa,
  'germes-alfalfa': germeAlfalfa,
  'germe-betterave': germeBetterave,
  'germes-betterave': germeBetterave,
  'germe-poireau': germePoireau,
  'germes-poireau': germePoireau,
  'laitue-rouge': laitueRouge,
  'lolo-rouge': loloRouge,
  'lollo-rouge': loloRouge,
  'lolo': loloRouge,
  'lollo': loloRouge,
  'salade-lollo-rouge': loloRouge,
  'salade-lolo-rouge': loloRouge,
  'lou-loup-rouge': loloRouge,
  'mesclun': mesclun,
  'pousse-betterave': pousseBetterave,
  'pousse-epinard': pousseEpinard,
  'pousses-betterave': pousseBetterave,
  'pousses-epinard': pousseEpinard,
  'tomate-cerise': tomateCerise,
  'tomates-cerise': tomateCerise,
  'tomates-cerises': tomateCerise,
  'tomate-cherry': tomateCerise,
  'aneth': aneth,
  'artichaut': artichaut,
  'artichaut-beldi': artichautBeldi,
  'basilic': basilic,
  'cardon': cardon,
  'ciboulette': ciboulette,
  'fenouil': fenouil,
  'feve': feves,
  'feves': feves,
  'haricot-vert': haricotsVerts,
  'haricots-verts': haricotsVerts,
  'mauve-des-bois': mauveDesBois,
  'navet': navets,
  'navets': navets,
  'oignon-vert': greenOnions,
  'romarin': romarin,
  'petit-pois': petitsPois,
};

// Mapping des images de produits par URL (existant)
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
export const getProductImage = (imageUrl: string, productSlug?: string): string => {
  // Priorité 1: Chercher par slug si disponible
  if (productSlug && productImagesByName[productSlug]) {
    return productImagesByName[productSlug];
  }
  
  // Priorité 2: Chercher par URL si disponible
  if (imageUrl && productImages[imageUrl]) {
    return productImages[imageUrl];
  }
  
  // Fallback: image par défaut
  return imageUrl || 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&h=300&fit=crop&auto=format';
};