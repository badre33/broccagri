import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Lock } from 'lucide-react';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        // Vérifier si l'utilisateur est admin
        const { data: userRole } = await supabase
          .rpc('get_user_role', { _user_id: session.user.id });
        
        if (userRole === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    };
    checkUser();
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        // Inscription
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth`
          }
        });

        if (error) throw error;

        toast({
          title: "Inscription réussie",
          description: "Vérifiez votre email pour confirmer votre compte.",
        });
      } else {
        // Connexion
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        if (data.user) {
          // Vérifier le rôle de l'utilisateur
          const { data: userRole, error: roleError } = await supabase
            .rpc('get_user_role', { _user_id: data.user.id });

          if (roleError) {
            console.error('Erreur lors de la vérification du rôle:', roleError);
            toast({
              title: "Erreur d'accès",
              description: "Impossible de vérifier vos permissions.",
              variant: "destructive",
            });
            await supabase.auth.signOut();
            return;
          }

          if (userRole === 'admin') {
            toast({
              title: "Connexion réussie",
              description: "Redirection vers le back-office...",
            });
            navigate('/admin');
          } else {
            toast({
              title: "Accès refusé",
              description: "Vous n'avez pas les permissions d'administrateur.",
              variant: "destructive",
            });
            await supabase.auth.signOut();
          }
        }
      }
    } catch (error: any) {
      let errorMessage = "Une erreur est survenue";
      
      if (error.message.includes('Invalid login credentials')) {
        errorMessage = "Email ou mot de passe incorrect";
      } else if (error.message.includes('User already registered')) {
        errorMessage = "Cet email est déjà utilisé";
      } else if (error.message.includes('Password should be at least 6 characters')) {
        errorMessage = "Le mot de passe doit contenir au moins 6 caractères";
      }

      toast({
        title: "Erreur de connexion",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Lock className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">
            {isSignUp ? 'Créer un compte' : 'Connexion Admin'}
          </CardTitle>
          <CardDescription>
            {isSignUp 
              ? 'Créez votre compte administrateur'
              : 'Accédez au back-office BroccAgri'
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@broccagri.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  minLength={6}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                  {isSignUp ? 'Création...' : 'Connexion...'}
                </div>
              ) : (
                isSignUp ? 'Créer le compte' : 'Se connecter'
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Button
              variant="link"
              onClick={() => setIsSignUp(!isSignUp)}
              disabled={loading}
              className="text-sm"
            >
              {isSignUp 
                ? 'Déjà un compte ? Se connecter'
                : 'Créer un compte administrateur'
              }
            </Button>
          </div>

          <div className="mt-4 text-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              disabled={loading}
              className="text-sm"
            >
              ← Retour au site
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}