import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/custom-button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-fresh-produce.jpg';
import categoryVegetables from '@/assets/category-vegetables.jpg';

const blogPosts = [
  {
    id: 1,
    title: "L'Agriculture Marocaine : Un Trésor de Biodiversité",
    excerpt: "Découvrez la richesse et la diversité des produits agricoles du Maroc, de la plaine du Souss aux montagnes de l'Atlas.",
    content: `Le Maroc possède l'une des agricultures les plus diversifiées d'Afrique du Nord. Grâce à ses différents climats et terroirs, le royaume offre une palette exceptionnelle de produits frais.

Des plaines fertiles du Souss-Massa aux vallées de l'Atlas, chaque région développe ses spécialités. Les tomates cerises de Souss, les oranges de Berkane, les olives de Meknès... autant de produits qui font la renommée du terroir marocain.

Cette diversité climatique permet une production étalée sur toute l'année, garantissant des produits frais en permanence. C'est cette richesse que nous vous proposons chez BroccAgri, en travaillant directement avec les producteurs locaux.

L'agriculture marocaine c'est aussi un savoir-faire ancestral transmis de génération en génération. Les techniques traditionnelles, combinées aux innovations modernes, permettent d'obtenir des produits d'une qualité exceptionnelle.`,
    author: "Équipe BroccAgri",
    date: "15 Mars 2024",
    category: "Agriculture",
    image: heroImage
  },
  {
    id: 2,
    title: "Circuit Court : Pourquoi Choisir le Direct Producteur ?",
    excerpt: "Les avantages du circuit court pour les consommateurs, les producteurs et l'environnement. Une approche durable et responsable.",
    content: `Le circuit court révolutionne notre façon de consommer. En éliminant les intermédiaires, nous créons un lien direct entre producteurs et consommateurs, bénéfique pour tous.

Pour les consommateurs, c'est la garantie de produits ultra-frais, récoltés à maturité. Fini les légumes cueillis verts pour supporter le transport ! Nos produits arrivent chez vous dans les 24h après la récolte.

Pour les producteurs, c'est une rémunération plus juste. En supprimant les intermédiaires, ils peuvent valoriser leur travail à sa juste valeur et investir dans la qualité plutôt que dans la quantité.

Pour l'environnement, c'est moins de transport, moins d'emballage, moins de gaspillage. Nos produits parcourent en moyenne 50 km contre 500 km pour la distribution traditionnelle.

Chez BroccAgri, nous croyons que cette approche est l'avenir de l'alimentation. Nous travaillons avec plus de 50 producteurs locaux pour vous offrir le meilleur du terroir marocain, directement de la ferme à votre table.`,
    author: "Équipe BroccAgri",
    date: "8 Mars 2024", 
    category: "Durabilité",
    image: categoryVegetables
  }
];

export default function BlogPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

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
              ← Retour au blog
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
        
        <WhatsAppButton />
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
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-slate mb-4">
              Blog BroccAgri
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos articles sur l'agriculture marocaine, nos conseils et nos actualités
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
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
              <h3 className="text-2xl font-heading font-bold text-brand-slate mb-4">
                Découvrez nos produits frais
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Passez de la lecture à l'action ! Explorez notre catalogue de produits frais 
                du terroir marocain et commandez dès maintenant.
              </p>
              <Button variant="premium" size="lg" onClick={() => window.location.href = '/'}>
                Voir notre catalogue
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
      
      <WhatsAppButton />
    </div>
  );
}