import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Users, GraduationCap, Heart, Home, TrendingUp, Crown } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const servicesB2B = [
  {
    id: 1,
    icon: Crown,
    title: 'Programme Dirigeant',
    description: 'Accompagnement exclusif pour négociations stratégiques à forts enjeux',
    link: '/contact',
    color: 'text-[#D4AF37]',
    featured: true,
  },
  {
    id: 2,
    icon: Briefcase,
    title: 'Consulting Achats',
    description: 'Accompagnement stratégique pour optimiser vos négociations fournisseurs',
    link: '/contact',
    color: 'text-[#2563EB]',
  },
  {
    id: 3,
    icon: Users,
    title: 'Coaching Acheteurs',
    description: 'Développez vos compétences en négociation achats',
    link: '/contact',
    color: 'text-[#0A2647]',
  },
  {
    id: 4,
    icon: GraduationCap,
    title: 'Formations Négociation Achats',
    description: 'Programmes de formation pour vos équipes achats',
    link: '/contact',
    color: 'text-green-600',
  },
];

const servicesB2C = [
  {
    id: 5,
    icon: Heart,
    title: 'Coaching Personnel',
    description: 'Négociations familiales, relationnelles et situations difficiles',
    link: '/reserver',
    color: 'text-pink-600',
  },
  {
    id: 6,
    icon: Home,
    title: 'Négociation Immobilière',
    description: 'Achat ou vente : obtenez le meilleur prix',
    link: '/reserver',
    color: 'text-blue-600',
  },
  {
    id: 7,
    icon: TrendingUp,
    title: 'Salaire & Carrière',
    description: 'Négociez votre rémunération et évolution professionnelle',
    link: '/reserver',
    color: 'text-emerald-600',
  },
];

export const Services = () => {
  return (
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
            Nos Services d'Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Solutions pour professionnels et particuliers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A2647] dark:text-white mb-8 text-center">
            Pour les Professionnels
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesB2B.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full p-6 flex flex-col hover:shadow-xl transition-all duration-300 ${
                  service.featured
                    ? 'border-2 border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/5 to-transparent relative'
                    : ''
                }`}>
                  {service.featured && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#D4AF37] text-white text-xs font-bold px-4 py-1 rounded-full">
                        OFFRE PREMIUM
                      </span>
                    </div>
                  )}
                  <service.icon className={`w-14 h-14 mb-4 ${service.color}`} />
                  <h3 className="text-xl font-bold text-[#0A2647] dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <Button
                      variant={service.featured ? "primary" : "secondary"}
                      size="sm"
                      className={`w-full ${service.featured ? 'bg-[#D4AF37] hover:bg-[#D4AF37]/90' : ''}`}
                    >
                      {service.featured ? 'Demander un rendez-vous' : 'Demandez votre devis'}
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A2647] dark:text-white mb-8 text-center">
            Pour les Particuliers
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {servicesB2C.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 flex flex-col hover:shadow-xl transition-shadow duration-300">
                  <service.icon className={`w-14 h-14 mb-4 ${service.color}`} />
                  <h3 className="text-xl font-bold text-[#0A2647] dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <Button variant="secondary" size="sm" className="w-full">
                      Consultation gratuite
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
