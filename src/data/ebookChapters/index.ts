export interface EbookChapter {
  id: string;
  title: string;
  content: string;
  sections?: EbookSection[];
}

export interface EbookSection {
  id: string;
  title: string;
}

export const ebookMetadata = {
  title: 'La Négociation pour le Dirigeant de PME',
  subtitle: 'Guide Complet et Pratique',
  description: 'Stratégies, Techniques et Outils issus des meilleures références internationales',
  authors: 'Basé sur les travaux de Roger Fisher, William Ury, Chris Voss, Robert Cialdini, Daniel Kahneman, Lionel Bellenger, Alain Pekar Lempereur et Paul Ekman',
};

export const chaptersList = [
  {
    id: 'introduction',
    title: 'Introduction - Pourquoi la négociation est cruciale pour le dirigeant de PME',
    sections: [
      { id: 'enjeux-pme', title: 'a) Les enjeux spécifiques des PME' },
      { id: 'impact-rentabilite', title: 'b) Impact sur la rentabilité et la croissance' },
    ],
  },
  {
    id: 'fondamentaux',
    title: 'Chapitre 1 - Les Fondamentaux de la Négociation',
    sections: [
      { id: 'preparation', title: 'A- Préparation : Se donner les moyens de réussir' },
      { id: 'analyser', title: 'B- Analyser : Évaluer les forces en présence' },
      { id: 'valider', title: 'C- Valider : Finaliser la stratégie' },
    ],
  },
  {
    id: 'conduite',
    title: 'Chapitre 2 - La Conduite de la Négociation',
    sections: [
      { id: 'ouverture', title: 'A- L\'ouverture : prendre le contrôle' },
      { id: 'exploration', title: 'B- L\'exploration : découvrir les intérêts' },
      { id: 'discussion', title: 'C- La discussion : négocier les conditions' },
    ],
  },
  {
    id: 'conclusion',
    title: 'Chapitre 3 - La Conclusion de la Négociation',
    sections: [
      { id: 'conclure', title: 'A- Savoir conclure au bon moment' },
      { id: 'formaliser', title: 'B- Formaliser l\'accord' },
      { id: 'debriefing', title: 'C- Le débriefing post-négociation' },
    ],
  },
  {
    id: 'techniques-avancees',
    title: 'Chapitre 4 - Techniques Avancées',
    sections: [
      { id: 'psychologie', title: 'A- Psychologie et influence' },
      { id: 'tactiques', title: 'B- Tactiques et contre-tactiques' },
      { id: 'situations-difficiles', title: 'C- Gérer les situations difficiles' },
    ],
  },
  {
    id: 'cas-pratiques',
    title: 'Chapitre 5 - Cas Pratiques PME',
    sections: [
      { id: 'cas-fournisseurs', title: 'Cas 1 : Négocier avec un fournisseur stratégique' },
      { id: 'cas-clients', title: 'Cas 2 : Défendre ses tarifs face à un gros client' },
      { id: 'cas-banque', title: 'Cas 3 : Négocier un financement bancaire' },
    ],
  },
];

// Fonction pour charger dynamiquement le contenu d'un chapitre
export async function loadChapterContent(chapterId: string): Promise<string> {
  try {
    const module = await import(`./content/${chapterId}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load chapter ${chapterId}:`, error);
    return '<p>Erreur lors du chargement du contenu.</p>';
  }
}
