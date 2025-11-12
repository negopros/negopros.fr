import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CookieConsent } from './components/CookieConsent';
import { useScrollTop } from './hooks/useScrollTop';
import { usePageView } from './hooks/useAnalytics';
import { Homepage } from './pages/Homepage';

const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Formations = lazy(() => import('./pages/Formations').then(m => ({ default: m.Formations })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Reserver = lazy(() => import('./pages/Reserver').then(m => ({ default: m.Reserver })));
const Ebooks = lazy(() => import('./pages/Ebooks').then(m => ({ default: m.Ebooks })));
const Coaching = lazy(() => import('./pages/Coaching').then(m => ({ default: m.Coaching })));
const Methode = lazy(() => import('./pages/Methode').then(m => ({ default: m.Methode })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogArticle = lazy(() => import('./pages/BlogArticle').then(m => ({ default: m.BlogArticle })));
const APropos = lazy(() => import('./pages/APropos').then(m => ({ default: m.APropos })));
const Temoignages = lazy(() => import('./pages/Temoignages').then(m => ({ default: m.Temoignages })));
const Ressources = lazy(() => import('./pages/Ressources').then(m => ({ default: m.Ressources })));
const Checkout = lazy(() => import('./pages/Checkout'));
const MentionsLegales = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.MentionsLegales })));
const CGV = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.CGV })));
const PolitiqueConfidentialite = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.PolitiqueConfidentialite })));
const GestionCookies = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.GestionCookies })));

const ScrollToTop = () => {
  useScrollTop();
  usePageView();
  return null;
};

const NotFound = () => (
  <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-[#0A2647] dark:text-white mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Page non trouvée</p>
      <a href="/" className="text-[#2563EB] hover:underline">
        Retour à l'accueil
      </a>
    </div>
  </div>
);

const ComingSoon = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="text-center max-w-2xl px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-[#0A2647] dark:text-white mb-4">{title}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Cette page est en cours de développement. Revenez bientôt !
      </p>
      <a href="/" className="inline-block px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#0A2647] transition-colors">
        Retour à l'accueil
      </a>
    </div>
  </div>
);

const LoadingFallback = () => (
  <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-[#2563EB] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-300">Chargement...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ComingSoon title="Détail du Service" />} />
              <Route path="/formations" element={<Formations />} />
              <Route path="/ebooks" element={<Ebooks />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/coaching" element={<Coaching />} />
              <Route path="/methode" element={<Methode />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogArticle />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/temoignages" element={<Temoignages />} />
              <Route path="/ressources" element={<Ressources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reserver" element={<Reserver />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/cgv" element={<CGV />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
              <Route path="/cookies" element={<GestionCookies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      <CookieConsent />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#0A2647',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#D4AF37',
              secondary: '#fff',
            },
          },
        }}
      />
    </Router>
  );
}

export default App;
