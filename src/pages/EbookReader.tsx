import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronLeft, ChevronRight, Download,
  Sun, Moon, BookOpen, Home
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { chaptersList, ebookMetadata, loadChapter, type EbookChapter } from '../data/ebookMeta';
import { useDarkMode } from '../hooks/useDarkMode';

export const EbookReader = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentChapter, setCurrentChapter] = useState<EbookChapter | null>(null);
  const [loading, setLoading] = useState(true);
  const { isDark: darkMode, toggleDark } = useDarkMode();

  const currentChapterIndex = chaptersList.findIndex(ch => ch.id === chapterId);
  const prevChapter = currentChapterIndex > 0 ? chaptersList[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < chaptersList.length - 1 ? chaptersList[currentChapterIndex + 1] : null;
  const isIntroductionOnly = false; // Accès complet débloqé

  useEffect(() => {
    const loadChapterData = async () => {
      if (!chapterId) {
        navigate(`/ebook/${chaptersList[0].id}`);
        return;
      }

      setLoading(true);
      const chapter = await loadChapter(chapterId);

      if (!chapter) {
        navigate(`/ebook/${chaptersList[0].id}`);
      } else {
        setCurrentChapter(chapter);
      }
      setLoading(false);
    };

    loadChapterData();
  }, [chapterId, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapterId]);

  const handleDownloadPDF = () => {
    alert('La fonction de téléchargement PDF sera disponible prochainement.');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Chargement du chapitre...</p>
        </div>
      </div>
    );
  }

  if (!currentChapter) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <SEO
        title={`${currentChapter.title} - E-book Négociation PME`}
        description={`Chapitre : ${currentChapter.title} - Guide complet sur la négociation pour dirigeants de PME`}
        keywords="ebook négociation, guide négociation pme, formation négociation"
      />

      <div
        className="fixed top-0 left-0 right-0 h-1 bg-[#2563EB] z-50 transition-all"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-40 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Home className="w-5 h-5 text-[#2563EB]" />
              <span className="hidden sm:inline text-sm font-semibold text-gray-700 dark:text-gray-300">
                Retour au site
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Button
              onClick={handleDownloadPDF}
              size="sm"
              className="hidden sm:flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Télécharger PDF
            </Button>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-16 bottom-0 w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto z-30"
            >
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-[#2563EB]" />
                    <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Table des Matières
                    </h2>
                  </div>
                  <h1 className="text-lg font-bold text-[#0A2647] dark:text-white">
                    {ebookMetadata.title}
                  </h1>
                </div>

                <nav>
                  <ul className="space-y-2">
                    {chaptersList.map((chapter, index) => {
                      const isLocked = isIntroductionOnly && chapter.id !== 'introduction';
                      return (
                        <li key={chapter.id}>
                          {isLocked ? (
                            <div className={`block px-4 py-3 rounded-lg opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-700`}>
                              <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 text-sm font-bold">
                                  {index + 1}
                                </span>
                                <div className="flex-1">
                                  <span className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                    {chapter.title}
                                  </span>
                                  <div className="mt-1 text-xs text-[#D4AF37] font-semibold">
                                    🔒 Contenu payant
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              to={`/ebook/${chapter.id}`}
                              className={`block px-4 py-3 rounded-lg transition-all ${
                                chapter.id === chapterId
                                  ? 'bg-[#2563EB] text-white font-semibold'
                                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 text-sm font-bold">
                                  {index + 1}
                                </span>
                                <span className="text-sm leading-relaxed">{chapter.title}</span>
                              </div>
                            </Link>
                          )}
                          {chapter.sections && chapter.sections.length > 0 && chapter.id === chapterId && !isLocked && (
                            <ul className="mt-2 ml-8 space-y-1">
                              {chapter.sections.map((section) => (
                                <li key={section.id}>
                                  <a
                                    href={`#${section.id}`}
                                    className="block px-3 py-2 text-xs text-gray-600 dark:text-gray-400 hover:text-[#2563EB] dark:hover:text-[#2563EB] transition-colors"
                                  >
                                    {section.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? 'ml-80' : 'ml-0'
          }`}
        >
          <article className="max-w-4xl mx-auto px-6 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Chapitre {currentChapterIndex + 1} / {chaptersList.length}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0A2647] dark:text-white mb-4">
                  {currentChapter.title}
                </h1>
              </div>

              <div
                className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:text-[#0A2647] dark:prose-headings:text-white
                  prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-12 prose-h3:mb-4
                  prose-h4:text-xl prose-h4:font-semibold prose-h4:mt-8 prose-h4:mb-3
                  prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-[#0A2647] dark:prose-strong:text-[#2563EB] prose-strong:font-bold
                  prose-ul:my-6 prose-li:my-2
                  prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: currentChapter.content }}
              />

              {isIntroductionOnly && (
                <div className="mt-12 p-8 bg-gradient-to-br from-[#2563EB] to-[#0A2647] rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4 text-white">Envie de lire la suite ?</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Accédez à l'intégralité de l'e-book avec 5 chapitres supplémentaires : les fondamentaux de la négociation,
                    la conduite et la conclusion, les techniques avancées et les cas pratiques PME.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="flex items-baseline gap-3">
                      <span className="text-white/60 line-through text-lg">19,90€</span>
                      <span className="text-3xl font-bold text-[#D4AF37]">9,90€</span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">-50%</span>
                    </div>
                    <Button
                      variant="primary"
                      className="bg-[#D4AF37] hover:bg-[#B4941F] text-[#0A2647] border-0 font-bold"
                      onClick={() => window.location.href = '/contact'}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Acheter maintenant
                    </Button>
                  </div>
                </div>
              )}

              <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                {prevChapter && !isIntroductionOnly ? (
                  <Link
                    to={`/ebook/${prevChapter.id}`}
                    className="flex items-center gap-2 text-[#2563EB] hover:text-[#0A2647] dark:hover:text-white transition-colors group"
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <div className="text-left">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Précédent</div>
                      <div className="font-semibold">{prevChapter.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {nextChapter && !isIntroductionOnly ? (
                  <Link
                    to={`/ebook/${nextChapter.id}`}
                    className="flex items-center gap-2 text-[#2563EB] hover:text-[#0A2647] dark:hover:text-white transition-colors group"
                  >
                    <div className="text-right">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Suivant</div>
                      <div className="font-semibold">{nextChapter.title}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : isIntroductionOnly ? (
                  <Link
                    to="/ebooks"
                    className="flex items-center gap-2 text-[#2563EB] hover:text-[#0A2647] dark:hover:text-white transition-colors"
                  >
                    <Home className="w-5 h-5" />
                    <span className="font-semibold">Retour aux E-books</span>
                  </Link>
                ) : (
                  <Link
                    to="/ebooks"
                    className="flex items-center gap-2 text-[#2563EB] hover:text-[#0A2647] dark:hover:text-white transition-colors"
                  >
                    <Home className="w-5 h-5" />
                    <span className="font-semibold">Retour aux E-books</span>
                  </Link>
                )}
              </div>
            </motion.div>
          </article>
        </main>
      </div>
    </div>
  );
};
