import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, BarChart, Target, Zap, CheckCircle2, Users, Lock } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { LeadCaptureModal } from '../components/ui/LeadCaptureModal';
import { Link } from 'react-router-dom';

const impactPhases = [
  {
    letter: 'I',
    title: 'IDENTIFIER',
    icon: Eye,
    color: '#D4AF37',
    description: 'Analyse préliminaire des acteurs et contextes',
    components: [
      {
        icon: '🧠',
        code: 'E',
        title: 'ÉMOTIONS',
        points: [
          'Identifier les émotions en jeu (peur, colère, joie, tristesse)',
          'Comprendre l\'état émotionnel de chaque partie',
          'Anticiper les réactions émotionnelles potentielles',
        ],
      },
      {
        icon: '⚠️',
        code: 'B',
        title: 'BIAIS COGNITIFS',
        points: [
          'Biais de confirmation',
          'Effet d\'ancrage',
          'Biais d\'optimisme/pessimisme',
          'Effet de halo',
        ],
      },
      {
        icon: '💡',
        code: 'M',
        title: 'MOTIVATIONS DE CHACUN',
        points: [
          'Besoins explicites et implicites',
          'Intérêts personnels vs professionnels',
          'Objectifs à court et long terme',
        ],
      },
      {
        icon: '🤝',
        code: 'C',
        title: 'MOTIVATIONS COMMUNES',
        points: [
          'Zones d\'intérêt partagé',
          'Bénéfices mutuels potentiels',
          'Objectifs convergents',
        ],
      },
      {
        icon: '👥',
        code: 'A',
        title: 'ACTEURS & SOCIOGRAMME',
        points: [
          'Identification de tous les acteurs',
          'Analyse des profils (décideurs, influenceurs)',
          'Cartographie des relations et influences',
          'Sociogramme des liens et dynamiques',
        ],
      },
      {
        icon: '📋',
        code: 'M',
        title: 'MANDAT & AXES',
        points: [
          'Définition du mandat avec le décisionnaire',
          'Liste exhaustive des axes de négociation',
          'Hiérarchisation des priorités',
          'Limites et contraintes',
        ],
      },
    ],
  },
  {
    letter: 'M',
    title: 'MESURER',
    icon: BarChart,
    color: '#4A90E2',
    description: 'Évaluation quantitative des rapports de force',
    components: [
      {
        icon: '🌍',
        code: 'C',
        title: 'CONTEXTE',
        points: [
          'Environnement économique et sectoriel',
          'Conjoncture du marché',
          'Facteurs externes influençants',
          'Contexte temporel et urgences',
        ],
      },
      {
        icon: '📊',
        code: 'M',
        title: 'MANDAT & POINTS',
        intro: 'Pour chaque axe de négociation :',
        points: [
          'POINT D\'ANNONCE : Position de départ publique',
          'POINT DE MIRE : Objectif réaliste visé',
          'POINT DE RUPTURE : Limite de non-négociation',
        ],
      },
      {
        icon: '⚖️',
        code: 'R',
        title: 'RAPPORT DE FORCE',
        points: [
          'Évaluation du pouvoir de négociation',
          'Dépendance mutuelle',
          'Alternatives disponibles (BATNA)',
          'Capacité d\'influence',
        ],
      },
      {
        icon: '🎯',
        code: 'I',
        title: 'INTÉRÊTS & ATTRACTIVITÉ',
        points: [
          'Intérêt à aboutir : Motivation à conclure',
          'Confiance : Niveau de confiance établi',
          'Attractivité : Valeur perçue de l\'offre',
          'Interchangeabilité : Facilité à trouver alternative',
        ],
      },
    ],
  },
  {
    letter: 'P',
    title: 'PRÉPARER',
    icon: Target,
    color: '#D4AF37',
    description: 'Élaboration de la stratégie et des tactiques',
    components: [
      {
        icon: '🎯',
        code: 'S',
        title: 'STRATÉGIE GLOBALE',
        intro: 'Choisir l\'approche adaptée :',
        points: [
          'COMPÉTITIVE : Maximiser ses gains (gagnant-perdant)',
          'COOPÉRATIVE : Solution optimale pour tous (gagnant-gagnant)',
          '"COOPÉTITIVE" : Mix stratégique selon les axes',
        ],
      },
      {
        icon: '🛠️',
        code: 'T',
        title: 'TACTIQUES & TECHNIQUES',
        points: [
          'Techniques d\'influence et de persuasion',
          'Gestion des objections',
          'Techniques de questionnement',
          'Utilisation du silence',
          'Ancrage et recadrage',
          'Techniques de désamorçage',
        ],
      },
      {
        icon: '💱',
        code: 'C',
        title: 'CONCESSIONS & CONTREPARTIES',
        intro: 'Pour chaque axe :',
        points: [
          'Liste des concessions possibles',
          'Valeur de chaque concession (pour soi / pour l\'autre)',
          'Contreparties attendues',
          'Stratégie d\'échange équitable',
        ],
      },
      {
        icon: '⏱️',
        code: 'P',
        title: 'PHASAGE & ORGANISATION',
        points: [
          'Découpage de la négociation en phases',
          'Ordre de traitement des sujets',
          'Gestion du temps et du rythme',
          'Planification des pauses stratégiques',
          'Points de résistance et moments clés',
        ],
      },
    ],
  },
  {
    letter: 'A',
    title: 'AGIR',
    icon: Zap,
    color: '#4A90E2',
    description: 'Exécution et adaptation en négociation',
    components: [
      {
        icon: '🔍',
        code: 'R',
        title: 'RENSEIGNEMENT',
        points: [
          'Collecter le maximum d\'informations en temps réel',
          'Poser des questions ouvertes',
          'Explorer les zones d\'ombre',
          'Valider les hypothèses de préparation',
        ],
      },
      {
        icon: '👁️',
        code: 'L',
        title: 'LECTURE COMPORTEMENTALE',
        points: [
          'Observation du langage non-verbal',
          'Détection des micro-expressions',
          'Analyse des signaux de stress ou confort',
          'Identification des patterns comportementaux',
        ],
      },
      {
        icon: '👂',
        code: 'E',
        title: 'ÉCOUTE ACTIVE & TLS',
        intro: 'ÉCOUTE ACTIVE : Reformulation, validation, empathie',
        subIntro: 'TLS (Tactical Listening Skills) :',
        points: [
          'Écoute des mots clés',
          'Identification des priorités cachées',
          'Détection des non-dits',
          'Compréhension des enjeux sous-jacents',
        ],
      },
      {
        icon: '❓',
        code: 'Q',
        title: 'QUESTIONNEMENT STRATÉGIQUE',
        points: [
          'Questions ouvertes pour explorer',
          'Questions fermées pour valider',
          'Questions alternatives pour orienter',
          'Questions de projection pour tester',
          'Entonnoir de questionnement',
        ],
      },
      {
        icon: '⚠️',
        code: 'G',
        title: 'GESTION DES MENACES',
        points: [
          'Identifier la nature réelle de la menace',
          'Ne pas céder à la pression émotionnelle',
          'Technique du "quoi d\'autre ?"',
          'Reformulation et désescalade',
          'Appel aux intérêts communs',
        ],
      },
      {
        icon: '😤',
        code: 'C',
        title: 'PERSONNES DIFFICILES',
        points: [
          'Identifier le type de personnalité difficile',
          'Techniques de désarmement',
          'Maintien du calme et professionnalisme',
          'Recadrage positif',
          'Savoir prendre du recul et temporiser',
        ],
      },
    ],
  },
  {
    letter: 'C',
    title: 'CONCLURE',
    icon: CheckCircle2,
    color: '#D4AF37',
    description: 'Finalisation et validation des accords',
    components: [
      {
        icon: '🔥',
        code: 'D',
        title: 'DEBRIEFING',
        intro: 'À CHAUD : Immédiatement après',
        points: [
          'Ressentis et émotions',
          'Points positifs et négatifs',
          'Ajustements immédiats nécessaires',
        ],
        subIntro: 'À FROID : 24-48h après',
        subPoints: [
          'Analyse objective des résultats',
          'Comparaison avec les objectifs',
          'Identification des apprentissages',
        ],
      },
      {
        icon: '✅',
        code: 'V',
        title: 'VALIDATION DU MANDAT',
        points: [
          'Vérification de chaque axe de négociation',
          'Comparaison résultats vs objectifs',
          'Validation du respect du mandat',
          'Feuille de route des actions à venir',
        ],
      },
      {
        icon: '⚠️',
        code: 'B',
        title: 'BIAIS DE DÉCISION',
        intro: 'Attention aux biais lors de la finalisation :',
        points: [
          'Biais d\'engagement (escalade)',
          'Effet de dotation (survalorisation)',
          'Aversion à la perte',
          'Biais de récence',
        ],
      },
      {
        icon: '📝',
        code: 'C',
        title: 'CONTRACTUALISATION',
        points: [
          'Rédaction claire et précise des accords',
          'Vérification juridique',
          'Clauses de sauvegarde et conditions',
          'Signatures et validations officielles',
          'Archivage sécurisé',
        ],
      },
      {
        icon: '📈',
        code: 'S',
        title: 'SUIVI & RÉALISATION',
        points: [
          'Mise en place d\'indicateurs de suivi',
          'Planification des points de contrôle',
          'Gestion des écarts éventuels',
          'Communication régulière entre parties',
          'Ajustements si nécessaire',
        ],
      },
    ],
  },
  {
    letter: 'T',
    title: 'TRANSMETTRE',
    icon: Users,
    color: '#4A90E2',
    description: 'Capitalisation et formation des équipes',
    components: [
      {
        icon: '🧠',
        code: 'I',
        title: 'INTELLIGENCE COLLECTIVE',
        points: [
          'Créer une base de connaissances partagée',
          'Documenter les meilleures pratiques',
          'Organiser des retours d\'expérience (REX)',
          'Partager les cas d\'école',
          'Développer une culture de la négociation',
        ],
      },
      {
        icon: '👥',
        code: 'T',
        title: 'INTÉGRATION DE LA TEAM',
        points: [
          'Sensibiliser l\'équipe aux concepts',
          'Faire comprendre l\'importance de chaque phase',
          'Impliquer chacun selon son rôle',
          'Créer un langage commun',
          'Développer l\'esprit d\'équipe négociateur',
        ],
      },
      {
        icon: '🎓',
        code: 'F',
        title: 'FORMATION DES ÉQUIPES',
        points: [
          'Programmes de formation adaptés par niveau',
          'Ateliers pratiques et mises en situation',
          'Coaching individuel et collectif',
          'Certifications internes',
          'Formation continue et recyclage',
        ],
      },
      {
        icon: '📋',
        code: 'P',
        title: 'PROCÉDURES & MÉTHODOLOGIE',
        points: [
          'Adapter IMPACT au contexte de l\'entreprise',
          'Créer des outils et templates',
          'Définir les processus de validation',
          'Établir les règles de gouvernance',
          'Mesurer et optimiser continuellement',
        ],
      },
    ],
  },
];

