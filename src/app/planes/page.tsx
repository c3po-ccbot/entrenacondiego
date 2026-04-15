import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, Dumbbell, Apple, Star } from 'lucide-react';

type FeatureGroup = { category: string; items: string[] };

type Service = {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  features: FeatureGroup[];
  highlight?: boolean;
};

const services: Service[] = [
  {
    id: 'entrenamiento',
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
    title: 'Programas de Entrenamiento Personalizados con Rigor de Ingeniero',
    subtitle: 'Entrenamiento Personalizado',
    description:
      'No más entrenamientos genéricos. Recibe un plan de fitness totalmente individualizado basado en tus objetivos específicos (pérdida de peso, fuerza, resistencia en montaña o running). Te guiaré paso a paso, aplicando la progresión lógica que garantiza resultados.',
    features: [
      { category: 'Entrenamiento', items: [
        'Planificación del entrenamiento detallada 100% a medida',
        'Control de cargas, volumen, intensidad y progresión',
        'Explicación de variables de entrenamiento',
        'Ajustes semanales según evolución',
        'Análisis de técnica por vídeo (opcional)',
      ]},
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
      { category: 'Nutrición', items: [
        'Menú 100% personalizado',
        'Explicación de aplicación diaria',
        'Recomendaciones según estado y objetivos',
        'Integración con entrenamiento',
        'Asesoramiento en suplementación (si necesario)',
      ]},
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
      { category: 'Entrenamiento', items: [
        'Planificación del entrenamiento detallada 100% a medida',
        'Control de cargas, volumen, intensidad y progresión',
        'Explicación de variables de entrenamiento',
        'Ajustes semanales según evolución',
        'Análisis de técnica por vídeo (opcional)',
      ]},
      { category: 'Nutrición', items: [
        'Menú 100% personalizado',
        'Explicación de aplicación diaria',
        'Recomendaciones según estado y objetivos',
        'Integración con entrenamiento',
        'Asesoramiento en suplementación para salud y longevidad',
      ]},
      { category: 'Hábitos y Salud', items: [
        'Plan de hábitos saludables',
        'Revisión opcional de analíticas',
      ]},
      { category: 'Soporte Continuado', items: [
        'Soporte ampliado: lunes a viernes 08:00–19:00',
        'Videollamada mensual en profundidad (30–45 min)',
        'Respuesta garantizada en 24–48 h',
      ]},
    ],
  },
];

function FeatureListExpanded({ groups }: { groups: FeatureGroup[] }) {
  return (
    <div className="w-full space-y-3">
      {groups.map((group) => (
        <div key={group.category}>
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">{group.category}</p>
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

export default function PlanesPage() {
  return (
    <>
      {/* Dark page header */}
      <div className="bg-surface-inverse text-white pt-20 pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent mb-4">
            Inversión en ti
          </p>
          <h1
            id="planes-y-tarifas"
            className="font-headline text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.02em]"
          >
            Planes y Tarifas
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            Elige el programa que mejor se adapta a tus objetivos. Todos los planes incluyen
            seguimiento personalizado y atención directa.
          </p>
        </div>
      </div>

      {/* Cards — pulled up slightly to overlap the dark header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service) => {
            const useAccordion = service.features.length > 1;
            return (
              <Card
                key={service.id}
                className={`flex flex-col shadow-lg hover:shadow-xl rounded-2xl border transition-all duration-[250ms] hover:-translate-y-1 relative overflow-visible ${
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
                <CardHeader className="items-center text-center pt-10">
                  <div className="bg-primary/10 p-4 rounded-2xl mb-3">{service.icon}</div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                    {service.subtitle}
                  </p>
                  <CardTitle className="font-headline text-xl font-bold mt-2 leading-snug tracking-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow gap-5">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>

                  <div className="text-center">
                    <Button asChild variant="outline" className="w-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-[250ms]">
                      <a href="/#contact">Consultar precio</a>
                    </Button>
                  </div>

                  {useAccordion
                    ? <FeatureListAccordion groups={service.features} />
                    : <FeatureListExpanded groups={service.features} />
                  }

                  <div className="mt-auto pt-2">
                    <Button
                      asChild
                      className={`w-full ${service.highlight ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`}
                      size="lg"
                    >
                      <a href="/#contact">Solicitar información</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-secondary rounded-2xl p-10">
          <p className="text-foreground font-medium mb-4 text-lg">
            ¿No sabes qué plan elegir? Agenda una sesión de diagnóstico gratuita.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-all duration-[250ms] hover:shadow-lg hover:-translate-y-0.5">
            <a href="/#contact">Agenda tu Sesión de Diagnóstico GRATUITA</a>
          </Button>
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Link href="/">← Volver al inicio</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
