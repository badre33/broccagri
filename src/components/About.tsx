import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Leaf, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t('about.values.partnership.title'),
      description: t('about.values.partnership.description')
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: t('about.values.passion.title'),
      description: t('about.values.passion.description')
    },
    {
      icon: <Leaf className="h-8 w-8 text-success" />,
      title: t('about.values.responsible.title'),
      description: t('about.values.responsible.description')
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    }
  ];

  return (
    <section id="apropos" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {values.map((value, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {t('about.mission.title')}
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}