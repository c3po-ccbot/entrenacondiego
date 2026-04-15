import { Target, Mountain, Repeat, TrendingUp } from 'lucide-react';

const methodology = [
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    letter: 'R1',
    title: 'Rigor',
    subtitle: 'La Ingeniería',
    description: 'Análisis detallado de tu punto de partida. Objetivos SMART y planificación milimétrica.',
  },
  {
    icon: <Mountain className="h-6 w-6 text-primary" />,
    letter: 'R2',
    title: 'Resistencia',
    subtitle: 'Los 20 Años',
    description: 'Entrenamiento funcional y de fuerza orientado a la longevidad. Base física a prueba de fallos.',
  },
  {
    icon: <Repeat className="h-6 w-6 text-primary" />,
    letter: 'R3',
    title: 'Rutina',
    subtitle: 'Los Hábitos',
    description: 'Microrrutinas que hacen que el bienestar sea automático, no una lucha diaria.',
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    letter: 'R4',
    title: 'Resultados',
    subtitle: 'Tu Éxito',
    description: 'Seguimiento constante y ajustes en tiempo real. Métricas claras de progreso.',
  },
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">El Método 4R</h2>
          <p className="mt-3 text-muted-foreground">
            La metodología detrás de todos los planes. El{' '}
            <span className="font-semibold text-foreground">Programa Integral 4R</span> entrega los
            cuatro pilares completos; los planes de Entrenamiento y Nutrición aplican los pilares
            más relevantes para cada objetivo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {methodology.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center bg-background rounded-xl p-5 shadow-sm"
            >
              <div className="flex items-center justify-center bg-primary/10 rounded-full p-3 mb-3">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-0.5">
                {item.letter}
              </span>
              <p className="font-headline font-bold text-base">{item.title}</p>
              <p className="text-xs text-primary font-medium mb-2">{item.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-snug">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
