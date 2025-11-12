import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Users, GraduationCap, Scale, ArrowRight, Heart, Home, TrendingUp, UserCheck, HandshakeIcon } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const servicesB2B = [
  {
    id: 1,
    icon: Briefcase,
    title: 'Consulting en négociation achats',
    description: 'Accompagnement stratégique pour vos négociations fournisseurs critiques. Préparation, simulation, pilotage en temps réel.',
    features: [
      'Analyse et préparation approfondie',
      'Stratégie de négociation fournisseurs sur-mesure',
      'Simulation et jeux de rôle',
      'Accompagnement pendant la négociation',
    ],
    link: '/contact',
    color: 'from-[#2563EB] to-[#0A2647]',
  },
  {
    id: 2,
    icon: Users,
    title: 'Coaching acheteurs',
    description: 'Développement personnalisé de vos compétences en négociation achats avec un expert dédié.',
    features: [
      'Diagnostic de votre style de négociation',
      'Plan de développement personnalisé acheteurs',
      'Séances individuelles régulières',
      'Suivi et feedback continu',
    ],
    link: '/contact',
    color: 'from-[#D4AF37] to-[#0A2647]',
  },
  {
    id: 3,
    icon: GraduationCap,
    title: 'Formations Négociation Achats',
    description: 'Programmes de formation complets pour vos équipes achats.',
    features: [
      'Formations inter et intra-entreprise',
      'Simulation et jeux de rôle',
      'Cas pratique',
      'Méthodologie, outils et techniques de Négociations',
      'Support post-formation',
    ],
    link: '/contact',
    color: 'from-green-600 to-[#0A2647]',
  },
  {
    id: 4,
    icon: Scale,
    title: 'Intervenant Entreprises / Ecoles / Associations',
    description: 'Intervenant expert en négociation pour vos événements et cours pratiques dans vos établissements.',
    features: [
      'Conférences et ateliers sur-mesure',
      'Cours pratiques de négociation',
      'Animation d\'événements professionnels',
      'Formation d\'étudiants et collaborateurs',
    ],
    link: '/contact',
    color: 'from-orange-600 to-[#0A2647]',
  },
  {
    id: 5,
    icon: HandshakeIcon,
    title: 'Sparring Partner pour Dirigeants de PME',
    description: 'Coaching et accompagnement personnalisé des dirigeants de PME pour leurs négociations stratégiques et leur développement commercial.',
    features: [
      'Coaching individuel pour dirigeants',
      'Accompagnement négociations clients et partenaires',
      'Développement de votre posture de négociateur',
      'Séances régulières et suivi personnalisé',
    ],
    link: '/contact',
    color: 'from-indigo-600 to-[#0A2647]',
  },
];

const servicesB2C = [
  {
    id: 6,
    icon: Heart,
    title: 'Coaching personnel en négociation',
    description: 'Accompagnement individuel pour développer vos compétences en négociation dans tous les aspects de votre vie.',
    features: [
      'Négociations familiales et personnelles',
      'Conflits relationnels',
      'Gestion des situations difficiles',
      'Confiance en soi et assertivité',
    ],
    link: '/reserver',
    color: 'from-pink-600 to-[#0A2647]',
  },
  {
    id: 7,
    icon: Home,
    title: 'Négociation immobilière',
    description: 'Préparez et réussissez vos négociations d\'achat ou de vente immobilière.',
    features: [
      'Stratégie d\'achat immobilier',
      'Négociation du prix',
      'Gestion des offres et contre-offres',
      'Accompagnement jusqu\'à la signature',
    ],
    link: '/reserver',
    color: 'from-blue-600 to-[#0A2647]',
  },
  {
    id: 8,
    icon: TrendingUp,
    title: 'Négociation salariale & carrière',
    description: 'Obtenez la rémunération et les conditions que vous méritez.',
    features: [
      'Préparation entretien salarial',
      'Arguments et justifications',
      'Fondamentaux de la négociation',
    ],
    link: '/reserver',
    color: 'from-emerald-600 to-[#0A2647]',
  },
  {
    id: 9,
    icon: UserCheck,
    title: 'Formations grand public',
    description: 'Formations accessibles pour développer vos compétences en négociation au quotidien.',
    features: [
      'Fondamentaux de la négociation',
      'Communication assertive',
      'Gestion des conflits',
      'Ateliers pratiques en petits groupes',
    ],
    link: '/reserver',
    color: 'from-purple-600 to-[#0A2647]',
  },
];

export const Services = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-[#0A2647] to-[#2563EB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Des solutions complètes pour exceller dans toutes vos négociations, professionnelles et personnelles
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] dark:text-white mb-4">
              Services Professionnels B2B
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Accompagnement des entreprises et professionnels des achats
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {servicesB2B.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ArrowRight className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button className="w-full" size="lg">
                        {service.id === 5 ? 'Réserver un entretien découverte' : 'Demandez votre devis'}
                      </Button>
                    </Link>
                  </div>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] dark:text-white mb-4">
              Services Particuliers B2C
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Coaching et formations pour toutes vos négociations personnelles
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {servicesB2C.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ArrowRight className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button className="w-full" size="lg">
                        Consultation gratuite
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#0A2647] dark:text-white mb-6">
              Pas sûr du service adapté à vos besoins ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Échangeons 30 minutes pour identifier la meilleure solution pour vous
            </p>
            <Link to="/reserver">
              <Button size="lg">Réserver une consultation gratuite</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
