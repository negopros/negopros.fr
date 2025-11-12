import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { blogArticles } from '../data/blogArticles';

export const BlogArticle = () => {
  const { id } = useParams<{ id: string }>();
  const article = blogArticles.find((a) => a.id === Number(id));

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog">
            <Button variant="outline" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour au blog
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <Badge variant="primary" className="mb-4">
                {article.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A2647] dark:text-white mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {article.content.intro}
              </p>

              {article.content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-10"
                >
                  <h2 className="text-3xl font-bold text-[#0A2647] dark:text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.points && (
                    <ul className="space-y-3 ml-0 list-none">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 p-8 bg-gradient-to-br from-[#0A2647] to-[#2563EB] rounded-2xl"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
                <p className="text-gray-200 leading-relaxed">{article.content.conclusion}</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4">
              Vous avez aimé cet article ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Découvrez comment NegoPros peut vous aider à maîtriser ces techniques de négociation
            </p>
            <Link to="/reserver">
              <Button size="lg">Réserver une consultation gratuite</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-6">
              Articles similaires
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {blogArticles
                .filter((a) => a.id !== article.id && a.category === article.category)
                .slice(0, 3)
                .map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/blog/${relatedArticle.id}`}
                    className="block group"
                  >
                    <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-bold text-[#0A2647] dark:text-white group-hover:text-[#2563EB] transition-colors">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {relatedArticle.readTime}
                    </p>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
};
