import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import toast from 'react-hot-toast';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const success = searchParams.get('success');
  const canceled = searchParams.get('canceled');
  const productId = searchParams.get('product');

  useEffect(() => {
    if (success === 'true') {
      toast.success('Paiement réussi ! Vous allez recevoir un email avec votre ebook.');
    } else if (canceled === 'true') {
      toast.error('Paiement annulé.');
    }
  }, [success, canceled]);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error('Veuillez entrer votre email');
      return;
    }

    if (!productId) {
      toast.error('Produit non spécifié');
      return;
    }

    setLoading(true);

    try {
      const products = {
        'negociation-pme': {
          name: 'La Négociation pour le Dirigeant de PME',
          price: 9.90
        },
        'negociation-achats': {
          name: 'Guide Complet de la Négociation Achats Stratégique',
          price: 9.90
        }
      };

      const product = products[productId as keyof typeof products];

      if (!product) {
        toast.error('Produit invalide');
        return;
      }

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          productId,
          productName: product.name,
          price: product.price,
          email
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Erreur lors de la création du paiement');
    } finally {
      setLoading(false);
    }
  };

  if (success === 'true') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Paiement réussi !
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Merci pour votre achat. Vous allez recevoir un email avec votre ebook dans quelques minutes.
          </p>
          <Button onClick={() => navigate('/ebooks')} variant="primary" className="w-full">
            Retour aux ebooks
          </Button>
        </div>
      </div>
    );
  }

  if (canceled === 'true') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full mb-6">
            <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Paiement annulé
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Votre paiement a été annulé. Aucun montant n'a été débité.
          </p>
          <Button onClick={() => navigate('/ebooks')} variant="primary" className="w-full">
            Retour aux ebooks
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          Finaliser l'achat
        </h1>

        <form onSubmit={handleCheckout} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="votre@email.com"
            />
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Vous recevrez votre ebook à cette adresse
            </p>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Redirection vers le paiement...
              </>
            ) : (
              'Procéder au paiement'
            )}
          </Button>

          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            Paiement sécurisé par Stripe
          </p>
        </form>
      </div>
    </div>
  );
}
