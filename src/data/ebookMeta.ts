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

export const ebookMetadataAchats = {
  title: 'Guide Complet de la Négociation Achats Stratégique',
  subtitle: 'Maîtrisez les fondamentaux de la négociation achats',
  description: 'Méthodes, tactiques et outils pour les acheteurs professionnels',
  authors: 'Basé sur les travaux de Chris Voss, Daniel Kahneman, Robert Cialdini, Paul Ekman, Combalbert & Mery, et la Matrice de Kraljic',
};

export const chaptersList: Omit<EbookChapter, 'content'>[] = [
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

export const chaptersListAchats: Omit<EbookChapter, 'content'>[] = [
  {
    id: 'introduction-achats',
    title: 'Introduction - Pourquoi ce guide est indispensable pour les acheteurs',
    sections: [],
  },
  {
    id: 'fondamentaux-achats',
    title: 'Chapitre 1 : Les Fondamentaux de la Négociation Achats',
    sections: [
      { id: 'concepts-cles', title: '1.1 Les concepts clés : BATNA, ZOPA, TCO' },
      { id: 'cartographie', title: '1.2 Cartographie du rapport de force acheteur-fournisseur' },
      { id: 'objectifs', title: '1.3 Définir des objectifs réalistes et ambitieux' },
      { id: 'strategie', title: '1.4 Adapter sa stratégie selon le rapport de force' },
    ],
  },
  {
    id: 'psychologie-communication',
    title: 'Chapitre 2 : Psychologie et Communication en Négociation',
    sections: [
      { id: 'empathie-voss', title: '2.1 L\'empathie tactique de Chris Voss' },
      { id: 'biais-cognitifs', title: '2.2 Les biais cognitifs (Kahneman) et leur exploitation' },
      { id: 'influence-cialdini', title: '2.3 Les 6 leviers d\'influence de Cialdini' },
      { id: 'non-verbal-ekman', title: '2.4 Décoder le non-verbal : les micro-expressions d\'Ekman' },
    ],
  },
  {
    id: 'tactiques-avancees',
    title: 'Chapitre 3 : Tactiques Avancées et Contre-Tactiques',
    sections: [
      { id: 'tactiques-vendeurs', title: '3.1 Les tactiques classiques des vendeurs' },
      { id: 'contre-tactiques', title: '3.2 Les contre-tactiques efficaces' },
      { id: 'concessions', title: '3.3 Gérer les concessions et obtenir des contreparties' },
      { id: 'blocage', title: '3.4 Sortir des situations de blocage' },
    ],
  },
  {
    id: 'methode-pacificat',
    title: 'Chapitre 4 : La Méthode PACIFICAT (Combalbert & Mery)',
    sections: [
      { id: 'neuf-etapes', title: '4.1 Les 9 étapes en détail' },
      { id: 'application-achats', title: '4.2 Application dans un contexte achats' },
    ],
  },
  {
    id: 'matrice-kraljic',
    title: 'Chapitre 5 : Négocier selon la Matrice de Kraljic',
    sections: [
      { id: 'produits-strategiques', title: '5.1 Produits stratégiques : partenariat et co-innovation' },
      { id: 'produits-goulot', title: '5.2 Produits goulot d\'étranglement : sécuriser l\'approvisionnement' },
      { id: 'produits-levier', title: '5.3 Produits à effet de levier : optimiser les prix' },
      { id: 'produits-simples', title: '5.4 Produits simples : automatiser et simplifier' },
    ],
  },
  {
    id: 'cas-pratiques-achats',
    title: 'Chapitre 6 : Cas Pratiques et Simulations',
    sections: [
      { id: 'cas-renegociation', title: '6.1 Cas 1 : Renégociation avec un fournisseur stratégique' },
      { id: 'cas-position-force', title: '6.2 Cas 2 : Négociation avec un fournisseur en position de force' },
      { id: 'cas-appel-offres', title: '6.3 Cas 3 : Appel d\'offres et négociation finale' },
      { id: 'exercices', title: '6.4 Exercices d\'entraînement' },
    ],
  },
  {
    id: 'conclusion-achats',
    title: 'Conclusion - Devenir un négociateur d\'élite',
    sections: [],
  },
];

// Charger dynamiquement le contenu complet depuis ebookContent
export async function loadChapter(chapterId: string): Promise<EbookChapter | null> {
  try {
    const { ebookChapters } = await import('./ebookContent');
    return ebookChapters.find(ch => ch.id === chapterId) || null;
  } catch (error) {
    console.error(`Failed to load chapter ${chapterId}:`, error);
    return null;
  }
}
