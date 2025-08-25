-- Créer un trigger pour assigner automatiquement le rôle customer aux nouveaux utilisateurs
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  -- Créer le profil utilisateur
  INSERT INTO public.user_profiles (user_id, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name'
  );
  
  -- Assigner le rôle customer par défaut
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'customer');
  
  RETURN NEW;
END;
$function$;

-- Créer le trigger pour les nouveaux utilisateurs
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Fonction pour promouvoir un utilisateur en admin (utilisable par les admins existants)
CREATE OR REPLACE FUNCTION public.promote_to_admin(_user_email text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
DECLARE
    target_user_id uuid;
BEGIN
    -- Vérifier que l'utilisateur appelant est admin (sauf si c'est le premier admin)
    IF auth.uid() IS NOT NULL AND NOT has_role(auth.uid(), 'admin') THEN
        RETURN false;
    END IF;
    
    -- Trouver l'utilisateur par email
    SELECT id INTO target_user_id 
    FROM auth.users 
    WHERE email = _user_email;
    
    IF target_user_id IS NULL THEN
        RETURN false;
    END IF;
    
    -- Mettre à jour ou insérer le rôle admin
    INSERT INTO public.user_roles (user_id, role)
    VALUES (target_user_id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
    
    RETURN true;
END;
$function$;