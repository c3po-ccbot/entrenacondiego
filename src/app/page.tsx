import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import MethodologySection from '@/components/sections/methodology-section';
import PricingSection from '@/components/sections/pricing-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MethodologySection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
