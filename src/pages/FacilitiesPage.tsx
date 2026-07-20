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
        <title>Fasilitas Kost Putri Klungkung – WiFi, AC, CCTV | Teduh Kost Matahari</title>
        <meta name="description" content="Fasilitas lengkap Teduh Kost Matahari Klungkung Bali: WiFi 150 Mbps, kamar mandi dalam, AC (Deluxe), CCTV 24 jam, parkir motor aman, akses kunci gerbang sendiri, include listrik & air. Kost putri di Semarapura." />
        <meta name="keywords" content="fasilitas kost klungkung, kost wifi klungkung, kost cctv klungkung, kost include listrik air bali, kost kamar mandi dalam klungkung" />
        <link rel="canonical" href="https://teduhkostmatahari.web.id/facilities" />
      </Helmet>
      {/* Header */}
      <div className="relative py-16 overflow-hidden bg-linear-to-br from-emerald-500/10 via-base-100 to-cyan-500/5">
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
