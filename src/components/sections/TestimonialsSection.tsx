import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-20 bg-base-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge badge-primary badge-outline mb-3">Kata Mereka</span>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Penghuni Kami{' '}
            <span className="text-primary">Berkata</span>
          </h2>
          <p className="text-base-content/60 mt-3 max-w-lg mx-auto">
            Ribuan penghuni telah mempercayakan tempat tinggal mereka kepada kami
          </p>
        </motion.div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="card bg-base-100 shadow-xl border border-base-300/50 p-8 md:p-12"
              >
                {/* Quote icon */}
                <Quote size={48} className="text-primary/20 mb-6" />

                {/* Review */}
                <p className="text-lg md:text-xl text-base-content/80 leading-relaxed italic mb-8">
                  "{t.review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-14 h-14 rounded-full ring-2 ring-primary/30">
                      <img src={t.avatar} alt={t.name} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>{t.name}</p>
                    <p className="text-sm text-base-content/60">{t.occupation}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-0.5 justify-end">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < t.rating ? 'text-warning fill-warning' : 'text-base-content/20'} />
                      ))}
                    </div>
                    <p className="text-xs text-base-content/50 mt-1">{t.roomType} · {t.duration}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button onClick={prev} className="btn btn-circle btn-outline btn-primary hover:scale-110 transition-transform">
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-8 h-3 bg-primary' : 'w-3 h-3 bg-base-300 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <button onClick={next} className="btn btn-circle btn-outline btn-primary hover:scale-110 transition-transform">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Mini testimonial grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {testimonials.filter((_, i) => i !== current).slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card bg-base-100 border border-base-200 p-4 cursor-pointer hover:border-primary/40 hover:shadow-md transition-all duration-200"
                onClick={() => setCurrent(testimonials.indexOf(t))}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="avatar">
                    <div className="w-8 h-8 rounded-full">
                      <img src={t.avatar} alt={t.name} />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-base-content">{t.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={10} className="text-warning fill-warning" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-base-content/60 line-clamp-2">"{t.review}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
