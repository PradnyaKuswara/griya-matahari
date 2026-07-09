import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated gradient BG */}
      <div className="absolute inset-0 animated-gradient bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            🌟 Terbatas! Hanya beberapa kamar tersisa
          </span>

          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Siap Pindah ke{' '}
            <span className="text-yellow-200 text-glow">Tedung Kost Matahari?</span>
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Jangan lewatkan kesempatan tinggal di hunian terbaik di Klungkung, Bali. Hubungi kami sekarang
            dan dapatkan penawaran spesial untuk penghuni baru!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/contact"
              id="cta-contact-btn"
              className="btn btn-lg bg-white text-orange-600 hover:bg-yellow-50 border-0 rounded-2xl gap-2 shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 font-bold px-8"
            >
              Cek Ketersediaan Kamar <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+628124605815"
              id="cta-phone-btn"
              className="btn btn-lg btn-outline border-2 border-white text-white hover:bg-white/20 rounded-2xl gap-2 px-8 transition-all duration-300"
            >
              <Phone size={18} />
              Telepon Langsung
            </a>
          </div>

          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            {['✅ DP 50% untuk Booking', '✅ Survey Gratis', '✅ Kamar Siap Huni', '✅ Pindah Kapan Saja'].map((perk) => (
              <span key={perk} className="font-medium">{perk}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
