import categoryFruits from '@/assets/category-fruits.jpg';

export function FruitsHero() {
  return (
    <section 
      className="py-20 bg-gradient-to-br from-primary/20 to-accent/20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${categoryFruits})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Fruits
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Savourez nos fruits de saison, gorgés de soleil et récoltés à parfaite maturité. Une explosion de saveurs naturelles directement de nos vergers partenaires vers votre table.
        </p>
      </div>
    </section>
  );
}