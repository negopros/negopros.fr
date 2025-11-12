export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "NegoPros",
  "description": "Expert en négociation stratégique - Formations, coaching et consulting en négociation pour professionnels et entreprises",
  "url": "https://negopros.fr",
  "logo": "https://negopros.fr/negopros_text_final.png",
  "image": "https://negopros.fr/hero-image.png",
  "telephone": "+33-XX-XX-XX-XX",
  "email": "contact@negopros.fr",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR",
    "addressLocality": "France"
  },
  "sameAs": [
    "https://www.linkedin.com/company/negopros",
    "https://twitter.com/negopros"
  ],
  "priceRange": "€€€",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  }
});

export const getCourseSchema = (course: {
  name: string;
  description: string;
  price: number;
  duration: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": course.name,
  "description": course.description,
  "provider": {
    "@type": "Organization",
    "name": "NegoPros",
    "url": "https://negopros.fr"
  },
  "offers": {
    "@type": "Offer",
    "price": course.price,
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  },
  "timeRequired": course.duration,
  "educationalLevel": "Professional",
  "inLanguage": "fr-FR"
});

export const getArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "datePublished": article.date,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "NegoPros",
    "logo": {
      "@type": "ImageObject",
      "url": "https://negopros.fr/negopros_text_final.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://negopros.fr"
  }
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