const benefits = [
  {
    icon: '✅',
    title: 'STRUCTURATION',
    points: [
      'Approche systématique et reproductible',
      'Réduction de l\'improvisation risquée',
      'Cadre méthodologique rassurant',
    ],
  },
  {
    icon: '📊',
    title: 'MESURABILITÉ',
    points: [
      'Objectifs quantifiables',
      'Résultats mesurables et traçables',
      'ROI démontrable',
    ],
  },
  {
    icon: '🎯',
    title: 'EFFICACITÉ',
    points: [
      'Préparation optimale = meilleurs résultats',
      'Temps de négociation réduit',
      'Taux de succès amélioré',
    ],
  },
  {
    icon: '🧠',
    title: 'PROFESSIONNALISATION',
    points: [
      'Montée en compétence des équipes',
      'Crédibilité renforcée',
      'Culture de la négociation installée',
    ],
  },
  {
    icon: '🤝',
    title: 'RELATIONS DURABLES',
    points: [
      'Approche équilibrée (win-win possible)',
      'Confiance construite sur la méthode',
      'Partenariats pérennisés',
    ],
  },
  {
    icon: '💼',
    title: 'AVANTAGE CONCURRENTIEL',
    points: [
      'Différenciation par l\'expertise',
      'Maîtrise des situations complexes',
      'Réputation d\'excellence',
    ],
  },
];

