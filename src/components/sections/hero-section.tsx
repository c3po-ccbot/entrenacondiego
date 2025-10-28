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
      className="relative z-20 -mt-32"
      aria-label="Beneficios principales"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              Icon={item.Icon}
            />
          ))}
        </div>
        <div className="mt-8 text-center mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          <h3>
            No se trata sólo de entrenar más — se trata de entrenar mejor, con coherencia, con resultados fiables.
          </h3>
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
        className="relative h-[60vh] min-h-[300px] flex items-center justify-center text-white overflow-hidden"
      >
        <Image
          src="/images/hero.jpg"
          alt="Hero background"
          data-ai-hint="Fondo hero"
          fill
          className="object-cover filter brightness-75 contrast-125 transition-transform duration-10000 ease-out group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight uppercase">
            La <span className="text-green-400">PRECISIÓN</span> de la
            ingeniería aplicada a tu entrenamiento
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-200">
            Deja de improvisar. Transforma tu cuerpo y mente con hábitos sólidos
            y sencillos.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/80 text-accent-foreground"
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
