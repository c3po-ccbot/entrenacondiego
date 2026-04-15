import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircle2, Dumbbell, Apple, Star } from 'lucide-react';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

type FeatureGroup = { category: string; items: string[] };

type PlanService = {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  features: FeatureGroup[];
  highlight?: boolean;
};

const services: PlanService[] = [
  {
    id: 'entrenamiento',
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
    title: 'Programas de Entrenamiento Personalizados con Rigor de Ingeniero',
    subtitle: 'Entrenamiento Personalizado',
    description:
      'No más entrenamientos genéricos. Recibe un plan de fitness totalmente individualizado basado en tus objetivos específicos (pérdida de peso, fuerza, resistencia en montaña o running). Te guiaré paso a paso, aplicando la progresión lógica que garantiza resultados.',
    features: [
      {
        category: 'Entrenamiento',
        items: [
          'Planificación del entrenamiento detallada 100% a medida',
          'Control de cargas, volumen, intensidad y progresión',
          'Explicación de variables de entrenamiento',
          'Ajustes semanales según evolución',
          'Análisis de técnica por vídeo (opcional)',
        ],
      },
    ],
  },
  {
    id: 'nutricion',
    icon: <Apple className="h-8 w-8 text-primary" />,
    title: 'Diseño de una Dieta Personalizada y Saludable para una Vida de Alto Rendimiento',
    subtitle: 'Asesoría Nutricional',
    description:
      'Un plan dietético integral que va más allá del gimnasio. Diseñamos juntos una estrategia nutricional adaptada a tu estilo de vida, tus preferencias y tus objetivos de salud y rendimiento.',
    features: [
      {
        category: 'Nutrición',
        items: [
          'Menú 100% personalizado',
          'Explicación de aplicación diaria',
          'Recomendaciones según estado y objetivos',
          'Integración con entrenamiento',
          'Asesoramiento en suplementación (si necesario)',
        ],
      },
    ],
  },
  {
    id: 'integral',
    icon: <Star className="h-8 w-8 text-accent" />,
    title: 'Entrenamiento, Nutrición y Hábitos: Tu Plan Estratégico hacia Resultados Duraderos',
    subtitle: 'Programa Integral 4R',
    description:
      'No se trata de hacer más, sino de hacerlo mejor. El Programa 4R combina entrenamiento, nutrición y hábitos en un único plan estratégico diseñado para que obtengas resultados duraderos y construyas una vida de alto rendimiento.',
    badge: 'Todo incluido',
    highlight: true,
    features: [
      {
        category: 'Entrenamiento',
        items: [
          'Planificación del entrenamiento detallada 100% a medida',
          'Control de cargas, volumen, intensidad y progresión',
          'Explicación de variables de entrenamiento',
          'Ajustes semanales según evolución',
          'Análisis de técnica por vídeo (opcional)',
        ],
      },
      {
        category: 'Nutrición',
        items: [
          'Menú 100% personalizado',
          'Explicación de aplicación diaria',
          'Recomendaciones según estado y objetivos',
          'Integración con entrenamiento',
          'Asesoramiento en suplementación para salud y longevidad',
        ],
      },
      {
        category: 'Hábitos y Salud',
        items: [
          'Plan de hábitos saludables',
          'Revisión opcional de analíticas',
        ],
      },
      {
        category: 'Soporte Continuado',
        items: [
          'Soporte ampliado: lunes a viernes 08:00–19:00',
          'Videollamada mensual en profundidad (30–45 min)',
          'Respuesta garantizada en 24–48 h',
        ],
      },
    ],
  },
];

function FeatureListExpanded({ groups }: { groups: FeatureGroup[] }) {
  return (
    <div className="w-full space-y-3">
      {groups.map((group) => (
        <div key={group.category}>
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">
            {group.category}
          </p>
          <ul className="space-y-2">
            {group.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function FeatureListAccordion({ groups }: { groups: FeatureGroup[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {groups.map((group) => (
        <AccordionItem key={group.category} value={group.category}>
          <AccordionTrigger className="text-sm font-semibold">
            {group.category}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const PricingSection = () => {
  return (
    <section id="planes-y-tarifas" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent mb-4">
            Inversión en ti
          </p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.02em]">
            Planes y Tarifas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Elige el programa que mejor se adapta a tus objetivos. Todos los planes incluyen
            seguimiento personalizado y atención directa.
          </p>
        </AnimateOnScroll>

        {/* Cards grid — items-stretch ensures equal height across all cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {services.map((service, i) => {
            const useAccordion = service.features.length > 1;
            return (
              <AnimateOnScroll key={service.id} delay={i * 100} className="h-full">
                {/*
                  Card layout (flex-col, h-full):
                    ┌──────────────────────────────────────┐
                    │ [flex-1 top] icon · subtitle · title  │
                    │              description              │
                    ├──────────────────────────────────────┤  ← same vertical position across all cards
                    │ "Consultar precio" button             │
                    │ features list                         │
                    │ "Solicitar información" button        │
                    └──────────────────────────────────────┘
                  The top section absorbs height variance so the bottom section
                  always starts at the same y-position within equal-height cards.
                */}
                <div
                  className={`h-full flex flex-col shadow-lg hover:shadow-xl rounded-2xl border transition-all duration-[250ms] hover:-translate-y-1 relative overflow-visible bg-card ${
                    service.highlight
                      ? 'border-accent ring-2 ring-accent/20'
                      : 'border-border'
                  }`}
                >
                  {service.badge && (
                    <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 text-xs font-bold uppercase tracking-wide whitespace-nowrap shadow-md">
                      {service.badge}
                    </Badge>
                  )}

                  {/* Top section — flex-1 absorbs height variance */}
                  <div className="flex flex-col items-center text-center flex-1 px-6 md:px-8 pt-10 pb-5 gap-3">
                    <div className="bg-primary/10 p-4 rounded-2xl shrink-0">
                      {service.icon}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary shrink-0">
                      {service.subtitle}
                    </p>
                    <h3 className="font-headline text-xl font-bold leading-snug tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom section — fixed, always at same vertical position */}
                  <div className="px-6 md:px-8 pb-6 md:pb-8 flex flex-col gap-4">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-[250ms]"
                    >
                      <a href="#contact">Consultar precio</a>
                    </Button>

                    {useAccordion
                      ? <FeatureListAccordion groups={service.features} />
                      : <FeatureListExpanded groups={service.features} />
                    }

                    <div className="pt-1">
                      <Button
                        asChild
                        size="lg"
                        className={`w-full ${
                          service.highlight
                            ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                            : ''
                        }`}
                      >
                        <a href="#contact">Solicitar información</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll delay={200}>
          <div className="text-center mt-16 bg-secondary rounded-2xl p-10">
            <p className="text-foreground font-medium mb-4 text-lg">
              ¿No sabes qué plan elegir? Agenda una sesión de diagnóstico gratuita.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-all duration-[250ms] hover:shadow-lg hover:-translate-y-0.5"
            >
              <a href="#contact">Agenda tu Sesión de Diagnóstico GRATUITA</a>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PricingSection;
