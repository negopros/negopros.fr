import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card } from '../ui/Card';

const testimonials = [
  {
    id: 1,
    name: 'Juan.P',
    role: 'Dirigeant',
    company: 'EZIE',
    quote: 'Grâce à NegoPros, j\'ai obtenu bien plus lors de ma négociation salariale pour le poste de CEO Asie',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: 'Délphine P',
    role: 'Entrepreneuse',
    company: 'Burger & Chicken',
    quote: 'Le Coaching en Négociation m\'a donné confiance et techniques concrètes. J\'ai économisé 40% sur l\'achat de mon fond de commerce.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    id: 3,
    name: 'Baptiste IJ',
    role: 'Dirigeant',
    company: 'AKKEY',
    quote: 'La formation des équipes aux bases de la négociation a transformé la façon de négocier des consultants en situation difficile apportant un gage de qualité à l\'entreprise',
    rating: 5,
    avatar: '👔',
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2647] dark:text-white mb-4">
            Ils Nous Font Confiance
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-12 hover:transform-none">
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl mb-6">{testimonials[currentIndex].avatar}</div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-8 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  <div>
                    <div className="font-bold text-lg text-[#0A2647] dark:text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-[#2563EB] font-semibold">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#2563EB] w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
