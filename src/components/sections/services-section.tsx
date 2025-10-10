import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Dumbbell } from 'lucide-react';

const services = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Diseño de Hábitos Saludables para una Vida de Alto Rendimiento',
    subtitle: 'Asesoría de Hábitos Saludables (El Pilar)',
    description: 'Un plan integral que va más allá del gimnasio. Usando mi enfoque sistemático, identificamos y optimizamos tu alimentación, tu manejo del estrés y tu calidad de sueño. Creamos rutinas diarias inquebrantables que te impulsan a ser tu mejor versión sin esfuerzo.',
  },
  {
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    title: 'Programas de Entrenamiento Personalizados con Rigor de Ingeniero',
    subtitle: 'Entrenamiento Personal Online/Presencial (La Ejecución)',
    description: 'No más entrenamientos genéricos. Recibe un plan de fitness totalmente individualizado basado en tus objetivos específicos (pérdida de peso, fuerza, resistencia en montaña o running). Te guiaré paso a paso, aplicando la progresión lógica que garantiza resultados.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Servicios de Asesoría y Entrenamiento Personal</h2>
           <p className="mt-4 text-lg text-muted-foreground">Tu Ruta hacia el Éxito</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col shadow-lg">
              <CardHeader className="flex-row items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-full mt-1">
                 {service.icon}
                </div>
                <div>
                    <p className="text-sm font-semibold text-primary">{service.subtitle}</p>
                    <CardTitle className="font-headline text-2xl mt-1">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">Ver Planes y Tarifas</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
