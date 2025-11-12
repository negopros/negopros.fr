import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  end: number;
  suffix?: string;
  label: string;
  prefix?: string;
}

const StatItem = ({ end, suffix = '', label, prefix = '' }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-[#0A2647] dark:text-[#D4AF37] mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-600 dark:text-gray-300 text-lg">{label}</div>
    </motion.div>
  );
};

export const Stats = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <StatItem end={100} prefix="+de " label="Négociations réussies" />
          <StatItem end={95} suffix="%" label="Taux de satisfaction" />
          <StatItem end={150} prefix="+" label="Professionnels formés" />
          <StatItem end={15} suffix=" ans" label="D'expérience" />
        </div>
      </div>
    </section>
  );
};
