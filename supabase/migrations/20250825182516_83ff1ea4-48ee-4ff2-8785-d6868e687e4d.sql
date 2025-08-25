-- Mise à jour des images des produits avec les nouvelles images générées

-- Pommes de terre blanches
UPDATE products 
SET image_url = '/src/assets/products/pommes-de-terre-blanches.jpg'
WHERE name = 'Pomme de terre Blanche';

-- Pommes de terre rouges  
UPDATE products 
SET image_url = '/src/assets/products/pommes-de-terre-rouges.jpg'
WHERE name = 'Pomme de terre Rouge';

-- Carottes
UPDATE products 
SET image_url = '/src/assets/products/carottes.jpg'
WHERE name = 'Carotte';

-- Oignons blancs
UPDATE products 
SET image_url = '/src/assets/products/oignons-blancs.jpg'
WHERE name = 'Oignon';

-- Oignons rouges
UPDATE products 
SET image_url = '/src/assets/products/oignons-rouges.jpg'
WHERE name = 'Oignon Rouge';

-- Oignons verts
UPDATE products 
SET image_url = '/src/assets/products/oignons-verts.jpg'
WHERE name = 'Oignon Vert';

-- Tomates (déjà générée précédemment)
UPDATE products 
SET image_url = '/src/assets/products/tomates.jpg'
WHERE name = 'Tomate';

-- Laitue (déjà générée précédemment)  
UPDATE products 
SET image_url = '/src/assets/products/laitue.jpg'
WHERE name ILIKE '%laitue%' OR name ILIKE '%salade%';

-- Menthe (déjà générée précédemment)
UPDATE products 
SET image_url = '/src/assets/products/menthe.jpg'
WHERE name ILIKE '%menthe%';

-- Oranges (déjà générée précédemment)
UPDATE products 
SET image_url = '/src/assets/products/oranges.jpg'
WHERE name ILIKE '%orange%';