import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Award, Calendar, CheckCircle, Download } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

const formations = [
  {
    id: 1,
    title: 'Négociation Achats Niveau 1',
    duration: '1 jour (7h)',
    price: '1490€ HT/personne',
    format: ['Présentiel Paris', 'Distanciel'],
    level: 'Débutant',
    participants: '6-10 participants',
    certification: false,
    objectives: [
      'Maîtriser les fondamentaux de la négociation achats',
      'Préparer efficacement une négociation fournisseurs',
      'Gérer les objections avec assurance',
      'Conclure des accords gagnant-gagnant',
    ],
    dates: ['15 mars 2025', '10 avril 2025', '22 mai 2025'],
    badges: [],
  },
  {
    id: 2,
    title: 'Techniques de Négociation Achats Avancées',
    duration: '1 jour (7h)',
    price: '2490€ HT/personne',
    format: ['Présentiel Paris', 'Distanciel'],
    level: 'Avancé',
    participants: '6-10 participants',
    certification: false,
    objectives: [
      'Maîtriser les tactiques avancées en achats',
      'Négocier des contrats complexes',
      'Gérer les situations de crise fournisseurs',
      'Négociation multi-fournisseurs',
    ],
    dates: ['5 mars 2025', '14 avril 2025', '19 juin 2025'],
    badges: [],
  },
  {
    id: 3,
    title: 'Formation Sur-Mesure Entreprise',
    duration: '1 jour (7h)',
    price: 'Sur devis',
    format: ['Présentiel', 'Distanciel', 'Blended'],
    level: 'Tous niveaux',
    participants: 'Groupe dédié',
    certification: false,
    objectives: [
      'Programme adapté à vos besoins',
      'Formation intra-entreprise',
      'Cas pratiques de votre secteur',
      'Accompagnement post-formation',
    ],
    dates: ['Dates flexibles'],
    badges: ['Sur-mesure'],
  },
  {
    id: 4,
    title: 'Négociation pour Particuliers',
    duration: '1 jour (7h)',
    price: '390€/personne',
    format: ['Présentiel Paris', 'Distanciel'],
    level: 'Débutant',
    participants: '8-12 participants',
    certification: false,
    objectives: [
      'Comprendre les bases de la négociation',
      'Négocier un achat immobilier',
      'Négocier votre salaire et conditions',
      'Résoudre les conflits familiaux',
    ],
    dates: ['20 mars 2025', '17 avril 2025', '15 mai 2025'],
    badges: ['Grand Public'],
  },
];

export const Formations = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  const filteredFormations = formations.filter((formation) => {
    if (selectedLevel && formation.level !== selectedLevel && selectedLevel !== 'Tous niveaux') return false;
    if (selectedFormat && !formation.format.includes(selectedFormat)) return false;
    return true;
  });

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-[#0A2647] to-[#2563EB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Formations</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Formez-vous aux meilleures techniques de négociation avec des programmes certifiants
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex gap-2">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center">Niveau:</span>
              {['Tous', 'Débutant', 'Intermédiaire', 'Avancé'].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level === 'Tous' ? null : level)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    (level === 'Tous' && !selectedLevel) || selectedLevel === level
                      ? 'bg-[#2563EB] text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center">Format:</span>
              {['Tous', 'Présentiel Paris', 'Distanciel'].map((format) => (
                <button
                  key={format}
                  onClick={() => setSelectedFormat(format === 'Tous' ? null : format)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    (format === 'Tous' && !selectedFormat) || selectedFormat === format
                      ? 'bg-[#2563EB] text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {format}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredFormations.map((formation, index) => (
              <motion.div
                key={formation.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-[#0A2647] to-[#2563EB] flex items-center justify-center">
                      <Award className="w-20 h-20 text-white" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{formation.level}</Badge>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4">
                      {formation.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-[#2563EB]" />
                        <span className="text-gray-600 dark:text-gray-300">{formation.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-[#2563EB]" />
                        <span className="text-gray-600 dark:text-gray-300">{formation.participants}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-3xl font-bold text-[#D4AF37] mb-2">{formation.price}</div>
                      {formation.badges.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {formation.badges.map((badge) => (
                            <Badge key={badge} variant="success">{badge}</Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-[#0A2647] dark:text-white mb-3">Objectifs:</h4>
                      <ul className="space-y-2">
                        {formation.objectives.map((objective, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-300">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-[#0A2647] dark:text-white mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Prochaines dates:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {formation.dates.map((date) => (
                          <span key={date} className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">
                            {date}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto flex flex-col sm:flex-row gap-3">
                      {formation.price !== 'Sur devis' ? (
                        <>
                          <Button className="flex-1">S'inscrire</Button>
                          <Button variant="secondary" className="flex items-center justify-center gap-2 sm:w-auto">
                            <Download className="w-4 h-4" />
                            Programme
                          </Button>
                        </>
                      ) : (
                        <Button className="w-full">Demander un devis</Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
