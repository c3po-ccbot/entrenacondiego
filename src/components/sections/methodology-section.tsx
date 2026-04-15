import { Target, Mountain, Repeat, TrendingUp } from 'lucide-react';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

const methodology = [
  {
    icon: <Target className="h-6 w-6 text-accent" />,
    letter: 'R1',
    title: 'Rigor',
    subtitle: 'La Ingeniería',
    description: 'Análisis detallado de tu punto de partida. Objetivos SMART y planificación milimétrica.',
  },
  {
    icon: <Mountain className="h-6 w-6 text-accent" />,
    letter: 'R2',
    title: 'Resistencia',
    subtitle: 'Los 20 Años',
    description: 'Entrenamiento funcional y de fuerza orientado a la longevidad. Base física a prueba de fallos.',
  },
  {
    icon: <Repeat className="h-6 w-6 text-accent" />,
    letter: 'R3',
    title: 'Rutina',
    subtitle: 'Los Hábitos',
    description: 'Microrrutinas que hacen que el bienestar sea automático, no una lucha diaria.',
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-accent" />,
    letter: 'R4',
    title: 'Resultados',
    subtitle: 'Tu Éxito',
    description: 'Seguimiento constante y ajustes en tiempo real. Métricas claras de progreso.',
  },
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-4">
            Metodología
          </p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.02em]">
            El Método 4R
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            La metodología detrás de todos los planes. El{' '}
            <span className="font-semibold text-foreground">Programa Integral 4R</span> entrega los
            cuatro pilares completos; los planes de Entrenamiento y Nutrición aplican los pilares
            más relevantes para cada objetivo.
          </p>
        </AnimateOnScroll>

        {/* items-stretch (grid default) gives equal-height cards across the row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {methodology.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 80} className="h-full">
              {/*
                Card layout (h-full, flex-col, items-center):
                  All fixed-height elements (letter, icon, title, subtitle) are
                  stacked from the top → they align across cards automatically.
                  Description (flex-1) absorbs any remaining space so the card
                  fills the grid cell height cleanly.
              */}
              <div className="group h-full flex flex-col items-center text-center bg-card rounded-2xl p-6 border border-border shadow-md hover:shadow-xl transition-all duration-[250ms] hover:-translate-y-1">
                {/* Accent letter label */}
                <div className="flex items-center gap-1.5 mb-4 shrink-0">
                  <span className="text-xs font-bold text-accent/70 uppercase tracking-[0.12em]">
                    {item.letter}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center bg-accent/10 rounded-xl p-3 mb-4 shrink-0 transition-colors duration-[250ms] group-hover:bg-accent/15">
                  {item.icon}
                </div>

                {/* Title */}
                <p className="font-headline font-bold text-base tracking-tight shrink-0">
                  {item.title}
                </p>

                {/* Subtitle */}
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mt-0.5 mb-3 shrink-0">
                  {item.subtitle}
                </p>

                {/* Description — flex-1 so card fills to equal height */}
                <p className="text-sm text-muted-foreground leading-snug flex-1">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
