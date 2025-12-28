import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { CheckCircle2, Mail, User, Building2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { crmService } from '../../lib/supabase';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadSource: string;
  leadType?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onSuccess?: () => void;
}

export function LeadCaptureModal({
  isOpen,
  onClose,
  leadSource,
  leadType = 'information',
  title = 'Recevoir plus d\'informations',
  description = 'Laissez-nous vos coordonnées et nous vous recontacterons rapidement.',
  buttonText = 'Envoyer',
  onSuccess,
}: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) {
      toast.error('L\'email est requis');
      return;
    }

    setIsSubmitting(true);

    try {
      await crmService.createLead({
        email: formData.email,
        name: formData.name || undefined,
        company: formData.company || undefined,
        lead_source: leadSource,
        lead_type: leadType,
      });

      setIsSuccess(true);
      toast.success('Merci pour votre intérêt ! Nous vous recontacterons bientôt.');

      if (onSuccess) {
        onSuccess();
      }

      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error: unknown) {
      console.error('Error submitting lead:', error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'Une erreur est survenue. Veuillez réessayer.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ email: '', name: '', company: '' });
    setIsSuccess(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={title}>
      {isSuccess ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Merci !
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Nous avons bien reçu votre demande et nous vous contacterons très prochainement.
          </p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="votre.email@exemple.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nom complet
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Jean Dupont"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Entreprise
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, company: e.target.value }))
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Nom de votre entreprise"
                />
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isSubmitting}
                className="flex-1"
              >
                Annuler
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A3B5C]"
              >
                {isSubmitting ? 'Envoi en cours...' : buttonText}
              </Button>
            </div>
          </form>

          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
            Vos données sont protégées et ne seront jamais partagées avec des tiers.
          </p>
        </>
      )}
    </Modal>
  );
}
