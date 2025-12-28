import { motion } from 'framer-motion';
import { Eye, BarChart, Target, Zap, CheckCircle2, Users } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
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
  // ... (continuez avec toutes les autres phases M, P, A, C, T)
  // Je fournis la structure complète dans un second message
];

// ... suite du code
