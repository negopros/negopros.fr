export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar?: string;
  logo?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Formation {
  id: string;
  title: string;
  duration: string;
  price: string;
  format: string[];
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  participants: string;
  certification: boolean;
  objectives: string[];
  dates: string[];
  badges?: string[];
}

export interface Ebook {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  pages: number;
  rating: number;
  reviews: number;
  cover: string;
  description: string;
  bestseller?: boolean;
  bonus?: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  date: string;
  readTime: string;
  featuredImage: string;
}

export interface CoachingPackage {
  id: string;
  title: string;
  price: string;
  duration: string;
  sessions: string;
  features: string[];
  highlight?: boolean;
}
