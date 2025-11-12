import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Award, Clock, Video, MessageCircle, CheckCircle, Heart } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const coachingTypes = [
  {
    icon: Users,
    title: 'Coaching Individuel Acheteurs',
    description: 'Un accompagnement sur-mesure pour développer vos compétences en négociation achats',
    duration: '3-6 mois',
    sessions: '10-20 sessions',
    price: 'Sur devis',
    features: [
      'Sessions hebdomadaires ou bi-mensuelles',
      'Plan de développement personnalisé',
      'Suivi et feedback continus',
      'Accès aux ressources exclusives',
      'Support par email entre les sessions',
    ],
  },
  {
    icon: Target,
    title: 'Coaching d\'Équipe Achats',
    description: 'Développez la performance collective de votre équipe achats et procurement',
    duration: '6-12 mois',
    sessions: '15-30 sessions',
    price: 'Sur devis',
    features: [
      'Sessions de groupe interactives',
      'Exercices de cohésion d\'équipe',
      'Simulation de négociations fournisseurs réelles',
      'Analyse des performances achats collectives',
      'Création de processus standardisés',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Coaching Executive',
    description: 'Pour les dirigeants et cadres supérieurs qui négocient à haut niveau',
    duration: '6-12 mois',
    sessions: '12-24 sessions',
    price: 'Sur devis',
    features: [
      'Stratégies de négociation C-level',
      'Gestion des enjeux complexes',
      'Networking et influence',
      'Préparation aux négociations critiques',
      'Confidentialité absolue garantie',
    ],
  },
  {
    icon: Heart,
    title: 'Coaching Personnel & Développement',
    description: 'Pour particuliers souhaitant développer leurs compétences en négociation dans leur vie quotidienne',
    duration: '3-6 mois',
    sessions: '6-12 sessions',
    price: 'À partir de 150€/session',
    features: [
      'Négociations personnelles et familiales',
      'Achats importants (immobilier, véhicule)',
      'Négociation salariale et carrière',
      'Gestion des conflits relationnels',
      'Développement de l\'assertivité',
    ],
  },
  {
    icon: Target,
    title: 'Forfait Mensuel Dirigeant PME',
    description: 'Accompagnement mensuel sur-mesure pour dirigeants de PME avec coaching et sparring partner',
    duration: 'Mensuel',
    sessions: 'Formule récurrente',
    price: 'Sur devis',
    features: [
      'Coaching mensuel individuel',
      'Sparring partner pour négociations clés',
      'Préparation stratégique de vos négociations',
      'Support prioritaire par email/téléphone',
      'Débriefing après chaque négociation majeure',
    ],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Diagnostic Initial',
    description: 'Analyse de vos besoins, objectifs et défis actuels en matière de négociation',
  },
  {
    number: '02',
    title: 'Plan d\'Action',
    description: 'Élaboration d\'un programme sur-mesure adapté à vos enjeux spécifiques',
  },
  {
    number: '03',
    title: 'Sessions de Coaching',
    description: 'Accompagnement régulier avec exercices pratiques et mises en situation',
  },
  {
    number: '04',
    title: 'Suivi & Optimisation',
    description: 'Évaluation des progrès et ajustement du programme selon vos résultats',
  },
];

const modalites = [
  {
    icon: Video,
    title: 'En Visio',
    description: 'Sessions en ligne via Zoom ou Teams, flexibles et accessibles partout',
  },
  {
    icon: Users,
    title: 'En Présentiel',
    description: 'Rencontres dans nos locaux à Toulouse Nord- St Jory ou dans vos bureaux',
  },
  {
    icon: MessageCircle,
    title: 'Support Continu',
    description: 'Accès par email et messagerie entre les sessions pour vos questions urgentes',
  },
];

export function Coaching() {
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
            <Award className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Coaching en Négociation
            </h1>
            <p className="text-xl text-gray-200">
              Un accompagnement personnalisé pour transformer vos compétences et maximiser vos résultats
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] dark:text-white mb-4">
              Nos Formules de Coaching
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choisissez la formule adaptée à vos besoins et à votre rythme
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coachingTypes.map((type, index) => {
              const Icon = type.icon;
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
                      {type.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {type.description}
                    </p>

                    <div className="space-y-2 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-gray-600 dark:text-gray-300">Durée: {type.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-gray-600 dark:text-gray-300">{type.sessions}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center pt-4">
                      <div className="text-2xl font-bold text-[#D4AF37] mb-4">{type.price}</div>
                      <Button
                        variant="primary"
                        className="w-full"
                        onClick={() => window.location.href = '/contact'}
                      >
                        Demander un devis
                      </Button>
                    </div>
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
              Notre Processus de Coaching
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une méthode éprouvée en 4 étapes pour garantir votre succès
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="text-5xl font-bold text-[#D4AF37] mb-4 opacity-50">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2647] dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
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
              Modalités & Formats
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Des options flexibles pour s'adapter à votre emploi du temps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {modalites.map((modalite, index) => {
              const Icon = modalite.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 text-center h-full hover:shadow-xl transition-shadow duration-300">
                    <Icon className="w-12 h-12 text-[#2563EB] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#0A2647] dark:text-white mb-3">
                      {modalite.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {modalite.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
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
              Prêt à transformer vos négociations ?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Réservez un appel découverte gratuit de 30 minutes pour discuter de vos objectifs
            </p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0A2647] text-lg px-8 py-4"
              onClick={() => window.location.href = '/contact'}
            >
              Réserver mon appel gratuit
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
