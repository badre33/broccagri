-- Insert comprehensive product data based on broccagri.ma
INSERT INTO public.products (name, slug, description, price, unit, category_id, image_url, stock, organic, season, origin) VALUES

-- Légumes
('Pomme de terre Blanche', 'pomme-de-terre-blanche', 'Pommes de terre fraîches du terroir marocain, parfaites pour toutes vos préparations culinaires', 6.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop', 100, false, 'toute l''année', 'Maroc'),

('Pomme de terre Rouge', 'pomme-de-terre-rouge', 'Pommes de terre rouges à chair ferme, idéales pour les grillades et plats au four', 6.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=400&h=300&fit=crop', 80, false, 'toute l''année', 'Maroc'),

('Pomme de terre frite', 'pomme-de-terre-frite', 'Variété spécialement sélectionnée pour des frites croustillantes et savoureuses', 6.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1553978297-833d09932d62?w=400&h=300&fit=crop', 60, false, 'toute l''année', 'Maroc'),

('Pomme douce', 'pomme-douce', 'Patates douces riches en vitamines et minéraux, au goût naturellement sucré', 7.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1574707255079-46d588b3b4c0?w=400&h=300&fit=crop', 40, true, 'automne-hiver', 'Maroc'),

('Topinambour', 'topinambour', 'Légume racine aux saveurs subtiles de noisette, riche en fibres', 15.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1594998432863-be0210b30d3c?w=400&h=300&fit=crop', 20, true, 'automne-hiver', 'Maroc'),

('Carotte', 'carotte', 'Carottes croquantes et sucrées, riches en bêta-carotène', 5.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1582515073490-39981397c445?w=400&h=300&fit=crop', 120, true, 'toute l''année', 'Maroc'),

('Oignon', 'oignon', 'Oignons frais de qualité premium, base essentielle de la cuisine marocaine', 12.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&h=300&fit=crop', 200, false, 'toute l''année', 'Maroc'),

('Oignon Rouge', 'oignon-rouge', 'Oignons rouges doux et parfumés, parfaits pour les salades', 14.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1508313691951-74d7e221c07e?w=400&h=300&fit=crop', 80, false, 'toute l''année', 'Maroc'),

('Oignon Vert', 'oignon-vert', 'Oignons verts frais pour parfumer vos plats et salades', 7.00, 'botte', 
  (SELECT id FROM public.categories WHERE slug = 'herbes'), 
  'https://images.unsplash.com/photo-1599940824203-3b980b5e2d7d?w=400&h=300&fit=crop', 50, true, 'printemps-été', 'Maroc'),

('Tomate', 'tomate', 'Tomates juteuses et savoureuses, cultivées sous le soleil marocain', 6.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop', 150, true, 'printemps-été', 'Maroc'),

('Poivron vert', 'poivron-vert', 'Poivrons verts croquants et savoureux, riches en vitamine C', 6.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?w=400&h=300&fit=crop', 90, false, 'été', 'Maroc'),

('Poivron Rouge', 'poivron-rouge', 'Poivrons rouges sucrés et colorés, parfaits pour vos plats', 6.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', 75, false, 'été', 'Maroc'),

('Poivron Doux', 'poivron-doux', 'Poivrons doux et colorés, variété premium', 12.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop', 60, true, 'été', 'Maroc'),

('Aubergine', 'aubergine', 'Aubergines violettes brillantes, incontournables de la cuisine méditerranéenne', 5.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400&h=300&fit=crop', 70, true, 'été', 'Maroc'),

('Courgette', 'courgette', 'Courgettes tendres et savoureuses, légères et nutritives', 5.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1566819849394-cac7c1ad9b42?w=400&h=300&fit=crop', 85, true, 'été', 'Maroc'),

('Brocoli', 'brocoli', 'Brocolis verts nutritifs, superaliment riche en vitamines', 6.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=300&fit=crop', 45, true, 'automne-hiver', 'Maroc'),

('Chou Fleur', 'chou-fleur', 'Choux-fleurs blancs et fermes, parfaits pour vos gratins', 8.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?w=400&h=300&fit=crop', 35, true, 'automne-hiver', 'Maroc'),

('Chou Vert', 'chou-vert', 'Choux verts frais, riches en fibres et vitamines', 6.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1594282486558-14b92bb65699?w=400&h=300&fit=crop', 40, true, 'automne-hiver', 'Maroc'),

('Chou Rouge', 'chou-rouge', 'Choux rouges colorés, parfaits pour les salades croquantes', 8.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1553978297-833d09932d62?w=400&h=300&fit=crop', 30, true, 'automne-hiver', 'Maroc'),

('Citrouille', 'citrouille', 'Citrouilles rouge orangé, parfaites pour vos soupes d''automne', 5.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop', 25, true, 'automne', 'Maroc'),

('Concombre', 'concombre', 'Concombres frais et croquants, parfaits pour vos salades d''été', 5.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'legumes'), 
  'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=300&fit=crop', 110, true, 'été', 'Maroc'),

-- Herbes et Légumes verts
('Cardon', 'cardon', 'Cardon frais en botte, légume traditionnel méditerranéen', 5.00, 'botte', 
  (SELECT id FROM public.categories WHERE slug = 'herbes'), 
  'https://images.unsplash.com/photo-1598964356161-754cc07ffa36?w=400&h=300&fit=crop', 20, true, 'hiver', 'Maroc'),

('Fenouil', 'fenouil', 'Fenouil parfumé au goût anisé, riche en vitamines', 5.00, 'botte', 
  (SELECT id FROM public.categories WHERE slug = 'herbes'), 
  'https://images.unsplash.com/photo-1623078454103-73c8fe2117ae?w=400&h=300&fit=crop', 25, true, 'automne-hiver', 'Maroc'),

('Haricot vert', 'haricot-vert', 'Haricots verts tendres et fins, cueillis à maturité parfaite', 18.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'herbes'), 
  'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=400&h=300&fit=crop', 40, true, 'été', 'Maroc'),

('Petit pois', 'petit-pois', 'Petits pois sucrés et tendres, fraîchement écossés', 12.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'herbes'), 
  'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop', 30, true, 'printemps', 'Maroc'),

('Fève', 'feve', 'Fèves fraîches traditionnelles, incontournables du printemps marocain', 7.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'herbes'), 
  'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400&h=300&fit=crop', 35, true, 'printemps', 'Maroc'),

('Navet', 'navet', 'Navets blancs et violets, légume racine au goût délicat', 7.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'herbes'), 
  'https://images.unsplash.com/photo-1594998432863-be0210b30d3c?w=400&h=300&fit=crop', 45, true, 'automne-hiver', 'Maroc'),

('Artichaud Beldi', 'artichaud-beldi', 'Artichauts locaux beldi, variété traditionnelle marocaine', 5.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'herbes'), 
  'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop', 25, true, 'printemps', 'Maroc'),

('Artichaud', 'artichaud', 'Artichauts frais premium, sélectionnés pour leur tendreté', 10.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'herbes'), 
  'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop', 20, true, 'printemps', 'Maroc'),

-- Salades
('Laitue', 'laitue', 'Laitue fraîche et croquante, base parfaite pour vos salades', 3.00, 'pièce', 
  (SELECT id FROM public.categories WHERE slug = 'salades'), 
  'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop', 60, true, 'toute l''année', 'Maroc'),

('Épinards', 'epinards', 'Épinards verts nutritifs, riches en fer et vitamines', 5.00, 'botte', 
  (SELECT id FROM public.categories WHERE slug = 'salades'), 
  'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop', 40, true, 'automne-hiver', 'Maroc'),

('Roquette', 'roquette', 'Roquette piquante et aromatique, parfaite pour relever vos salades', 8.00, 'botte', 
  (SELECT id FROM public.categories WHERE slug = 'salades'), 
  'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop', 30, true, 'automne-printemps', 'Maroc'),

('Mâche', 'mache', 'Mâche douce et tendre, salade délicate aux saveurs subtiles', 12.00, 'botte', 
  (SELECT id FROM public.categories WHERE slug = 'salades'), 
  'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop', 25, true, 'automne-hiver', 'Maroc'),

-- Fruits
('Orange', 'orange', 'Oranges juteuses du Maroc, gorgées de vitamine C', 8.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'fruits'), 
  'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&h=300&fit=crop', 180, true, 'hiver', 'Maroc'),

('Pomme', 'pomme', 'Pommes croquantes et sucrées, variétés sélectionnées', 15.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'fruits'), 
  'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop', 120, false, 'automne-hiver', 'Import'),

('Banane', 'banane', 'Bananes mûres et sucrées, riches en potassium', 12.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'fruits'), 
  'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop', 200, false, 'toute l''année', 'Import'),

('Citron', 'citron', 'Citrons frais et parfumés, indispensables en cuisine', 10.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'fruits'), 
  'https://images.unsplash.com/photo-1590502593747-42a996133562?w=400&h=300&fit=crop', 100, true, 'toute l''année', 'Maroc'),

('Mangue', 'mangue', 'Mangues tropicales juteuses et parfumées', 25.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'fruits'), 
  'https://images.unsplash.com/photo-1553978297-833d09932d62?w=400&h=300&fit=crop', 50, false, 'été', 'Import'),

('Avocat', 'avocat', 'Avocats crémeux, riches en bonnes graisses', 35.00, 'kg', 
  (SELECT id FROM public.categories WHERE slug = 'fruits'), 
  'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop', 40, false, 'toute l''année', 'Import');