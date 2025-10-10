import { Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Diego Jimenez. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
