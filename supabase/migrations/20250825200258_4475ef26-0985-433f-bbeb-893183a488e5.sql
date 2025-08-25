-- Ajouter les colonnes de traduction arabe pour les catégories
ALTER TABLE public.categories 
ADD COLUMN name_ar text,
ADD COLUMN description_ar text;

-- Ajouter les colonnes de traduction arabe pour les produits  
ALTER TABLE public.products
ADD COLUMN name_ar text,
ADD COLUMN description_ar text,
ADD COLUMN origin_ar text;

-- Remplir les traductions arabes pour les catégories existantes
UPDATE public.categories SET 
  name_ar = CASE 
    WHEN slug = 'legumes' THEN 'الخضروات'
    WHEN slug = 'fruits' THEN 'الفواكه'
    WHEN slug = 'salades' THEN 'السلطات'
    WHEN slug = 'herbes' THEN 'الأعشاب العطرية'
    ELSE name_ar
  END,
  description_ar = CASE
    WHEN slug = 'legumes' THEN 'خضرواتطازجة من التراب المغربي'
    WHEN slug = 'fruits' THEN 'فواكه موسمية طازجة ولذيذة'
    WHEN slug = 'salades' THEN 'سلطات وخضروات ورقية طازجة'
    WHEN slug = 'herbes' THEN 'أعشاب طازجة وخضروات ورقية'
    ELSE description_ar
  END;

-- Remplir les traductions arabes pour les produits existants
UPDATE public.products SET
  name_ar = CASE 
    WHEN slug = 'tomates' THEN 'طماطم'
    WHEN slug = 'carottes' THEN 'جزر'
    WHEN slug = 'oignons-blancs' THEN 'بصل أبيض'
    WHEN slug = 'oignons-rouges' THEN 'بصل أحمر'
    WHEN slug = 'oignons-verts' THEN 'بصل أخضر'
    WHEN slug = 'pommes-de-terre-blanches' THEN 'بطاطس بيضاء'
    WHEN slug = 'pommes-de-terre-rouges' THEN 'بطاطس حمراء'
    WHEN slug = 'laitue' THEN 'خس'
    WHEN slug = 'menthe' THEN 'نعناع'
    WHEN slug = 'oranges' THEN 'برتقال'
    ELSE name_ar
  END,
  description_ar = CASE
    WHEN slug = 'tomates' THEN 'طماطم طازجة ومغذية من المزارع المغربية'
    WHEN slug = 'carottes' THEN 'جزر برتقالي طازج وحلو من المزارع المحلية'
    WHEN slug = 'oignons-blancs' THEN 'بصل أبيض طازج ولذيذ لطبخاتك'
    WHEN slug = 'oignons-rouges' THEN 'بصل أحمر طازج بنكهة قوية'
    WHEN slug = 'oignons-verts' THEN 'بصل أخضر طازج للسلطات والطبخ'
    WHEN slug = 'pommes-de-terre-blanches' THEN 'بطاطس بيضاء عالية الجودة'
    WHEN slug = 'pommes-de-terre-rouges' THEN 'بطاطس حمراء لذيذة ومغذية'
    WHEN slug = 'laitue' THEN 'خس طازج ومقرمش للسلطات'
    WHEN slug = 'menthe' THEN 'نعناع طازج عطري من المغرب'
    WHEN slug = 'oranges' THEN 'برتقال حلو وطازج من بساتين المغرب'
    ELSE description_ar
  END,
  origin_ar = CASE
    WHEN origin = 'Maroc' THEN 'المغرب'
    WHEN origin = 'Agadir' THEN 'أكادير'
    WHEN origin = 'Casablanca' THEN 'الدار البيضاء'
    WHEN origin = 'Rabat' THEN 'الرباط'
    WHEN origin = 'Fès' THEN 'فاس'
    WHEN origin = 'Meknès' THEN 'مكناس'
    WHEN origin = 'Tanger' THEN 'طنجة'
    ELSE 'المغرب'
  END;