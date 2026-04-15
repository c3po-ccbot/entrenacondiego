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
  title: 'Legal — Política de Privacidad y Términos',
  description:
    'Política de privacidad, términos y condiciones y aviso legal de entrenaconDiego, entrenador personal en Madrid y Vallecas.',
  alternates: { canonical: '/legal' },
  robots: { index: false, follow: false },
};

export default function LegalPage() {
  return (
    <>
      {/* Dark page header */}
      <div className="bg-surface-inverse text-white pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent mb-4">
            Documentos
          </p>
          <h1 className="font-headline text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.02em]">
            Legal
          </h1>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            Política de Privacidad y Términos y Condiciones
          </p>
        </div>
      </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
      <Accordion type="multiple" className="w-full space-y-3">

        {/* PRIVACY POLICY */}
        <AccordionItem value="privacidad" className="border border-border rounded-xl px-2 shadow-sm">
          <AccordionTrigger className="text-xl font-headline font-bold py-5 hover:no-underline hover:text-primary transition-colors duration-[150ms]">
            <h2 className="text-xl font-headline font-bold">Política de Privacidad</h2>
          </AccordionTrigger>
          <AccordionContent className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <div className="space-y-4">
              <section>
                <h3 className="font-semibold text-foreground">1. Responsable del tratamiento</h3>
                <p>
                  <strong>Nombre / Razón social:</strong> [FILL IN]<br />
                  <strong>NIF/CIF:</strong> [FILL IN]<br />
                  <strong>Domicilio:</strong> [FILL IN]<br />
                  <strong>Correo electrónico de contacto:</strong> [FILL IN]
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-foreground">2. Datos que recogemos</h3>
                <p>
                  A través de los formularios de esta web podemos recabar los siguientes datos personales:
                  nombre y apellidos, dirección de correo electrónico, número de teléfono (si se facilita)
                  y cualquier otro dato que el usuario aporte voluntariamente en el mensaje de contacto.
                  Asimismo, podemos tratar datos relativos a la salud y condición física cuando sean
                  necesarios para prestar los servicios contratados, siempre con consentimiento explícito
                  del interesado.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-foreground">3. Finalidad y base jurídica del tratamiento</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Gestionar las consultas y solicitudes de información: interés legítimo / consentimiento del usuario (art. 6.1.a y 6.1.f RGPD).</li>
                  <li>Prestación de los servicios contratados: ejecución de contrato (art. 6.1.b RGPD).</li>
                  <li>Envío de comunicaciones comerciales: consentimiento expreso (art. 6.1.a RGPD). Puedes retirar el consentimiento en cualquier momento.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-foreground">4. Conservación de los datos</h3>
                <p>
                  Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad
                  para la que fueron recabados y, en todo caso, durante los plazos legalmente establecidos.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-foreground">5. Destinatarios</h3>
                <p>
                  Los datos no se cederán a terceros salvo obligación legal. Se podrán utilizar
                  encargados de tratamiento (herramientas de email, CRM, etc.) que actúan bajo contrato
                  de encargo de tratamiento conforme al RGPD.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-foreground">6. Derechos del usuario</h3>
                <p>
                  El usuario tiene derecho a acceder, rectificar y suprimir sus datos, así como a
                  oponerse al tratamiento, solicitar la limitación y la portabilidad. Para ejercer
                  estos derechos, diríjase a: <strong>[FILL IN correo electrónico]</strong>.
                  También puede presentar una reclamación ante la Agencia Española de Protección de
                  Datos (aepd.es).
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-foreground">7. Política de cookies</h3>
                <p>
                  Esta web puede utilizar cookies técnicas necesarias para el funcionamiento del sitio.
                  [FILL IN política de cookies detallada si se usan cookies analíticas o de marketing.]
                </p>
              </section>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* TERMS OF SERVICE */}
        <AccordionItem value="terminos" className="border border-border rounded-xl px-2 shadow-sm">
          <AccordionTrigger className="text-xl font-headline font-bold py-5 hover:no-underline hover:text-primary transition-colors duration-[150ms]">
            <h2 className="text-xl font-headline font-bold">Términos y Condiciones</h2>
          </AccordionTrigger>
          <AccordionContent className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <div className="space-y-4">
              <section>
                <h3 className="font-semibold text-foreground">1. Descripción del servicio</h3>
                <p>
                  entrenaconDiego ofrece servicios de entrenamiento personal personalizado, asesoría
                  nutricional y programas integrales de hábitos saludables, prestados de forma online
                  y/o presencial según lo acordado con el cliente.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-foreground">2. Contratación y pago</h3>
                <p>
                  La relación contractual se formaliza mediante la aceptación del presupuesto enviado
                  al cliente y el abono del pago correspondiente. El precio del servicio es el indicado
                  en dicho presupuesto. <strong>[FILL IN métodos de pago aceptados.]</strong>
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-foreground">3. Política de reembolso</h3>
                <p>
                  [FILL IN política de reembolso: condiciones, plazos y excepciones aplicables.]
                  Con carácter general, los servicios de planificación ya entregados no son reembolsables
                  al tratarse de trabajo personalizado ya realizado.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-foreground">4. Cancelación</h3>
                <p>
                  El cliente puede cancelar el servicio en cualquier momento mediante comunicación
                  escrita con un preaviso mínimo de <strong>[FILL IN número de días]</strong> días.
                  Las cancelaciones con menos preaviso podrán conllevar la facturación del periodo
                  correspondiente según lo acordado.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-foreground">5. Limitación de responsabilidad</h3>
                <p>
                  Los servicios de entrenamiento y nutrición tienen carácter orientativo y no
                  sustituyen el consejo médico profesional. El cliente es responsable de comunicar
                  cualquier condición médica preexistente antes de iniciar el programa. entrenaconDiego
                  no se responsabiliza de lesiones derivadas del incumplimiento de las indicaciones
                  proporcionadas.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-foreground">6. Ley aplicable y jurisdicción</h3>
                <p>
                  Estos términos se rigen por la legislación española. Para cualquier controversia,
                  las partes se someten a los juzgados y tribunales de <strong>[FILL IN ciudad]</strong>,
                  salvo que la normativa de consumidores establezca otro fuero.
                </p>
              </section>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p className="mt-8 text-sm text-muted-foreground text-center">
        Para cualquier consulta sobre esta política, escríbenos a{' '}
        <strong>[FILL IN correo electrónico]</strong>.
      </p>

      <div className="text-center mt-8">
        <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
          <Link href="/">← Volver al inicio</Link>
        </Button>
      </div>
    </div>
    </>
  );
}
