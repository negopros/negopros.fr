export interface CoachingProduct {
  id: string;
  title: string;
  duration: string;
  price: string;
  priceAmount: number;
  description: string;
  features: string[];
  highlight: boolean;
  eventType: 'consultation-gratuite' | 'audit-express' | 'coaching' | 'coaching-6h' | 'forfait-mensuel-pme';
  requiresPayment: boolean;
  stripeProductId?: string;
}
