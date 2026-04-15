import { ContactForm } from '@/components/contact-form';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-surface-inverse py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent mb-4">
            Contacto
          </p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.02em] text-white">
            ¿Listo para el Cambio? Empecemos Hoy.
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Hablemos de tus metas y diseñemos el primer paso con la precisión que mereces.
          </p>
        </div>

        {/* Form card floats over the dark section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-xl border border-white/10">
            <ContactForm />
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-white/50 text-sm">
            Diego Jimenez: Tu asesor en salud y entrenador personal de confianza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
