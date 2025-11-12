import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-full flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-[#2563EB]" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0A2647] dark:text-white mb-2">
                    Respect de votre vie privée
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site
                    et personnaliser le contenu. En cliquant sur "Accepter", vous consentez à notre utilisation des cookies.{' '}
                    <Link to="/cookies" className="text-[#2563EB] hover:underline font-semibold">
                      En savoir plus
                    </Link>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleAccept}
                      size="md"
                      className="bg-[#2563EB] hover:bg-[#2563EB]/90"
                    >
                      Accepter tous les cookies
                    </Button>
                    <Button
                      onClick={handleReject}
                      size="md"
                      variant="secondary"
                    >
                      Cookies essentiels uniquement
                    </Button>
                  </div>
                </div>

                <button
                  onClick={handleReject}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
