import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Mountain, Repeat, TrendingUp } from 'lucide-react';

const methodology = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Rigor (La Ingeniería)',
    description: 'Análisis detallado de tu punto de partida. Definición de objetivos SMART y planificación milimétrica.',
  },
  {
    icon: <Mountain className="h-8 w-8 text-primary" />,
    title: 'Resistencia (Los 20 Años)',
    description: 'Programas diseñados para construir una base física y mental a prueba de fallos. Entrenamiento funcional y de fuerza basado en la longevidad.',
  },
  {
    icon: <Repeat className="h-8 w-8 text-primary" />,
    title: 'Rutina (Los Hábitos)',
    description: 'Implementación de microrrutinas que transforman tu día a día, haciendo que el bienestar sea automático, no una lucha.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Resultados (Tu Éxito)',
    description: 'Seguimiento constante y ajustes en tiempo real. Métricas claras para que siempre sepas cuánto has avanzado.',
  },
];

const MethodologySection = () => {
  return (
    <section id="methodology">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Mi Método 4R: Rigor, Resistencia, Rutina y Resultados</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {methodology.map((item) => (
            <Card key={item.title} className="text-center shadow-md hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  {item.icon}
                </div>
                <CardTitle className="font-headline pt-4">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
