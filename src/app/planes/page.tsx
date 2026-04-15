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
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Entrenamiento, Nutrición y Hábitos: Tu Plan Estratégico hacia Resultados Duraderos',
    subtitle: 'Programa Integral 4R',
    description:
      'No se trata de hacer más, sino de hacerlo mejor. El Programa 4R combina entrenamiento, nutrición y hábitos en un único plan estratégico diseñado para que obtengas resultados duraderos y construyas una vida de alto rendimiento.',
    badge: 'Todo incluido',
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
    <div className="w-full space-y-4">
      {groups.map((group) => (
        <div key={group.category}>
          <p className="text-sm font-semibold mb-2">{group.category}</p>
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 id="planes-y-tarifas" className="font-headline text-4xl md:text-5xl font-bold">Planes y Tarifas</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Elige el programa que mejor se adapta a tus objetivos. Todos los planes incluyen
          seguimiento personalizado y atención directa.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {services.map((service) => {
          const useAccordion = service.features.length > 1;
          return (
            <Card key={service.id} className="flex flex-col shadow-lg relative">
              {service.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm">
                  {service.badge}
                </Badge>
              )}
              <CardHeader className="items-center text-center pt-8">
                <div className="bg-primary/10 p-4 rounded-full mb-2">{service.icon}</div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                  {service.subtitle}
                </p>
                <CardTitle className="font-headline text-xl mt-1 leading-snug">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow gap-6">
                <CardDescription className="text-base">{service.description}</CardDescription>

                <div className="text-center">
                  <Button asChild variant="outline" className="w-full">
                    <a href="/#contact">Consultar precio</a>
                  </Button>
                </div>

                {useAccordion
                  ? <FeatureListAccordion groups={service.features} />
                  : <FeatureListExpanded groups={service.features} />
                }

                <div className="mt-auto pt-4">
                  <Button asChild className="w-full" size="lg">
                    <a href="/#contact">Solicitar información</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <p className="text-muted-foreground mb-4">
          ¿No sabes qué plan elegir? Agenda una sesión de diagnóstico gratuita.
        </p>
        <Button asChild variant="outline" size="lg">
          <a href="/#contact">Agenda tu Sesión de Diagnóstico GRATUITA</a>
        </Button>
      </div>

      <div className="text-center mt-8">
        <Button asChild variant="ghost">
          <Link href="/">← Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
