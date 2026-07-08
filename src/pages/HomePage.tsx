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
        <title>Kost Griya Matahari Klungkung – Hunian Asri & Nyaman di Bali</title>
        <meta name="description" content="Kost Griya Matahari Klungkung Bali – Hunian kos eksklusif khusus putri (mahasiswi/karyawati) yang aman, nyaman, dan sejuk di Semarapura. WiFi 75 Mbps, kamar mandi dalam." />
        <link rel="canonical" href="https://griyamatahariklungkung.com/" />
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
