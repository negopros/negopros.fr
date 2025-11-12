import { useEffect } from 'react';
import { Modal } from './Modal';
import { useAnalytics } from '../../hooks/useAnalytics';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventType?: 'consultation-gratuite' | 'audit-express' | 'coaching' | 'coaching-6h' | 'forfait-mensuel-pme';
}

export const CalendlyModal = ({ isOpen, onClose, eventType = 'consultation-gratuite' }: CalendlyModalProps) => {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      trackEvent('calendly_modal_open', 'engagement', { eventType });

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [isOpen, eventType, trackEvent]);

  const getCalendlyUrl = () => {
    switch (eventType) {
      case 'consultation-gratuite':
        return 'https://calendly.com/gerardpavez/30min';
      case 'audit-express':
        return 'https://calendly.com/gerardpavez/audit-1h';
      case 'coaching':
        return 'https://calendly.com/gerardpavez/forfait-3-seances-coaching';
      case 'coaching-6h':
        return 'https://calendly.com/gerardpavez/forfait-6-seances-coaching';
      case 'forfait-mensuel-pme':
        return 'https://calendly.com/gerardpavez/30min';
      default:
        return 'https://calendly.com/gerardpavez/30min';
    }
  };

  const getTitle = () => {
    switch (eventType) {
      case 'consultation-gratuite':
        return 'Consultation Découverte Gratuite - 30 min';
      case 'audit-express':
        return 'Coaching 1h / Audit Négociation Express - 1 heure';
      case 'coaching':
        return 'Séance Coaching - 3h';
      case 'coaching-6h':
        return 'Forfait 6 séances Coaching - 6h';
      case 'forfait-mensuel-pme':
        return 'Forfait Mensuel Dirigeant PME';
      default:
        return 'Réserver un rendez-vous';
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={getTitle()}>
      <div className="min-h-[600px]">
        <div
          className="calendly-inline-widget"
          data-url={getCalendlyUrl()}
          style={{ minWidth: '320px', height: '600px' }}
        />
      </div>
    </Modal>
  );
};
