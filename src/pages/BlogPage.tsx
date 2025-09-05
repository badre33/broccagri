import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CheckoutButton } from '@/components/CheckoutButton';
import { MobileMenu } from '@/components/MobileMenu';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/custom-button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useGlobalDirection } from '@/hooks/useGlobalDirection';
import heroImage from '@/assets/hero-fresh-produce.jpg';
import categoryVegetables from '@/assets/category-vegetables.jpg';
import blogHeroNew from '@/assets/blog-hero-new.jpg';

export default function BlogPage() {
  const { t } = useTranslation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  // Assurer la gestion RTL
  useGlobalDirection();

  const blogPosts = [
    {
      id: 1,
      title: t('blog.posts.agriculture.title'),
      excerpt: t('blog.posts.agriculture.excerpt'),
      content: `Le Maroc possède l'une des agricultures les plus diversifiées d'Afrique du Nord. Grâce à ses différents climats et terroirs, le royaume offre une palette exceptionnelle de produits frais.

Des plaines fertiles du Souss-Massa aux vallées de l'Atlas, chaque région développe ses spécialités. Les tomates cerises de Souss, les oranges de Berkane, les olives de Meknès... autant de produits qui font la renommée du terroir marocain.

Cette diversité climatique permet une production étalée sur toute l'année, garantissant des produits frais en permanence. C'est cette richesse que nous vous proposons chez BroccAgri, en travaillant directement avec les producteurs locaux.

L'agriculture marocaine c'est aussi un savoir-faire ancestral transmis de génération en génération. Les techniques traditionnelles, combinées aux innovations modernes, permettent d'obtenir des produits d'une qualité exceptionnelle.`,
      author: "Équipe BroccAgri",
      date: "15 Mars 2024",
      category: t('blog.posts.agriculture.category'),
      image: heroImage
    },
    {
      id: 2,
      title: t('blog.posts.circuit.title'),
      excerpt: t('blog.posts.circuit.excerpt'),
      content: `Le circuit court révolutionne notre façon de consommer. En éliminant les intermédiaires, nous créons un lien direct entre producteurs et consommateurs, bénéfique pour tous.

Pour les consommateurs, c'est la garantie de produits ultra-frais, récoltés à maturité. Fini les légumes cueillis verts pour supporter le transport ! Nos produits arrivent chez vous dans les 24h après la récolte.

Pour les producteurs, c'est une rémunération plus juste. En supprimant les intermédiaires, ils peuvent valoriser leur travail à sa juste valeur et investir dans la qualité plutôt que dans la quantité.

Pour l'environnement, c'est moins de transport, moins d'emballage, moins de gaspillage. Nos produits parcourent en moyenne 50 km contre 500 km pour la distribution traditionnelle.

Chez BroccAgri, nous croyons que cette approche est l'avenir de l'alimentation. Nous travaillons avec plus de 50 producteurs locaux pour vous offrir le meilleur du terroir marocain, directement de la ferme à votre table.`,
      author: "Équipe BroccAgri",
      date: "8 Mars 2024", 
      category: t('blog.posts.circuit.category'),
      image: categoryVegetables
    }
  ];

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header 
          onCartClick={() => setIsCartOpen(true)}
          onMenuClick={() => setIsMobileMenuOpen(true)}
        />
        
        <main className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedPost(null)}
              className="mb-8"
            >
              {t('blog.backToBlog')}
            </Button>
            
            <article>
              <header className="mb-8">
                <Badge variant="secondary" className="mb-4">{selectedPost.category}</Badge>
                <h1 className="text-4xl font-heading font-bold text-brand-slate mb-4">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{selectedPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedPost.date}</span>
                  </div>
                </div>
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-80 object-cover rounded-lg mb-8"
                />
              </header>
              
              <div className="prose prose-lg max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </main>
        
        <Footer />
        
        <Cart 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
        
        <MobileMenu 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        
        <WhatsAppButton />
        <CheckoutButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMobileMenuOpen(true)}
      />
      
      <main>
        {/* Hero Section */}
        <section 
          className="py-20 bg-gradient-to-br from-primary/20 to-accent/20 relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${blogHeroNew})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge 
                      variant="secondary" 
                      className="absolute top-4 left-4 bg-white/90 text-brand-slate"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-heading text-brand-slate mb-2">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="group p-0 h-auto font-medium text-primary hover:text-primary-hover"
                      onClick={() => setSelectedPost(post)}
                    >
                      {t('blog.readArticle')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
              <h3 className="text-2xl font-heading font-bold text-brand-slate mb-4">
                {t('blog.cta.title')}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t('blog.cta.description')}
              </p>
              <Button variant="premium" size="lg" onClick={() => window.location.href = '/'}>
                {t('blog.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <WhatsAppButton />
      <CheckoutButton />
    </div>
  );
}