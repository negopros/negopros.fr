import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const DEFAULT_SEO = {
  title: 'NegoPros - Expert en Négociation Stratégique | Formation & Coaching',
  description: 'Expert en négociation stratégique depuis 15 ans. Formations, coaching personnalisé et consulting pour professionnels et entreprises. Méthode éprouvée avec résultats mesurables. Devenez un négociateur performant.',
  keywords: 'négociation professionnelle, formation négociation entreprise, coaching négociation stratégique, expert négociateur, techniques de négociation avancées, formation négociation commerciale, négociation achats, consulting négociation, stratégie de négociation, compétences négociation',
  ogImage: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ogType: 'website',
};

export const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogType,
  structuredData
}: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = title ? `${title} | NegoPros` : DEFAULT_SEO.title;
    document.title = pageTitle;

    const metaDescription = description || DEFAULT_SEO.description;
    const metaKeywords = keywords || DEFAULT_SEO.keywords;
    const metaOgImage = ogImage || DEFAULT_SEO.ogImage;
    const metaOgType = ogType || DEFAULT_SEO.ogType;

    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    updateMetaTag('description', metaDescription);
    updateMetaTag('keywords', metaKeywords);

    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', metaDescription, true);
    updateMetaTag('og:image', metaOgImage.startsWith('http') ? metaOgImage : `https://negopros.fr${metaOgImage}`, true);
    updateMetaTag('og:type', metaOgType, true);
    updateMetaTag('og:url', `https://negopros.fr${location.pathname}`, true);
    updateMetaTag('og:site_name', 'NegoPros', true);
    updateMetaTag('og:locale', 'fr_FR', true);

    updateMetaTag('twitter:card', 'summary_large_image', false);
    updateMetaTag('twitter:title', pageTitle, false);
    updateMetaTag('twitter:description', metaDescription, false);
    updateMetaTag('twitter:image', metaOgImage.startsWith('http') ? metaOgImage : `https://negopros.fr${metaOgImage}`, false);
    updateMetaTag('twitter:site', '@NegoPros', false);

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    if (!canonicalLink.parentElement) {
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://negopros.fr${location.pathname}`);

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredData) {
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else if (structuredDataScript) {
      structuredDataScript.remove();
    }
  }, [title, description, keywords, ogImage, ogType, structuredData, location]);

  return null;
};
