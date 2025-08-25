import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/custom-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Clock, MessageCircle, Mail, Send, Users, Truck, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import contactHero from '@/assets/contact-hero.jpg';

export default function ContactPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${contactHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans votre expérience BroccAgri. N'hésitez pas à nous contacter !
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Téléphone</h3>
                  <p className="text-muted-foreground">+212 8 61 44 27 41</p>
                  <p className="text-sm text-muted-foreground mt-1">Lun-Sam 8h-18h</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">contact@broccagri.ma</p>
                  <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground">+212 661 792 473</p>
                  <p className="text-sm text-muted-foreground mt-1">Chat instantané</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Zone de livraison</h3>
                  <p className="text-muted-foreground">Tout le Maroc</p>
                  <p className="text-sm text-muted-foreground mt-1">Livraison rapide</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Contact Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Parlons de vos besoins</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Que vous soyez un particulier à la recherche de produits frais ou un professionnel 
                    souhaitant établir un partenariat, nous sommes là pour vous écouter et vous conseiller.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Users className="h-8 w-8 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Particuliers</h3>
                          <p className="text-muted-foreground">
                            Commandes personnalisées, conseils produits, livraisons à domicile
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Truck className="h-8 w-8 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Professionnels</h3>
                          <p className="text-muted-foreground">
                            Partenariats restaurants, hôtels, épiceries - Tarifs préférentiels
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Shield className="h-8 w-8 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Qualité garantie</h3>
                          <p className="text-muted-foreground">
                            Produits certifiés, traçabilité complète, satisfaction client prioritaire
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Horaires d'ouverture
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span>8h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span>8h00 - 16h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="text-muted-foreground">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Envoyez-nous un message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nom complet *</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Votre nom et prénom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Téléphone *</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+212 6XX XXX XXX"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Sujet *</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Objet de votre message"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Décrivez votre demande en détail..."
                      />
                    </div>
                    
                    <Button type="submit" variant="premium" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
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