const implementation = [
  {
    number: '1',
    title: 'DIAGNOSTIC',
    duration: 'Semaine 1-2',
    points: [
      'Audit des pratiques actuelles',
      'Identification des besoins spécifiques',
      'Définition des objectifs',
    ],
  },
  {
    number: '2',
    title: 'ADAPTATION',
    duration: 'Semaine 3-4',
    points: [
      'Personnalisation de la méthodologie',
      'Création des outils et templates',
      'Formation des formateurs internes',
    ],
  },
  {
    number: '3',
    title: 'PILOTE',
    duration: 'Mois 2',
    points: [
      'Test sur négociations sélectionnées',
      'Accompagnement rapproché',
      'Ajustements méthodologiques',
    ],
  },
  {
    number: '4',
    title: 'FORMATION',
    duration: 'Mois 3-4',
    points: [
      'Formation de toutes les équipes',
      'Ateliers pratiques et simulations',
      'Certification des négociateurs',
    ],
  },
  {
    number: '5',
    title: 'DÉPLOIEMENT',
    duration: 'Mois 5-6',
    points: [
      'Généralisation à toute l\'organisation',
      'Support continu',
      'Mesure des premiers résultats',
    ],
  },
  {
    number: '6',
    title: 'OPTIMISATION',
    duration: 'Mois 6+',
    points: [
      'Analyse des performances',
      'Amélioration continue',
      'Partage des best practices',
    ],
  },
];

