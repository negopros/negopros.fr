import { motion } from 'framer-motion';
import { Award, Target, Heart, Users, TrendingUp, Briefcase, BookOpen, Trophy } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Nous visons constamment la perfection dans nos formations et accompagnements.',
  },
  {
    icon: Heart,
    title: 'Intégrité',
    description: 'Nous croyons en une négociation éthique basée sur la confiance et le respect mutuel.',
  },
  {
    icon: Users,
    title: 'Partenariat',
    description: 'Nous construisons des relations durables avec nos clients et partenaires.',
  },
  {
    icon: TrendingUp,
    title: 'Résultats',
    description: 'Nous nous engageons sur des résultats concrets et mesurables pour nos clients.',
  },
];

const timeline = [
  {
    year: '2009',
    title: 'Les Débuts',
    description: 'Début de carrière en négociation dans les grands groupes internationaux.',
  },
  {
    year: '2015',
    title: 'Expertise Confirmée',
    description: 'Direction des négociations stratégiques pour des deals à plusieurs millions d\'euros.',
  },
  {
    year: '2020',
    title: 'Certifications Négociations Complexe - ADN GROUP',
    description: 'Validation des acquis via la certification Négociation Complexe et formation à la méthodologie PACIFICAT auprès du N°1 en France ADN Group',
  },
  {
    year: '2024',
    title: 'Création de NegoPros',
    description: 'Lancement de NegoPros pour partager mon expertise et accompagner les professionnels.',
  },
  {
    year: '2025',
    title: 'Aujourd\'hui',
    description: '+de 100 négociations réussies et des centaines de professionnels formés.',
  },
];

const stats = [
  { icon: Briefcase, value: '15+', label: 'Années d\'expérience' },
  { icon: Users, value: '+de 100', label: 'Négociations réussies' },
  { icon: Trophy, value: '95%', label: 'Taux de satisfaction' },
  { icon: BookOpen, value: '+150', label: 'Professionnels formés' },
];

export function APropos() {
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
              À Propos de NegoPros
            </h1>
            <p className="text-xl text-gray-200">
              Votre partenaire pour exceller dans l'art de la négociation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Gérard Pavez"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] dark:text-white mb-6">
                  Gérard Pavez
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Fondateur et Expert en Négociation
                </p>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Fort de 15 ans d'expérience en négociation stratégique dans les grands groupes internationaux,
                    j'ai participé à +de 100 négociations complexes représentant plusieurs millions d'euros d'enjeux.
                  </p>
                  <p>
                    J'ai créé NegoPros avec une conviction forte : la négociation est une compétence qui s'apprend
                    et se développe. Chacun peut devenir un négociateur d'excellence avec les bonnes méthodes,
                    les bons outils et un accompagnement adapté.
                  </p>
                  <p>
                    Ma mission est de partager mon expertise et mes méthodes éprouvées pour aider les professionnels
                    à transformer leurs négociations et obtenir des résultats exceptionnels.
                  </p>
                </div>
              </motion.div>
            </div>
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
              Nos Chiffres Clés
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                    <Icon className="w-10 h-10 text-[#2563EB] mx-auto mb-4" />
                    <div className="text-3xl font-bold text-[#D4AF37] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
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
              Notre Parcours
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              15 ans d'expertise au service de votre réussite
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2563EB] opacity-20" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'lg:text-right lg:pr-1/2' : 'lg:pl-1/2 lg:text-left'
                  }`}
                >
                  <div className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                    <Card className="p-6 max-w-md inline-block">
                      <div className="text-2xl font-bold text-[#D4AF37] mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2647] dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-[#2563EB] rounded-full border-4 border-white dark:border-gray-900" />
                </motion.div>
              ))}
            </div>
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
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
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
              Prêt à Transformer Vos Négociations ?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Découvrez comment nous pouvons vous aider à atteindre vos objectifs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                onClick={() => window.location.href = '/contact'}
              >
                Nous contacter
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
