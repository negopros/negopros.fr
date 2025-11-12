import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Accordion } from '../components/ui/Accordion';
import toast from 'react-hot-toast';
import { contactService } from '../lib/supabase';
import { SEO } from '../components/SEO';
import { useAnalytics } from '../hooks/useAnalytics';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  company: z.string().optional(),
  role: z.string().optional(),
  subject: z.string().min(1, 'Veuillez sélectionner un sujet'),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères'),
});

type ContactForm = z.infer<typeof contactSchema>;

const faqItems = [
  {
    question: 'Quels sont vos tarifs ?',
    answer: 'Nos tarifs varient selon le service. Les formations vont de 1490€ à 2490€. Pour le consulting et coaching, contactez-nous pour un devis personnalisé.',
  },
  {
    question: 'Quel est votre délai de réponse ?',
    answer: 'Nous nous engageons à répondre à toutes les demandes sous 24h ouvrées.',
  },
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackEvent } = useAnalytics();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      // Sauvegarder dans la base de données
      await contactService.create({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        subject: data.subject,
        message: data.message,
      });

      // Envoyer l'email
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const emailResponse = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!emailResponse.ok) {
        console.error('Email sending failed:', await emailResponse.text());
      }

      trackEvent('contact_form_submit', 'conversion', {
        subject: data.subject,
        hasPhone: !!data.phone,
        hasCompany: !!data.company,
      });

      toast.success('Message envoyé avec succès ! Nous vous répondrons sous 24h.');
      reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <SEO
        title="Contact"
        description="Contactez NegoPros pour vos projets de négociation. Formations, coaching et consulting personnalisés. Réponse sous 24h."
        keywords="contact negopros, formation négociation, coaching négociation, devis formation"
      />
      <section className="py-20 bg-gradient-to-br from-[#0A2647] to-[#2563EB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Une question ? Un projet ? Échangeons sur vos besoins
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#0A2647] dark:text-white mb-6">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Nom complet *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Téléphone
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Entreprise
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Sujet *
                  </label>
                  <select
                    {...register('subject')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="formation">Renseignement formation</option>
                    <option value="devis">Demande de devis</option>
                    <option value="coaching">Coaching</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" isLoading={isSubmitting} size="lg" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#0A2647] dark:text-white mb-6">
                  Nos coordonnées
                </h2>

                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-[#0A2647] dark:text-white mb-1">Email</h3>
                        <a href="mailto:gerardpavez@gmail.com" className="text-[#2563EB] hover:underline">
                          gerardpavez@gmail.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-[#0A2647] dark:text-white mb-1">Téléphone</h3>
                        <a href="tel:0614393577" className="text-gray-600 dark:text-gray-300">
                          0614393577
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-[#0A2647] dark:text-white mb-1">Adresse</h3>
                        <p className="text-gray-600 dark:text-gray-300">Toulouse Nord- St Jory</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-6">
                  Questions fréquentes
                </h3>
                <Accordion items={faqItems} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