export function Methode() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem('methode_impact_unlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlockSuccess = () => {
    localStorage.setItem('methode_impact_unlocked', 'true');
    setIsUnlocked(true);
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1A3B5C] via-[#2C5F8D] to-[#1A3B5C] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              MÉTHODOLOGIE <span className="text-[#D4AF37]">IMPACT</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Framework Stratégique de Négociation
            </p>
            <p className="text-lg text-gray-300 mb-10">
              Un processus en 6 phases pour une négociation structurée et efficace
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A3B5C]"
                onClick={() => setIsModalOpen(true)}
              >
                Découvrir la méthode complète
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-4xl text-white/50">↓</div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              LES 6 PHASES IMPACT
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Un processus structuré pour maximiser vos résultats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {impactPhases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-[#D4AF37]/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-white"
                        style={{ backgroundColor: phase.color }}
                      >
                        {phase.letter}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                    <Icon className="w-8 h-8 mb-3" style={{ color: phase.color }} />
                    <p className="text-gray-600 dark:text-gray-300">
                      {phase.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {!isUnlocked ? (
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative bg-gradient-to-br from-[#1A3B5C] to-[#2C5F8D] rounded-3xl p-12 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

                <div className="relative text-center text-white">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D4AF37] rounded-full mb-6">
                    <Lock className="w-10 h-10 text-[#1A3B5C]" />
                  </div>

                  <h2 className="text-4xl font-bold mb-4">
                    Accédez à la méthode IMPACT complète
                  </h2>

                  <p className="text-xl text-gray-200 mb-8">
                    Découvrez en détail les 6 phases de la méthodologie IMPACT,
                    leurs composantes et comment les appliquer dans vos négociations.
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">
                      Ce que vous allez découvrir :
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                        <span>Les 6 composantes détaillées de chaque phase IMPACT</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                        <span>Des outils pratiques et méthodologies éprouvées</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                        <span>Le processus cyclique et continu d'IMPACT</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                        <span>Les bénéfices concrets pour votre organisation</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A3B5C] text-lg px-8 py-6"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Déverrouiller la méthode complète
                  </Button>

                  <p className="mt-6 text-sm text-gray-300">
                    Accès gratuit et immédiat après inscription
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <>
          {/* Detailed Phases */}
          {impactPhases.map((phase, phaseIndex) => {
        return (
          <section
            key={phaseIndex}
            className={`py-20 ${
              phaseIndex % 2 === 0
                ? 'bg-gradient-to-br from-[#1A3B5C] to-[#2C5F8D] text-white'
                : 'bg-gray-50 dark:bg-gray-900'
            }`}
          >
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-xl"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.letter}
                  </div>
                  <div>
                    <div
                      className="text-sm font-bold mb-1"
                      style={{
                        color: phaseIndex % 2 === 0 ? '#D4AF37' : phase.color,
                      }}
                    >
                      PHASE {String(phaseIndex + 1).padStart(2, '0')}
                    </div>
                    <h2
                      className={`text-4xl font-bold ${
                        phaseIndex % 2 === 0
                          ? 'text-white'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {phase.title}
                    </h2>
                    <p
                      className={`text-lg mt-2 ${
                        phaseIndex % 2 === 0
                          ? 'text-gray-200'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {phase.description}
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {phase.components.map((component, compIndex) => (
                  <motion.div
                    key={compIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: compIndex * 0.1 }}
                  >
                    <Card
                      className={`p-6 h-full ${
                        phaseIndex % 2 === 0
                          ? 'bg-white/10 backdrop-blur-sm border-white/20'
                          : 'bg-white dark:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="text-3xl">{component.icon}</div>
                        <div className="flex-1">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white mb-2"
                            style={{ backgroundColor: phase.color }}
                          >
                            {component.code}
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${
                              phaseIndex % 2 === 0
                                ? 'text-white'
                                : 'text-gray-900 dark:text-white'
                            }`}
                          >
                            {component.title}
                          </h3>
                        </div>
                      </div>

                      {component.intro && (
                        <p
                          className={`text-sm font-semibold mb-3 ${
                            phaseIndex % 2 === 0
                              ? 'text-gray-200'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {component.intro}
                        </p>
                      )}

                      <ul className="space-y-2">
                        {component.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className={`text-sm flex items-start gap-2 ${
                              phaseIndex % 2 === 0
                                ? 'text-gray-200'
                                : 'text-gray-600 dark:text-gray-300'
                            }`}
                          >
                            <span style={{ color: phase.color }}>•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {component.subIntro && (
                        <>
                          <p
                            className={`text-sm font-semibold mt-4 mb-2 ${
                              phaseIndex % 2 === 0
                                ? 'text-gray-200'
                                : 'text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            {component.subIntro}
                          </p>
                          {'subPoints' in component && component.subPoints && (
                            <ul className="space-y-2">
                              {component.subPoints.map((point: string, pointIndex: number) => (
                                <li
                                  key={pointIndex}
                                  className={`text-sm flex items-start gap-2 ${
                                    phaseIndex % 2 === 0
                                      ? 'text-gray-200'
                                      : 'text-gray-600 dark:text-gray-300'
                                  }`}
                                >
                                  <span style={{ color: phase.color }}>•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Cyclical Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#2C5F8D] to-[#1A3B5C] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">IMPACT : UN PROCESSUS CONTINU</h2>
            <p className="text-xl text-gray-200">
              La méthodologie IMPACT n'est pas linéaire mais cyclique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-md">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#1A3B5C] text-2xl font-bold shadow-2xl">
                    IMPACT
                  </div>
                </div>
                {impactPhases.map((phase, index) => {
                  const angle = (index * 60 - 90) * (Math.PI / 180);
                  const radius = 140;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl"
                      style={{
                        backgroundColor: phase.color,
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      {phase.letter}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">
                  🔄 AMÉLIORATION CONTINUE
                </h3>
                <p className="text-gray-200 mb-4">
                  Chaque négociation nourrit la suivante :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-200">
                    <span className="text-[#D4AF37]">•</span>
                    <span>Les apprentissages de TRANSMETTRE enrichissent IDENTIFIER</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-200">
                    <span className="text-[#D4AF37]">•</span>
                    <span>Le feedback améliore la PRÉPARATION future</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-200">
                    <span className="text-[#D4AF37]">•</span>
                    <span>L'expérience affine la MESURE des rapports de force</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-200">
                    <span className="text-[#D4AF37]">•</span>
                    <span>La pratique optimise l'ACTION</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">
                  📊 CAPITALISATION
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-200">
                    <span className="text-[#D4AF37]">•</span>
                    <span>Base de données de négociations</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-200">
                    <span className="text-[#D4AF37]">•</span>
                    <span>Historique des succès et échecs</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-200">
                    <span className="text-[#D4AF37]">•</span>
                    <span>Évolution des compétences</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-200">
                    <span className="text-[#D4AF37]">•</span>
                    <span>Optimisation méthodologique</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              POURQUOI ADOPTER LA MÉTHODOLOGIE IMPACT ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-[#D4AF37]/50">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-2">
                    {benefit.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-sm flex items-start gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-[#D4AF37]">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-gradient-to-br from-[#1A3B5C] to-[#2C5F8D] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              DÉPLOYER IMPACT DANS VOTRE ORGANISATION
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {implementation.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#1A3B5C] text-2xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <span className="text-sm text-[#D4AF37] font-semibold">
                          {step.duration}
                        </span>
                      </div>
                      <ul className="space-y-2 mt-4">
                        {step.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-2 text-gray-200">
                            <span className="text-[#D4AF37]">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        </>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <img
                src="/negopros_text_final.png"
                alt="Nego Pros Consulting"
                className="h-16 mx-auto mb-8"
              />
            </div>

            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              PASSEZ À L'ACTION AVEC IMPACT
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              La négociation n'est plus une compétence intuitive,
            </p>
            <p className="text-2xl font-bold text-[#D4AF37] mb-8">
              c'est une science maîtrisable.
            </p>

            <div className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-xl p-6 mb-12">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                🎯 IMPACT transforme vos négociateurs en professionnels stratégiques
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              PRÊT À TRANSFORMER VOS NÉGOCIATIONS ?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">📞</div>
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Prenez rendez-vous</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">pour un diagnostic gratuit</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">💼</div>
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Découvrez comment IMPACT</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">peut révolutionner vos pratiques</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Formez vos équipes</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">à l'excellence négociale</p>
              </Card>
            </div>

            <Link to="/contact">
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#1A3B5C] text-lg px-8 py-6">
                Contactez-nous maintenant
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        leadSource="methode_impact"
        leadType="information"
        title="Déverrouiller la méthode IMPACT complète"
        description="Entrez votre email pour accéder instantanément au contenu détaillé de la méthodologie IMPACT et découvrir comment transformer vos négociations."
        buttonText="Accéder au contenu complet"
        onSuccess={handleUnlockSuccess}
      />
    </div>
  );
}
