import { motion } from 'framer-motion';
import { BookOpen, Download, Star, CheckCircle, ChevronDown, ChevronUp, XCircle } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { chaptersList, chaptersListAchats } from '../data/ebookMeta';
import { useState, useEffect } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import toast from 'react-hot-toast';

const ebooks = [
  {
    id: 'negociation-pme',
    title: 'La Négociation pour le Dirigeant de PME',
    description: 'Guide complet et pratique : Stratégies, techniques et outils issus des meilleures références internationales.',
    price: '9,90€',
    rating: 5.0,
    reviews: 247,
    pages: '6 chapitres',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
    isFree: false,
    isPromo: false,
    discount: undefined,
    originalPrice: undefined,
    showTableOfContents: true,
    tableOfContents: chaptersList,
    features: [
      'Fondamentaux de la négociation',
      'Conduite et conclusion',
      'Techniques avancées',
      'Cas pratiques PME',
    ],
  },
  {
    id: 'negociation-achats',
    title: 'Guide Complet de la Négociation Achats Stratégique',
    description: 'Maîtrisez les fondamentaux de la négociation achats avec ce guide pratique spécialisé.',
    price: '9,90€',
    rating: 4.8,
    reviews: 156,
    pages: '8 chapitres',
    image: 'https://images.pexels.com/photos/159621/open-book-library-education-read-159621.jpeg?auto=compress&cs=tinysrgb&w=800',
    isFree: false,
    isPromo: false,
    discount: undefined,
    originalPrice: undefined,
    showTableOfContents: true,
    tableOfContents: chaptersListAchats,
    features: [
      'BATNA, ZOPA, TCO',
      'Méthode PACIFICAT',
      'Matrice de Kraljic',
      'Cas pratiques achats',
    ],
  },
];

export function Ebooks() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [expandedIndex, setExpandedIndex] = useState<boolean>(true);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const { trackEvent } = useAnalytics();

  const success = searchParams.get('success');
  const canceled = searchParams.get('canceled');
  const productId = searchParams.get('product');

  useEffect(() => {
    if (success === 'true' && productId) {
      setShowDownloadModal(true);
      toast.success('Paiement réussi ! Téléchargez votre ebook ci-dessous.');
    } else if (canceled === 'true') {
      toast.error('Paiement annulé.');
    }
  }, [success, canceled, productId]);

  const handleBuyClick = (ebookId: string | number) => {
    const ebook = ebooks.find(e => e.id === ebookId);

    trackEvent('ebook_purchase_click', 'conversion', {
      ebookId,
      ebookTitle: ebook?.title,
      price: ebook?.price,
    });

    navigate(`/checkout?product=${ebookId}`);
  };

  const toggleTableOfContents = () => {
    setExpandedIndex(!expandedIndex);
  };

  const getDownloadUrl = () => {
    if (productId === 'negociation-pme') {
      return '/ebook_negociation_pme (1).pdf';
    } else if (productId === 'negociation-achats') {
      return '/ebook_negociation_acheteur_2025.pdf';
    }
    return null;
  };

  const getEbookTitle = () => {
    const ebook = ebooks.find(e => e.id === productId);
    return ebook?.title || 'Votre ebook';
  };

  const downloadUrl = getDownloadUrl();

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <SEO
        title="E-books Négociation"
        description="Bibliothèque d'e-books gratuits et payants sur la négociation. Guides pratiques pour dirigeants de PME, acheteurs et professionnels."
        keywords="ebook négociation, guide négociation gratuit, formation négociation pme, livre négociation"
      />

      {showDownloadModal && downloadUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
          >
            <button
              onClick={() => {
                setShowDownloadModal(false);
                navigate('/ebooks', { replace: true });
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <XCircle className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Paiement réussi !
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Merci pour votre achat de <strong>{getEbookTitle()}</strong>
              </p>

              <a
                href={downloadUrl}
                download
                onClick={() => {
                  trackEvent('ebook_download', 'conversion', {
                    ebookId: productId,
                    ebookTitle: getEbookTitle(),
                  });
                }}
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all mb-4"
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger mon ebook
              </a>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Vous recevrez également un email de confirmation avec le lien de téléchargement.
              </p>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setShowDownloadModal(false);
                  navigate('/ebooks', { replace: true });
                }}
              >
                Fermer
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#144272]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <BookOpen className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bibliothèque E-books
            </h1>
            <p className="text-xl text-gray-200">
              Accédez à notre collection de guides pratiques et développez vos compétences en négociation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {ebooks.map((ebook, index) => (
              <motion.div
                key={ebook.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={ebook.image}
                      alt={ebook.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full font-bold ${
                      ebook.isFree ? 'bg-green-500 text-white' : 'bg-[#D4AF37] text-[#0A2647]'
                    }`}>
                      {ebook.price}
                    </div>
                    {ebook.isPromo && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {ebook.discount}
                      </div>
                    )}
                    {ebook.isFree && (
                      <div className="absolute top-4 left-4 bg-[#2563EB] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Nouveau
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-3">
                      {ebook.title}
                    </h3>

                    {ebook.originalPrice && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-400 dark:text-gray-500 line-through text-sm">
                          {ebook.originalPrice}
                        </span>
                        <span className="text-red-600 dark:text-red-500 font-bold text-lg">
                          {ebook.price}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {ebook.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        ({ebook.reviews} avis)
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {ebook.pages} pages
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {ebook.description}
                    </p>

                    <div className="mb-6 space-y-2">
                      {ebook.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {ebook.showTableOfContents && (
                      <div className="mb-6">
                        <button
                          onClick={toggleTableOfContents}
                          className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <span className="font-semibold text-[#0A2647] dark:text-white">
                            📚 Table des matières détaillée
                          </span>
                          {expandedIndex ? (
                            <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          )}
                        </button>

                        {expandedIndex && ebook.tableOfContents && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg max-h-96 overflow-y-auto"
                          >
                            <div className="space-y-4">
                              {ebook.tableOfContents.map((chapter) => (
                                <div key={chapter.id} className="border-l-2 border-[#2563EB] pl-4">
                                  <h4 className="font-semibold text-[#0A2647] dark:text-white mb-2">
                                    {chapter.title}
                                  </h4>
                                  {chapter.sections && chapter.sections.length > 0 && (
                                    <ul className="space-y-1 ml-4">
                                      {chapter.sections.map((section) => (
                                        <li key={section.id} className="text-sm text-gray-600 dark:text-gray-400">
                                          • {section.title}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )}

                    <div className="mt-auto space-y-2">
                      <Button
                        variant="primary"
                        className="w-full"
                        onClick={() => handleBuyClick(ebook.id)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {ebook.isPromo ? `Acheter et télécharger à ${ebook.price}` : 'Acheter et télécharger'}
                      </Button>
                      <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                        Format PDF • Téléchargement immédiat
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#144272]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin d'un accompagnement personnalisé ?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Nos e-books sont parfaits pour débuter, mais pour aller plus loin, découvrez nos formations et coaching
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A2647]"
                onClick={() => window.location.href = '/contact'}
              >
                Voir les formations
              </Button>
              <Button
                variant="primary"
                onClick={() => window.location.href = '/contact'}
              >
                Découvrir le coaching
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
