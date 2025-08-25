-- Modifier la table orders pour que order_number soit généré automatiquement
ALTER TABLE public.orders 
ALTER COLUMN order_number SET DEFAULT generate_order_number();

-- Rendre order_number nullable temporairement pour éviter les conflits
ALTER TABLE public.orders 
ALTER COLUMN order_number DROP NOT NULL;

-- Re-ajouter la contrainte NOT NULL avec une valeur par défaut
UPDATE public.orders 
SET order_number = generate_order_number() 
WHERE order_number IS NULL OR order_number = '';

ALTER TABLE public.orders 
ALTER COLUMN order_number SET NOT NULL;