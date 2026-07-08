import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BedDouble, Users, Calendar, Star } from 'lucide-react';
import { useIntersectionObserver, useCountUp } from '../../hooks/useUtils';
import { stats } from '../../data/facilities';

const iconMap = {
  BedDouble,
  Users,
  Calendar,
  Star,
};

function StatCounter({ value, suffix, label, icon, start, scrollYProgress }: {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  start: boolean;
  scrollYProgress: any;
}) {
  const count = useCountUp(value, 2000, start);
  const Icon = iconMap[icon as keyof typeof iconMap] || Star;

  // Animate single cards scale and rotation based on parent scroll progress
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -20]);

  return (
    <motion.div
      style={{ scale: cardScale, y: cardY }}
      className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-base-100/50 backdrop-blur-sm border border-base-300/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <Icon size={28} className="text-primary" />
      </div>
      <div className="text-center">
        <p className="text-4xl font-black text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {value % 1 !== 0 ? value.toFixed(1) : count}{suffix}
        </p>
        <p className="text-sm text-base-content/60 font-medium mt-1">{label}</p>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setRef, isVisible } = useIntersectionObserver(0.2);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Combine ref for intersection observer and section reference
  const combineRef = (el: HTMLDivElement | null) => {
    (sectionRef as any).current = el;
    setRef(el);
  };

  return (
    <section ref={combineRef} className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-12"
        >
          <span className="badge badge-primary badge-outline mb-3">Pencapaian Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Dipercaya Ratusan{' '}
            <span className="text-primary">Penghuni</span>
          </h2>
          <p className="text-base-content/60 mt-3 max-w-lg mx-auto">
            Selama 8+ tahun, kami terus menjaga kepercayaan dan kepuasan setiap penghuni Griya Matahari
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              start={isVisible}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
