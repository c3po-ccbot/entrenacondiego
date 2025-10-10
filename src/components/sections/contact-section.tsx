import { ContactForm } from '@/components/contact-form';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">¿Listo para el Cambio? Empecemos Hoy.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hablemos de tus metas y diseñemos el primer paso con la precisión que mereces.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-12">
            <ContactForm />
        </div>
        <div className="text-center mt-8">
            <p className="text-muted-foreground">Diego Jimenez: Tu asesor en salud y entrenador personal de confianza.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
