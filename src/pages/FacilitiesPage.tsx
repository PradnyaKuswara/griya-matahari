import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import FacilitiesSection from '../components/sections/FacilitiesSection';
import CTASection from '../components/sections/CTASection';

export default function FacilitiesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="pt-20"
    >
      <Helmet>
        <title>Fasilitas Kost Lengkap – Kost Griya Matahari</title>
        <meta name="description" content="Fasilitas Kost Griya Matahari Klungkung Bali. WiFi Fiber 75 Mbps, area parkir, sistem keamanan aman & nyaman, akses kunci gerbang 24 jam, pemandangan asri Bali." />
        <link rel="canonical" href="https://griyamatahariklungkung.com/facilities" />
      </Helmet>
      {/* Header */}
      <div className="relative py-16 overflow-hidden bg-gradient-to-br from-emerald-500/10 via-base-100 to-cyan-500/5">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-success badge-outline mb-3">Apa Yang Kami Tawarkan</span>
            <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Fasilitas <span className="text-success">Lengkap</span>
            </h1>
            <p className="text-base-content/60 max-w-xl mx-auto">
              Kami menyediakan semua yang Anda butuhkan untuk kehidupan yang nyaman dan produktif setiap harinya
            </p>
          </motion.div>
        </div>
      </div>

      <FacilitiesSection />
      <CTASection />
    </motion.div>
  );
}
