import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-surface-inverse border-t border-white/10 text-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-sm text-center sm:text-left space-y-0.5">
            <p>&copy; {new Date().getFullYear()} Diego Jiménez · entrenaconDiego</p>
            <p className="text-white/40">Madrid · Vallecas · Online</p>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/#planes-y-tarifas" className="hover:text-white transition-colors duration-[150ms]">
              Planes y Tarifas
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors duration-[150ms]">
              FAQ
            </Link>
            <Link href="/legal" className="hover:text-white transition-colors duration-[150ms]">
              Legal / Privacidad
            </Link>
          </nav>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild className="text-white/60 hover:text-accent hover:bg-white/10">
              <a
                href="https://www.instagram.com/entrenacondiego/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
