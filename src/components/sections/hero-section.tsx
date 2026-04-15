import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Timer, Layers3, ShieldCheck } from "lucide-react";
import { Card, CardProps } from "../card";

export const BenefitsSection = () => {
  const items: CardProps[] = [
    {
      title: "Beneficios rápidos",
      description:
        "Programas pensados para personas ocupadas que quieren mejorar sin complicaciones.",
      Icon: Timer,
    },
    {
      title: "Enfoque 360°",
      description:
        "Entrenamiento, nutrición y hábitos integrados: un enfoque 360° para tu salud.",
      Icon: Layers3,
    },
    {
      title: "Resultados fiables",
      description:
        "Método probado + formación certificada = resultados fiables.",
      Icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="beneficios"
      className="relative z-20 -mt-24 py-0 pb-0"
      aria-label="Beneficios principales"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              Icon={item.Icon}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg md:text-xl max-w-[65ch] mx-auto text-muted-foreground leading-relaxed font-medium">
            No se trata sólo de entrenar más — se trata de entrenar mejor, con coherencia, con resultados fiables.
          </p>
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="relative h-[80vh] min-h-[520px] flex items-center justify-center text-white overflow-hidden py-0"
      >
        <Image
          src="/images/hero.jpg"
          alt="Hero background"
          data-ai-hint="Fondo hero"
          fill
          className="object-cover brightness-[0.55] contrast-110"
          priority
        />
        {/* Layered gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.20em] text-accent mb-6">
            Entrenador Personal · Dietista · Asesor de Hábitos
          </p>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-[-0.03em] uppercase">
            La <span className="text-accent">PRECISIÓN</span> de la
            ingeniería aplicada a tu entrenamiento
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-[60ch] mx-auto text-white/80 leading-relaxed">
            Deja de improvisar. Transforma tu cuerpo y mente con hábitos sólidos
            y sencillos.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl text-base px-8 py-6 transition-all duration-[250ms] hover:shadow-2xl hover:-translate-y-0.5"
            >
              <a href="#contact">Agenda tu Sesión de Diagnóstico GRATUITA</a>
            </Button>
          </div>
        </div>
      </section>
      <BenefitsSection />
    </>
  );
};

export default HeroSection;
