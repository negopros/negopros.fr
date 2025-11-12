import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from './Button';
import toast from 'react-hot-toast';
import { newsletterService } from '../../lib/supabase';
import { useAnalytics } from '../../hooks/useAnalytics';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackEvent } = useAnalytics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error('Veuillez entrer une adresse email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Veuillez entrer une adresse email valide');
      return;
    }

    setIsSubmitting(true);
    try {
      await newsletterService.subscribe(email);
      toast.success('Inscription réussie ! Merci de rejoindre notre newsletter.');

      trackEvent('newsletter_subscribe', 'conversion', { email });

      setEmail('');
    } catch (error: any) {
      if (error.message === 'Email already subscribed') {
        toast.error('Cet email est déjà inscrit à notre newsletter');
      } else {
        console.error('Error subscribing to newsletter:', error);
        toast.error('Une erreur est survenue. Veuillez réessayer.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-[#0A2647] to-[#2563EB] rounded-2xl p-8 md:p-12"
    >
      <div className="max-w-3xl mx-auto text-center">
        <Mail className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Restez informé de nos actualités
        </h3>
        <p className="text-lg text-gray-200 mb-8">
          Recevez nos conseils en négociation, nos derniers articles et offres exclusives
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            disabled={isSubmitting}
            className="flex-1 px-6 py-4 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent disabled:opacity-50"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white disabled:opacity-50"
          >
            {isSubmitting ? 'Inscription...' : "S'inscrire"}
          </Button>
        </form>

        <p className="text-sm text-gray-300 mt-4">
          En vous inscrivant, vous acceptez de recevoir nos emails. Désinscription possible à tout moment.
        </p>
      </div>
    </motion.div>
  );
};
