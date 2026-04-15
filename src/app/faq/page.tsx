import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes',
  description:
    'Resolvemos tus dudas sobre entrenamiento personal, asesoría nutricional y el Programa Integral 4R en Madrid y Vallecas. Respuestas claras y directas.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Preguntas Frecuentes | entrenaconDiego',
    description:
      'Resolvemos tus dudas sobre entrenamiento personal, asesoría nutricional y el Programa Integral 4R en Madrid y Vallecas.',
    url: '/faq',
  },
};

const faqs = [
  {
    id: 'q1',
    question: '¿Qué incluye cada servicio?',
    answer:
      'Cada servicio está diseñado para cubrir una necesidad específica. El plan de Entrenamiento Personalizado incluye programación detallada, control de cargas y ajustes semanales. La Asesoría Nutricional incluye un menú personalizado, recomendaciones según tus objetivos e integración con tu entrenamiento. El Programa Integral 4R lo combina todo: entrenamiento, nutrición y hábitos saludables, con soporte ampliado y videollamadas mensuales. Puedes consultar el detalle completo en la página de <a href="/#planes-y-tarifas" class="text-primary underline">Planes y Tarifas</a>.',
  },
  {
    id: 'q2',
    question: '¿Cómo funciona el proceso de incorporación?',
    answer:
      'Todo empieza con una sesión de diagnóstico gratuita (online o presencial) en la que analizamos tu situación actual, tus objetivos y tu historial. A partir de ahí, diseño tu plan personalizado y te lo entrego con una explicación detallada para que puedas empezar de inmediato.',
  },
  {
    id: 'q3',
    question: '¿Cuánto tiempo tardará en recibir mi plan personalizado?',
    answer:
      'Una vez realizada la sesión de diagnóstico y recibida toda la información necesaria, entrego el plan en un plazo máximo de 48–72 horas.',
  },
  {
    id: 'q4',
    question: '¿Puede adaptarse el plan a intolerancias o alergias alimentarias?',
    answer:
      'Sí, absolutamente. Durante la sesión inicial recogemos toda la información sobre tus preferencias, intolerancias, alergias y restricciones dietéticas para garantizar que el plan sea seguro, práctico y disfrutable.',
  },
  {
    id: 'q5',
    question: '¿Cómo se realiza el seguimiento y el soporte (chat, videollamada...)?',
    answer:
      'El seguimiento se realiza principalmente a través de mensajería (WhatsApp o la plataforma acordada). En el Programa Integral 4R se incluye además una videollamada mensual en profundidad de 30–45 minutos. El horario de atención es de lunes a viernes de 08:00 a 19:00, con respuesta garantizada en 24–48 horas.',
  },
  {
    id: 'q6',
    question: '¿Qué ocurre si quiero cancelar?',
    answer:
      'Puedes cancelar tu plan en cualquier momento. Los detalles exactos sobre periodos de preaviso y política de reembolso se especifican en los <a href="/legal" class="text-primary underline">Términos y Condiciones</a>. Si tienes cualquier duda antes de contratar, no dudes en consultármelo.',
  },
  {
    id: 'q7',
    question: '¿Necesito equipamiento de gimnasio o puedo entrenar en casa?',
    answer:
      'Los programas se adaptan a tu situación. Puedes entrenar en casa con material mínimo (mancuernas, bandas elásticas, tu propio peso corporal) o en un gimnasio completo. Indícame tu contexto durante la sesión de diagnóstico y diseñaré el plan en consecuencia.',
  },
  {
    id: 'q8',
    question: '¿Está incluida la asesoría nutricional en todos los planes?',
    answer:
      'La asesoría nutricional completa está incluida en el plan de Asesoría Nutricional y en el Programa Integral 4R. En el plan de Entrenamiento Personalizado se ofrecen orientaciones generales sobre alimentación, pero el diseño detallado del menú corresponde al servicio de nutrición.',
  },
];

/** FAQPage JSON-LD — enables rich results in Google Search */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      // Strip HTML tags for the schema (plain text only)
      text: faq.answer.replace(/<[^>]+>/g, ''),
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled server-side data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Dark page header */}
      <div className="bg-surface-inverse text-white pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent mb-4">
            Soporte
          </p>
          <h1 className="font-headline text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.02em]">
            Preguntas Frecuentes
          </h1>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            Respuestas a las dudas más habituales. Si no encuentras lo que buscas, escríbeme
            directamente.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-border rounded-xl px-2 shadow-sm"
            >
              <AccordionTrigger className="text-left text-base font-semibold py-5 hover:no-underline hover:text-primary transition-colors duration-[150ms]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <p
                  className="text-muted-foreground leading-relaxed max-w-[65ch]"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-16 bg-secondary rounded-2xl p-10">
          <p className="text-foreground font-medium mb-4">
            ¿Tienes más preguntas? Contáctame directamente.
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
