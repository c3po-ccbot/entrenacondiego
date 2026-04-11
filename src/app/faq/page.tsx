import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'q1',
    question: '¿Qué incluye cada servicio?',
    answer:
      'Cada servicio está diseñado para cubrir una necesidad específica. El plan de Entrenamiento Personalizado incluye programación detallada, control de cargas y ajustes semanales. La Asesoría Nutricional incluye un menú personalizado, recomendaciones según tus objetivos e integración con tu entrenamiento. El Programa Integral 4R lo combina todo: entrenamiento, nutrición y hábitos saludables, con soporte ampliado y videollamadas mensuales. Puedes consultar el detalle completo en la página de <a href="/planes" class="text-primary underline">Planes y Tarifas</a>.',
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

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Preguntas Frecuentes</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Respuestas a las dudas más habituales. Si no encuentras lo que buscas, escríbeme
          directamente.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="text-left text-base font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center mt-16">
        <p className="text-muted-foreground mb-4">
          ¿Tienes más preguntas? Contáctame directamente.
        </p>
        <Button asChild size="lg">
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
