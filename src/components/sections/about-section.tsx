import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden shadow-lg border-2 border-accent rounded-lg">
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Diego Jimenez"
                    data-ai-hint="Retrato de Diego Jimenez"
                    width={600}
                    height={800}
                    className="object-cover w-full h-full transform transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
              Diego Jiménez: 20 años convirtiendo la pasión en
              hábitos y Resultados
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Mi nombre es Diego Jiménez.
                Aunque mi carrera profesional comenzó en la Ingeniería Agrónoma
                (donde desarrollé mi rigor y visión estratégica por más de 15
                años), mi verdadera escuela ha estado en la montaña, en la pista
                y bajo las pesas.
              </p>
              <p>
                Por más de 20 años, he vivido y respirado el deporte. Subir
                montañas, correr maratones y el entrenamiento de fuerza no solo
                me dieron resistencia física, sino que me enseñaron a forjar
                hábitos inquebrantables.
              </p>
              <p>
                Como Entrenador Personal Certificado y Asesor de Hábitos
                Saludables, mi misión es simple: aplicar la metodología probada
                y el enfoque estructurado que he adquirido (como ingeniero y
                como atleta) para que tú también alcances tu máximo potencial
                físico. No ofrezco trucos rápidos, ofrezco un cambio sostenible
                y con resultados medibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
