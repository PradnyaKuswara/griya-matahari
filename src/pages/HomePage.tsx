import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import FeaturedRoomsSection from '../components/sections/FeaturedRoomsSection';
import FacilitiesSection from '../components/sections/FacilitiesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>Kost Putri Klungkung Bali – Teduh Kost Matahari Semarapura | WiFi, AC, CCTV</title>
        <meta name="description" content="Teduh Kost Matahari – Kost putri terbaik di Semarapura Klungkung Bali. Kamar AC & Non-AC mulai Rp 1.100.000/bulan, include listrik & air, WiFi 150 Mbps, CCTV 24 jam, kamar mandi dalam. Khusus mahasiswi & karyawati." />
        <link rel="canonical" href="https://teduhkostmatahari.web.id/" />
      </Helmet>
      <HeroSection />
      <StatsSection />
      <FeaturedRoomsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  );
}
