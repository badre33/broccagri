import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/custom-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Clock, MessageCircle, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un besoin spécifique ? Notre équipe est là pour vous accompagner 
            dans votre expérience BroccAgri.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Téléphone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">+212 661-792473</p>
                <p className="text-muted-foreground">Disponible 7j/7 de 8h à 20h</p>
                <Button variant="outline" className="mt-3" asChild>
                  <a href="tel:+212661792473">Appeler maintenant</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-success" />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-success">+212 661-792473</p>
                <p className="text-muted-foreground">Chat en direct, réponse rapide</p>
                <Button variant="success" className="mt-3" asChild>
                  <a href="https://wa.me/212661792473" target="_blank" rel="noopener noreferrer">
                    Ouvrir WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Zone de Livraison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Tout le Maroc</p>
                <p className="text-muted-foreground">Livraison dans toutes les villes principales</p>
                <div className="mt-3 space-y-1">
                  <p className="text-sm">📍 Casablanca, Rabat, Marrakech</p>
                  <p className="text-sm">📍 Fès, Meknès, Tanger, Agadir</p>
                  <p className="text-sm">📍 Et bien d'autres villes...</p>
                </div>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Horaires de Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">8h00 - 20h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-medium">10h00 - 16h00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Envoyez-nous un message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nom complet *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Téléphone</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+212 6 XX XX XX XX"
                      type="tel"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    type="email"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande, question ou suggestion..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" variant="premium" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}