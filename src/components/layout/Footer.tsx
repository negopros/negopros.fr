import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Twitter, Target } from 'lucide-react';
import { Button } from '../ui/Button';
import toast from 'react-hot-toast';
import { newsletterService } from '../../lib/supabase';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await newsletterService.subscribe(email);
      toast.success('Merci pour votre inscription !');
      setEmail('');
    } catch (error: any) {
      if (error.message === 'Email already subscribed') {
        toast.error('Cet email est déjà inscrit');
      } else {
        console.error('Error subscribing to newsletter:', error);
        toast.error('Une erreur est survenue. Veuillez réessayer.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2647] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <div className="flex items-center gap-2">
                <Target className="w-12 h-12 text-[#D4AF37]" />
                <span className="text-3xl font-bold">NegoPros</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-4">L'expertise négociation</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Coaching
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Intervenant
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/ebooks" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  E-books
                </Link>
              </li>
              <li>
                <Link to="/ressources" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Guides gratuits
                </Link>
              </li>
              <li>
                <Link to="/temoignages" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Témoignages
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-bold text-lg mb-2">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">
              Recevez nos meilleurs conseils en négociation
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#D4AF37] text-white placeholder-gray-400"
              />
              <Button type="submit" isLoading={isLoading} size="md">
                S'inscrire
              </Button>
            </form>
            <p className="text-xs text-gray-400 mt-2">
              Vos données sont protégées - Conformité RGPD
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <Link to="/mentions-legales" className="hover:text-[#D4AF37] transition-colors">
                Mentions légales
              </Link>
              <Link to="/cgv" className="hover:text-[#D4AF37] transition-colors">
                CGV
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-[#D4AF37] transition-colors">
                Confidentialité
              </Link>
              <Link to="/cookies" className="hover:text-[#D4AF37] transition-colors">
                Cookies
              </Link>
            </div>
            <p className="text-sm text-gray-300">
              © {currentYear} NegoPros.fr - Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
