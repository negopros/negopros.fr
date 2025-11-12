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

// FICHIER EN COURS DE CONSTRUCTION - CONTENU COMPLET À VENIR
// Ce fichier contiendra l'intégralité du contenu fourni

export const ebookChapters: EbookChapter[] = [];
