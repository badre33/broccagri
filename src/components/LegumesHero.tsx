import categoryVegetables from '@/assets/category-vegetables.jpg';
import { useTranslation } from 'react-i18next';

export function LegumesHero() {
  const { t } = useTranslation();
  
  return (
    <section 
      className="py-20 bg-gradient-to-br from-primary/20 to-accent/20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${categoryVegetables})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          {t('categoryHeroes.vegetables.title')}
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          {t('categoryHeroes.vegetables.description')}
        </p>
      </div>
    </section>
  );
}