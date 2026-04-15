import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Diego Jimenez | Asesor de Hábitos Saludables y Entrenador Personal',
  description: 'Transforma tu vida con Diego Jimenez. Entrenador personal y asesor con 20+ años de experiencia en deporte. Diseña tu plan de fitness y hábitos saludables con la precisión de un ingeniero.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Syne: editorial geometric headline font — Sporty, bold, confident */}
        {/* Inter: gold-standard body font — Premium readability at all sizes  */}
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
