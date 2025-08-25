import categoryHerbsNew from '@/assets/category-herbs-hero.jpg';

export function HerbesHero() {
  return (
    <section 
      className="py-20 bg-gradient-to-br from-primary/20 to-accent/20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${categoryHerbsNew})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Herbes
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Aromates et herbes fraîches pour sublimer vos plats. Cultivées avec soin selon les méthodes traditionnelles, elles apporteront authenticité et parfum à votre cuisine.
        </p>
      </div>
    </section>
  );
}