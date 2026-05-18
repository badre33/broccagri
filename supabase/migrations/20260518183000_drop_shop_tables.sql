-- Migration : retirer la boutique du vitrine
-- Le vitrine ne gère que le contenu (products + categories pour les fiches SEO).
-- Le panier, les commandes, l'auth admin et tout le workflow d'achat vivent
-- désormais exclusivement dans le repo broccagri-shop, sur une autre DB Supabase.

BEGIN;

-- Tables dépendantes d'abord (FK)
DROP TABLE IF EXISTS public.order_items CASCADE;
DROP TABLE IF EXISTS public.orders CASCADE;
DROP TABLE IF EXISTS public.cart_items CASCADE;
DROP TABLE IF EXISTS public.addresses CASCADE;
DROP TABLE IF EXISTS public.user_roles CASCADE;
DROP TABLE IF EXISTS public.user_profiles CASCADE;

-- Types / enums qui ne sont plus référencés
DROP TYPE IF EXISTS public.order_status;
DROP TYPE IF EXISTS public.address_type;
DROP TYPE IF EXISTS public.user_role;

-- Fonctions liées à l'auth/role/handle_new_user
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;
DROP FUNCTION IF EXISTS public.has_role(UUID, public.user_role) CASCADE;
DROP FUNCTION IF EXISTS public.is_admin() CASCADE;

-- Ce qui reste après cette migration côté vitrine :
--   - public.categories  (id, name, slug, description, image_url, traductions AR)
--   - public.products    (id, name, slug, description, price, unit, category_id, image_url, stock, organic, season, origin, is_active)
--   - public.update_updated_at_column()  (trigger utilitaire utilisé par products/categories)

COMMIT;

NOTIFY pgrst, 'reload schema';
