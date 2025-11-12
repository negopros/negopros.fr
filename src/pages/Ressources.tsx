import { motion } from 'framer-motion';
import { FileText, Download, Video, Headphones, BookOpen, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

const resources = [
  {
    id: 1,
    type: 'PDF',
    icon: FileText,
    title: 'Checklist de Préparation à la Négociation',
    description: 'Liste complète des éléments à préparer avant toute négociation importante.',
    format: 'PDF',
    size: '2 MB',
    pages: 8,
    category: 'Outil',
    isFree: true,
  },
  {
    id: 2,
    type: 'PDF',
    icon: FileText,
    title: 'Template de Stratégie de Négociation',
    description: 'Modèle structuré pour élaborer votre stratégie de négociation pas à pas.',
    format: 'PDF',
    size: '1.5 MB',
    pages: 12,
    category: 'Outil',
    isFree: true,
  },
  {
    id: 3,
    type: 'Guide',
    icon: BookOpen,
    title: '10 Tactiques pour Déjouer les Manipulations',
    description: 'Guide pratique pour identifier et contrer les tactiques de manipulation en négociation.',
    format: 'PDF',
    size: '3 MB',
    pages: 24,
    category: 'Guide',
    isFree: false,
  },
  {
    id: 4,
    type: 'Video',
    icon: Video,
    title: 'Masterclass : Les Bases de la Négociation',
    description: 'Replay de notre masterclass gratuite sur les fondamentaux de la négociation.',
    format: 'MP4',
    duration: '45 min',
    category: 'Formation',
    isFree: true,
  },
  {
    id: 5,
    type: 'Podcast',
    icon: Headphones,
    title: 'Série Podcast : Négociations Célèbres',
    description: 'Analyse détaillée de grandes négociations historiques et des leçons à en tirer.',
    format: 'Audio',
    episodes: 12,
    category: 'Podcast',
    isFree: true,
  },
  {
    id: 6,
    type: 'PDF',
    icon: FileText,
    title: 'Grille d\'Analyse des Parties Prenantes',
    description: 'Outil pour cartographier et analyser les intérêts de toutes les parties prenantes.',
    format: 'Excel',
    size: '0.5 MB',
    category: 'Outil',
    isFree: true,
  },
  {
    id: 7,
    type: 'Guide',
    icon: BookOpen,
    title: 'Guide Complet du BATNA',
    description: 'Tout savoir sur votre meilleure alternative et comment l\'utiliser stratégiquement.',
    format: 'PDF',
    size: '2.5 MB',
    pages: 18,
    category: 'Guide',
    isFree: false,
  },
  {
    id: 8,
    type: 'PDF',
    icon: FileText,
    title: 'Phrases Clés pour Négocier',
    description: 'Recueil de 50 phrases et formulations efficaces pour toutes les situations.',
    format: 'PDF',
    size: '1 MB',
    pages: 10,
    category: 'Outil',
    isFree: true,
  },
];

const categories = [
  { name: 'Tous', count: resources.length },
  { name: 'Outil', count: resources.filter(r => r.category === 'Outil').length },
  { name: 'Guide', count: resources.filter(r => r.category === 'Guide').length },
  { name: 'Formation', count: resources.filter(r => r.category === 'Formation').length },
  { name: 'Podcast', count: resources.filter(r => r.category === 'Podcast').length },
];

export function Ressources() {
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
            <Download className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ressources Gratuites
            </h1>
            <p className="text-xl text-gray-200">
              Outils, guides et contenus pour améliorer vos compétences en négociation
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
                variant={index === 0 ? 'primary' : 'secondary'}
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-10 h-10 text-[#2563EB]" />
                      <Badge variant={resource.isFree ? 'success' : 'secondary'}>
                        {resource.isFree ? 'Gratuit' : 'Premium'}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-[#0A2647] dark:text-white mb-3">
                      {resource.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                      {resource.description}
                    </p>

                    <div className="space-y-2 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>Format:</span>
                        <span className="font-semibold">{resource.format}</span>
                      </div>
                      {resource.size && (
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                          <span>Taille:</span>
                          <span className="font-semibold">{resource.size}</span>
                        </div>
                      )}
                      {resource.pages && (
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                          <span>Pages:</span>
                          <span className="font-semibold">{resource.pages}</span>
                        </div>
                      )}
                      {resource.duration && (
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                          <span>Durée:</span>
                          <span className="font-semibold">{resource.duration}</span>
                        </div>
                      )}
                      {resource.episodes && (
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                          <span>Épisodes:</span>
                          <span className="font-semibold">{resource.episodes}</span>
                        </div>
                      )}
                    </div>

                    <Button
                      variant={resource.isFree ? 'primary' : 'outline'}
                      className="w-full"
                      onClick={() => window.location.href = '/contact'}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {resource.isFree ? 'Télécharger' : 'En savoir plus'}
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-[#0A2647] to-[#144272] text-white">
              <div className="text-center mb-8">
                <CheckCircle className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Accédez à Toutes nos Ressources Premium
                </h2>
                <p className="text-xl text-gray-200">
                  Rejoignez notre communauté et débloquez l'accès à l'intégralité de nos ressources exclusives
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Bibliothèque Complète</h3>
                    <p className="text-sm text-gray-200">Plus de 50 outils et guides pratiques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Mises à Jour Régulières</h3>
                    <p className="text-sm text-gray-200">Nouveaux contenus chaque mois</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Support Prioritaire</h3>
                    <p className="text-sm text-gray-200">Assistance par email sous 24h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Communauté Exclusive</h3>
                    <p className="text-sm text-gray-200">Échangez avec d'autres professionnels</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0A2647] text-lg px-8 py-4"
                  onClick={() => window.location.href = '/contact'}
                >
                  Demander un accès Premium
                </Button>
              </div>
            </Card>
          </motion.div>
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
              Besoin de plus qu'une ressource ?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Découvrez nos formations complètes et notre coaching personnalisé
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
