import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader, CreditCard, Lock } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { CoachingProduct } from '../../types/coaching';
import toast from 'react-hot-toast';

interface CoachingCheckoutProps {
  product: CoachingProduct;
  onPaymentSuccess: (sessionId: string) => void;
  onCancel: () => void;
}

export function CoachingCheckout({ product, onPaymentSuccess, onCancel }: CoachingCheckoutProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Veuillez entrer une adresse email valide');
      return;
    }

    setEmailError('');
    setIsProcessing(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            productId: product.stripeProductId,
            email: email,
            successUrl: `${window.location.origin}/reserver?payment=success&session_id={CHECKOUT_SESSION_ID}`,
            cancelUrl: `${window.location.origin}/reserver?payment=cancelled`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Erreur lors de la création de la session de paiement');
      }

      const { url, sessionId } = await response.json();

      if (url) {
        window.location.href = url;
      } else if (sessionId) {
        onPaymentSuccess(sessionId);
      }
    } catch (error) {
      console.error('Erreur de paiement:', error);
      toast.error('Erreur lors du traitement du paiement. Veuillez réessayer.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onCancel}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <Card className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A2647] dark:text-white mb-2">
              Paiement sécurisé
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Validez votre réservation et choisissez ensuite votre créneau
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-[#0A2647] dark:text-white mb-4">
              Récapitulatif de votre commande
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-[#0A2647] dark:text-white">
                    {product.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {product.duration}
                  </p>
                </div>
                <p className="text-2xl font-bold text-[#2563EB]">
                  {product.price}
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <h4 className="font-medium text-[#0A2647] dark:text-white mb-2 text-sm">
                  Ce qui est inclus :
                </h4>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Adresse email *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                placeholder="votre@email.com"
                required
                disabled={isProcessing}
              />
              {emailError && (
                <p className="mt-2 text-sm text-red-600">{emailError}</p>
              )}
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Votre confirmation et le lien Calendly seront envoyés à cette adresse
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                    Paiement 100% sécurisé
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                    Vos informations bancaires sont cryptées et sécurisées par Stripe
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={isProcessing}
                className="flex-1"
              >
                Annuler
              </Button>
              <Button
                type="submit"
                disabled={isProcessing}
                className="flex-1 bg-[#2563EB] hover:bg-[#1d4ed8]"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <Loader className="w-5 h-5 animate-spin" />
                    Traitement...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Procéder au paiement
                  </span>
                )}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              En continuant, vous acceptez nos conditions générales de vente
            </p>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
