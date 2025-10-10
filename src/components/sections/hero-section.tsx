import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="home" className="relative h-[60vh] min-h-[300px] flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight">
          La Precisión de un Ingeniero al Servicio de tu Salud y Rendimiento
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-200">
          Deja de improvisar. Transforma tu cuerpo y mente con hábitos sólidos y un entrenamiento probado por más de 20 años.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="#contact">Agenda tu Sesión de Diagnóstico GRATUITA</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
