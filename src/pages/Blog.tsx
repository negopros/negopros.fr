import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useState } from 'react';

import { blogArticles } from '../data/blogArticles';

const categories = ['Tous', 'Stratégie', 'Préparation', 'Techniques', 'Philosophie', 'Défense', 'International', 'PME', 'Ressources'];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredArticles = selectedCategory === 'Tous'
    ? blogArticles
    : blogArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
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
              Blog NegoPros
            </h1>
            <p className="text-xl text-gray-200">
              Conseils, stratégies et insights pour devenir un expert de la négociation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={selectedCategory === category ? 'primary' : 'secondary'}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="primary">{article.category}</Badge>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#0A2647] dark:text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full group"
                        onClick={() => window.location.href = `/blog/${article.id}`}
                      >
                        Lire l'article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
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
            <Tag className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Recevez nos derniers articles
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Inscrivez-vous à notre newsletter pour ne rien manquer de nos conseils et stratégies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-[#D4AF37]"
              />
              <Button variant="primary" className="whitespace-nowrap">
                S'inscrire
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
