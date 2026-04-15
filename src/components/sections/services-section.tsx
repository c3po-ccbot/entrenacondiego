import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dumbbell, Apple, Star } from 'lucide-react';

const services = [
  {
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    subtitle: 'Entrenamiento Personalizado',
    title: 'Programas de Entrenamiento Personalizados con Rigor de Ingeniero',
    description:
      'No más entrenamientos genéricos. Recibe un plan de fitness totalmente individualizado basado en tus objetivos específicos (pérdida de peso, fuerza, resistencia en montaña o running). Progresión lógica que garantiza resultados.',
    methodTags: ['Rigor', 'Resistencia'],
    badge: null,
  },
  {
    icon: <Apple className="h-10 w-10 text-primary" />,
    subtitle: 'Asesoría Nutricional',
    title: 'Diseño de una Dieta Personalizada para una Vida de Alto Rendimiento',
    description:
      'Un plan dietético integral adaptado a tu estilo de vida, tus preferencias y tus objetivos de salud y rendimiento. Nutrición que trabaja con tu entrenamiento, no contra él.',
    methodTags: ['Rigor', 'Rutina'],
    badge: null,
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    subtitle: 'Programa Integral 4R',
    title: 'Entrenamiento, Nutrición y Hábitos: Tu Plan Estratégico hacia Resultados Duraderos',
    description:
      'El único plan que combina los cuatro pilares del Método 4R en una estrategia unificada. Entrenamiento, nutrición, hábitos y soporte continuado para construir una vida de alto rendimiento.',
    methodTags: ['Rigor', 'Resistencia', 'Rutina', 'Resultados'],
    badge: 'Método 4R completo',
  },
];

const ServicesSection = () => {
  return (
    <section id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Elige el Plan que se Adapta a Ti
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tres programas construidos sobre el Método 4R — desde el foco en entrenamiento o
            nutrición hasta el plan integral que lo abarca todo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <Card key={service.subtitle} className="flex flex-col shadow-lg relative">
              {service.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm whitespace-nowrap">
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
              <CardContent className="flex flex-col flex-grow gap-4">
                <CardDescription className="text-base">{service.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {service.methodTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/planes">Ver Planes y Tarifas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
