import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, ParkingCircle, ChefHat, Sofa, Wind, ShowerHead, Bed, Laptop, Camera, Shield, Moon, Dumbbell, Waves, Fingerprint, Trees, Clock } from 'lucide-react';
import { facilities } from '../../data/facilities';

const iconMap: Record<string, React.ElementType> = {
  Wifi, ParkingCircle, ChefHat, Sofa, Wind, ShowerHead, Bed, Laptop, Camera,
  Shield, Moon, Dumbbell, Waves, Fingerprint, Trees, Clock,
  WashingMachine: () => <span className="text-xl">🫧</span>,
};

const categoryColors = {
  utama: 'from-blue-500/20 to-cyan-500/20 border-blue-400/30',
  kamar: 'from-green-500/20 to-emerald-500/20 border-green-400/30',
  keamanan: 'from-purple-500/20 to-violet-500/20 border-purple-400/30',
  tambahan: 'from-orange-500/20 to-yellow-500/20 border-orange-400/30',
};

const categoryIconColors = {
  utama: 'text-blue-500',
  kamar: 'text-green-500',
  keamanan: 'text-purple-500',
  tambahan: 'text-orange-500',
};

const categoryLabels = {
  utama: '🏠 Fasilitas Utama',
  kamar: '🛏️ Fasilitas Kamar',
  keamanan: '🔒 Keamanan',
};

const categoryOrder = ['utama', 'kamar', 'keamanan'] as const;

export default function FacilitiesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge badge-primary badge-outline mb-3">Apa Yang Kami Sediakan</span>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Fasilitas{' '}
            <span className="text-primary">Lengkap</span> & Modern
          </h2>
          <p className="text-base-content/60 mt-3 max-w-2xl mx-auto">
            Semua yang Anda butuhkan sudah tersedia. Fokus pada aktivitas Anda, biarkan kami yang urus kenyamanan hidup.
          </p>
        </motion.div>

        {/* Facilities by category */}
        <div className="space-y-12">
          {categoryOrder.map((cat, catIndex) => {
            const catFacilities = facilities.filter((f) => f.category === cat);
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="font-bold text-lg text-base-content mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {categoryLabels[cat]}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {catFacilities.map((facility, i) => {
                    const Icon = iconMap[facility.icon];
                    return (
                      <motion.div
                        key={facility.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.08 }}
                        whileHover={{ y: -4 }}
                        className={`flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br border transition-all duration-300 cursor-default ${categoryColors[cat]}`}
                      >
                        <div className="w-11 h-11 rounded-xl bg-base-100/80 flex items-center justify-center flex-shrink-0 shadow-sm">
                          {Icon && <Icon size={22} className={categoryIconColors[cat]} />}
                        </div>
                        <div>
                          <p className="font-semibold text-base-content text-sm">{facility.name}</p>
                          <p className="text-xs text-base-content/60 mt-0.5 leading-relaxed">{facility.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/facilities" className="btn btn-primary btn-lg rounded-2xl gap-2 shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
            Lihat Semua Fasilitas <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
