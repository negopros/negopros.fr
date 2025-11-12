import { motion } from 'framer-motion';
import { Quote, Star, Briefcase, Building2 } from 'lucide-react';
import { Card } from '../components/ui/Card';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Martin',
    role: 'Directrice Achats',
    company: 'TechCorp France',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'La formation avec Gérard a complètement transformé ma façon de négocier avec nos fournisseurs. J\'ai réduit nos coûts de 35% en seulement 3 mois. Les techniques enseignées sont immédiatement applicables et redoutablement efficaces.',
  },
  {
    id: 2,
    name: 'Marc Dubois',
    role: 'CEO',
    company: 'StartUp Innovations',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Un accompagnement de très haute qualité. Gérard a su identifier mes points faibles et m\'a donné les outils pour les transformer en forces. Aujourd\'hui, j\'aborde chaque négociation avec confiance et sérénité.',
  },
  {
    id: 3,
    name: 'Isabelle Laurent',
    role: 'Responsable Achats',
    company: 'Global Industries',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'La méthode NegoPros est structurée, pragmatique et extrêmement efficace. J\'ai économisé plus de 500K€ sur mes négociations fournisseurs grâce aux stratégies apprises. Un investissement qui s\'est payé 10 fois.',
  },
  {
    id: 4,
    name: 'Thomas Bernard',
    role: 'Directeur Général',
    company: 'Consulting Partners',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Le coaching individuel avec Gérard a été un game-changer pour moi. Il m\'a préparé pour des négociations critiques à plusieurs millions d\'euros. Sa capacité à anticiper les réactions et à élaborer des stratégies gagnantes est impressionnante.',
  },
  {
    id: 5,
    name: 'Caroline Petit',
    role: 'Directrice Achats',
    company: 'Solutions Plus',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Formation exceptionnelle qui va bien au-delà de la théorie. Les mises en situation avec fournisseurs sont réalistes et permettent de s\'entraîner dans un environnement sécurisé. Mon équipe achats a adopté ces méthodes et nos résultats parlent d\'eux-mêmes.',
  },
  {
    id: 6,
    name: 'Alexandre Roux',
    role: 'Entrepreneur',
    company: 'Digital Ventures',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Gérard m\'a accompagné lors d\'une levée de fonds complexe. Grâce à son expertise, j\'ai négocié des conditions bien meilleures que prévu. Son approche win-win a permis de créer une relation de confiance avec nos investisseurs.',
  },
  {
    id: 7,
    name: 'Nathalie Moreau',
    role: 'DRH',
    company: 'Enterprise Solutions',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'La formation a été un investissement stratégique pour notre équipe managériale. Les outils de négociation sociale enseignés nous ont permis de résoudre des situations complexes tout en préservant le climat social.',
  },
  {
    id: 8,
    name: 'Pierre Leroy',
    role: 'Directeur Financier',
    company: 'Finance Corp',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Les techniques de négociation enseignées par Gérard sont d\'une redoutable efficacité. J\'ai pu renégocier nos conditions bancaires et obtenir des gains significatifs pour l\'entreprise. Une expertise rare et précieuse.',
  },
  {
    id: 9,
    name: 'Julie Fontaine',
    role: 'Chef de Projet',
    company: 'IT Solutions',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Formation ultra-pratique avec des résultats immédiats. J\'ai appliqué les méthodes dès la semaine suivante et j\'ai obtenu des résultats au-delà de mes espérances. Gérard est un pédagogue exceptionnel.',
  },
];

const stats = [
  { value: '95%', label: 'Taux de satisfaction' },
  { value: '4.9/5', label: 'Note moyenne' },
  { value: '+150', label: 'Professionnels formés' },
  { value: '100%', label: 'Recommanderaient' },
];

export function Temoignages() {
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
            <Quote className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Témoignages Clients
            </h1>
            <p className="text-xl text-gray-200">
              Découvrez ce que nos clients disent de leur expérience avec NegoPros
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A2647] dark:text-white">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Briefcase className="w-3 h-3" />
                        <span>{testimonial.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Building2 className="w-3 h-3" />
                        <span>{testimonial.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                      />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-[#2563EB] opacity-20 mb-2" />

                  <p className="text-gray-600 dark:text-gray-300 flex-1 italic">
                    "{testimonial.text}"
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
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Transformez vos négociations et obtenez des résultats exceptionnels
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#0A2647] transition-colors text-lg font-semibold"
              >
                Voir les formations
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-3 bg-[#D4AF37] text-[#0A2647] rounded-lg hover:bg-[#c29d2f] transition-colors text-lg font-semibold"
              >
                Nous contacter
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
