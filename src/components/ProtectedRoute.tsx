import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'manager' | 'operator' | 'customer';
}

export function ProtectedRoute({ children, requiredRole = 'admin' }: ProtectedRouteProps) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Configuration de l'écoute des changements d'authentification
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Récupérer le rôle de l'utilisateur
          setTimeout(async () => {
            try {
              const { data: role, error } = await supabase
                .rpc('get_user_role', { _user_id: session.user.id });
              
              if (error) {
                console.error('Erreur lors de la récupération du rôle:', error);
                setUserRole(null);
              } else {
                setUserRole(role);
              }
            } catch (error) {
              console.error('Erreur:', error);
              setUserRole(null);
            } finally {
              setLoading(false);
            }
          }, 0);
        } else {
          setUserRole(null);
          setLoading(false);
        }
      }
    );

    // Vérifier la session existante
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        supabase
          .rpc('get_user_role', { _user_id: session.user.id })
          .then(({ data: role, error }) => {
            if (error) {
              console.error('Erreur lors de la récupération du rôle:', error);
              setUserRole(null);
            } else {
              setUserRole(role);
            }
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Affichage du loader pendant la vérification
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Vérification des permissions...</p>
        </div>
      </div>
    );
  }

  // Redirection si pas connecté
  if (!user || !session) {
    return <Navigate to="/auth" replace />;
  }

  // Redirection si pas le bon rôle
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/auth" replace />;
  }

  // Affichage du contenu protégé
  return <>{children}</>;
}