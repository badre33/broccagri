import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/custom-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Clock, MessageCircle, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
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
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  {t('contact.phone')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">{t('contact.phoneNumber')}</p>
                <p className="text-muted-foreground">{t('contact.phoneAvailability')}</p>
                <Button variant="outline" className="mt-3" asChild>
                  <a href="tel:+212661792473">{t('contact.callNow')}</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-success" />
                  {t('contact.whatsapp')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-success">{t('contact.phoneNumber')}</p>
                <p className="text-muted-foreground">{t('contact.whatsappDesc')}</p>
                <Button variant="success" className="mt-3" asChild>
                  <a href="https://wa.me/212661792473" target="_blank" rel="noopener noreferrer">
                    {t('contact.openWhatsapp')}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  {t('contact.deliveryZone')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{t('contact.allMorocco')}</p>
                <p className="text-muted-foreground">{t('contact.deliveryDesc')}</p>
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
                  {t('contact.serviceHours')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t('contact.mondayFriday')}</span>
                    <span className="font-medium">8h00 - 20h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.saturday')}</span>
                    <span className="font-medium">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.sunday')}</span>
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
                {t('contact.sendMessage')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t('contact.form.fullName')}</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t('contact.form.phone')}</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.form.phonePlaceholder')}
                      type="tel"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">{t('contact.form.email')}</label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    type="email"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">{t('contact.form.message')}</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" variant="premium" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  {t('contact.form.send')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}