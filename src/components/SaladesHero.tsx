import categorySalads from '@/assets/category-salads-hero.jpg';

export function SaladesHero() {
  return (
    <section 
      className="py-20 bg-gradient-to-br from-primary/20 to-accent/20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${categorySalads})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Salades
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Croquantes et rafraîchissantes, nos salades et légumes verts sont cueillis quotidiennement pour vous garantir une fraîcheur optimale. Parfaites pour des repas sains et équilibrés.
        </p>
      </div>
    </section>
  );
}