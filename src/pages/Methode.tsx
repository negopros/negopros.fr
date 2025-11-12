import { motion } from 'framer-motion';
import { Compass, Brain, Target, Users, BarChart, Lightbulb, Shield, Trophy } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const methodePillars = [
  {
    icon: Brain,
    title: 'Psychologie de la Négociation',
    description: 'Comprenez les mécanismes psychologiques qui influencent les décisions et utilisez-les à votre avantage.',
    points: [
      'Analyse des biais cognitifs',
      'Techniques de persuasion éthique',
      'Lecture du langage non-verbal',
      'Gestion des émotions',
    ],
  },
  {
    icon: Target,
    title: 'Préparation Stratégique',
    description: 'Une négociation réussie commence bien avant la rencontre. Maîtrisez l\'art de la préparation.',
    points: [
      'Analyse des enjeux et objectifs',
      'Recherche et intelligence économique',
      'Définition de votre BATNA',
      'Scénarios et plans B',
    ],
  },
  {
    icon: Users,
    title: 'Communication Efficace',
    description: 'Développez votre capacité à communiquer clairement et à créer des relations de confiance.',
    points: [
      'Écoute active et questionnement',
      'Techniques de reformulation',
      'Gestion des objections',
      'Construction du rapport',
    ],
  },
  {
    icon: BarChart,
    title: 'Création de Valeur',
    description: 'Transformez les négociations compétitives en opportunités de création de valeur mutuelle.',
    points: [
      'Identification des intérêts cachés',
      'Négociation intégrative',
      'Solutions créatives win-win',
      'Maximisation des gains mutuels',
    ],
  },
];

const processSteps = [
  {
    number: '01',
    icon: Compass,
    title: 'Diagnostic & Objectifs',
    description: 'Analyse approfondie de la situation, identification des parties prenantes et définition d\'objectifs clairs et mesurables.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Stratégie & Tactiques',
    description: 'Élaboration d\'une stratégie adaptée au contexte, choix des tactiques appropriées et préparation des arguments.',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Exécution & Adaptation',
    description: 'Mise en œuvre de la stratégie avec flexibilité, adaptation en temps réel et gestion des imprévus.',
  },
  {
    number: '04',
    icon: Trophy,
    title: 'Clôture & Capitalisation',
    description: 'Finalisation de l\'accord, documentation précise et capitalisation des apprentissages pour l\'avenir.',
  },
];

const principles = [
  {
    title: 'Éthique & Intégrité',
    description: 'Une négociation durable repose sur la confiance et le respect mutuel',
  },
  {
    title: 'Préparation Rigoureuse',
    description: 'Le succès se construit avant même d\'entrer dans la salle de négociation',
  },
  {
    title: 'Flexibilité Tactique',
    description: 'Restez ferme sur vos objectifs mais flexible sur les moyens de les atteindre',
  },
  {
    title: 'Création de Valeur',
    description: 'Cherchez toujours à élargir le gâteau avant de le partager',
  },
  {
    title: 'Relation Long Terme',
    description: 'Privilégiez les solutions qui renforcent la relation pour l\'avenir',
  },
  {
    title: 'Amélioration Continue',
    description: 'Chaque négociation est une opportunité d\'apprentissage et de progression',
  },
];

export function Methode() {
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
            <Compass className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              La Méthode NegoPros
            </h1>
            <p className="text-xl text-gray-200">
              Une approche structurée et éprouvée pour exceller dans toutes vos négociations
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] dark:text-white mb-4">
              Une Méthode Basée sur 15 Ans d'Expérience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Notre approche unique combine les dernières recherches en psychologie, les meilleures pratiques
              internationales et notre expérience terrain auprès de +de 100 négociations réussies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] dark:text-white mb-4">
              Les 4 Piliers de Notre Méthode
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Des fondations solides pour construire votre expertise en négociation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {methodePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-8 h-full hover:shadow-2xl transition-shadow duration-300">
                    <Icon className="w-12 h-12 text-[#2563EB] mb-4" />
                    <h3 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {pillar.description}
                    </p>
                    <ul className="space-y-2">
                      {pillar.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] dark:text-white mb-4">
              Le Processus en 4 Étapes
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Un cadre structuré pour mener vos négociations de A à Z
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 h-full text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl font-bold text-[#D4AF37] mb-4 opacity-50">
                      {step.number}
                    </div>
                    <Icon className="w-10 h-10 text-[#2563EB] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#0A2647] dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] dark:text-white mb-4">
              Nos Principes Fondamentaux
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Les valeurs qui guident notre approche de la négociation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Card className="p-6 h-full text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-lg font-bold text-[#0A2647] dark:text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {principle.description}
                  </p>
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
              Prêt à Maîtriser la Méthode NegoPros ?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Découvrez nos formations et coaching pour mettre en pratique cette méthode éprouvée
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
