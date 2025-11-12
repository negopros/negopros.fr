import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, DollarSign, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { CalendlyModal } from '../components/ui/CalendlyModal';
import { SEO } from '../components/SEO';
import { CoachingCheckout } from '../components/coaching/CoachingCheckout';
import { COACHING_PRODUCTS } from '../utils/coachingProducts';
import { CoachingProduct } from '../types/coaching';
import toast from 'react-hot-toast';

export const Reserver = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<CoachingProduct | null>(null);

  useEffect(() => {
    const paymentStatus = searchParams.get('payment');
    const sessionId = searchParams.get('session_id');

    if (paymentStatus === 'success' && sessionId) {
      toast.success('Paiement validé ! Choisissez maintenant votre créneau.');
      const product = COACHING_PRODUCTS.find(p => p.requiresPayment);
      if (product) {
        setSelectedProduct(product);
        setIsCalendlyOpen(true);
      }
    } else if (paymentStatus === 'cancelled') {
      toast.error('Paiement annulé');
    }
  }, [searchParams]);

  const handleProductSelect = (product: CoachingProduct) => {
    if (product.eventType === 'forfait-mensuel-pme') {
      navigate('/contact');
      return;
    }

    setSelectedProduct(product);

    if (product.requiresPayment) {
      setShowCheckout(true);
    } else {
      setIsCalendlyOpen(true);
    }
  };

  const handlePaymentSuccess = () => {
    setShowCheckout(false);
    toast.success('Paiement validé ! Choisissez maintenant votre créneau.');
    setIsCalendlyOpen(true);
  };

  return (
    <div className="pt-20">
      <SEO
        title="Réserver une consultation"
        description="Réservez votre consultation en négociation avec NegoPros. Consultation gratuite, coaching ou audit express. Choisissez votre créneau en ligne."
        keywords="réserver consultation négociation, coaching négociation, audit négociation, prise de rendez-vous"
      />
      <section className="py-20 bg-gradient-to-br from-[#0A2647] to-[#2563EB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Réservez votre consultation</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Choisissez le format qui correspond à vos besoins et réservez en quelques clics
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COACHING_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full flex flex-col relative ${
                  product.highlight ? 'ring-2 ring-[#D4AF37]' : ''
                }`}>
                  {product.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge variant="secondary" className="text-sm px-6 py-2">
                        ⭐ Recommandé
                      </Badge>
                    </div>
                  )}

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4">
                      {product.title}
                    </h3>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <Clock className="w-5 h-5 text-[#2563EB]" />
                        {product.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <DollarSign className="w-5 h-5 text-[#D4AF37]" />
                        <span className="font-semibold text-xl text-[#0A2647] dark:text-white">
                          {product.price}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {product.description}
                    </p>

                    <div className="mb-8 flex-grow">
                      <h4 className="font-semibold text-[#0A2647] dark:text-white mb-3">
                        Ce qui est inclus :
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => handleProductSelect(product)}
                      className="w-full"
                      size="lg"
                      variant={product.highlight ? 'primary' : 'secondary'}
                    >
                      {product.price === 'Gratuit' ? 'Réserver gratuitement' : product.id === 'forfait-mensuel-pme' ? 'Demandez votre devis' : product.requiresPayment ? 'Payer et réserver' : 'Choisir un créneau'}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-[#0A2647] to-[#2563EB] text-white">
              <h3 className="text-2xl font-bold mb-4">Comment ça marche ?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">1</div>
                  <h4 className="font-semibold mb-2">Choisissez</h4>
                  <p className="text-sm text-gray-200">
                    Sélectionnez le type de consultation qui vous convient
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">2</div>
                  <h4 className="font-semibold mb-2">Payez</h4>
                  <p className="text-sm text-gray-200">
                    Paiement sécurisé pour les consultations payantes
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">3</div>
                  <h4 className="font-semibold mb-2">Choisissez</h4>
                  <p className="text-sm text-gray-200">
                    Sélectionnez votre créneau dans le calendrier en ligne
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">4</div>
                  <h4 className="font-semibold mb-2">Négociez!</h4>
                  <p className="text-sm text-gray-200">
                    Recevez le lien de visio et préparez vos questions
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              🔒 Vos données sont sécurisées et ne seront jamais partagées
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Vous recevrez une confirmation par email immédiatement après votre réservation
            </p>
          </motion.div>
        </div>
      </section>

      {showCheckout && selectedProduct && (
        <CoachingCheckout
          product={selectedProduct}
          onPaymentSuccess={handlePaymentSuccess}
          onCancel={() => {
            setShowCheckout(false);
            setSelectedProduct(null);
          }}
        />
      )}

      {isCalendlyOpen && selectedProduct && (
        <CalendlyModal
          isOpen={isCalendlyOpen}
          onClose={() => {
            setIsCalendlyOpen(false);
            setSelectedProduct(null);
          }}
          eventType={selectedProduct.eventType}
        />
      )}
    </div>
  );
};
