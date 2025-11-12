import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { blogArticles as allBlogArticles } from '../data/blogArticles';
import { SEO } from '../components/SEO';
import { getOrganizationSchema } from '../utils/structuredData';

const whyChooseUs = [
  {
    title: 'Expertise Reconnue',
    description: '15 ans d\'expérience en négociation stratégique dans les grands groupes',
  },
  {
    title: 'Méthode Éprouvée',
    description: 'Framework exclusif NegoPros testé sur +de 100 négociations réussies',
  },
  {
    title: 'ROI Mesurable',
    description: 'Résultats concrets et chiffrables dès les premières sessions',
  },
];

export const Homepage = () => {
  const latestArticles = allBlogArticles.slice(0, 3);

  return (
    <div>
      <SEO structuredData={getOrganizationSchema()} />
      <Hero />
      <Stats />
      <Services />
      <Testimonials />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2647] dark:text-white mb-4">
              Pourquoi NegoPros ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              L'excellence au service de vos résultats
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center h-full">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2647] dark:text-white mb-4">
              Derniers Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Conseils et stratégies de négociation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }} />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3 text-sm text-gray-600 dark:text-gray-400">
                      <span className="px-3 py-1 bg-[#2563EB] text-white rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                      <span>• {article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2647] dark:text-white mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      {article.excerpt}
                    </p>
                    <Link to={`/blog/${article.id}`} className="text-[#2563EB] font-semibold hover:underline flex items-center gap-2">
                      Lire l'article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" variant="secondary">
                Voir tous les articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0A2647] to-[#2563EB] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à performer dans vos négociations ?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Commencez dès aujourd'hui avec une consultation gratuite de 30 minutes
            </p>
            <Link to="/reserver">
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white">
                Réserver ma consultation gratuite
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
