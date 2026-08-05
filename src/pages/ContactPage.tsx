import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Clock, ShieldCheck, Navigation } from 'lucide-react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-20 flex flex-col lg:flex-row bg-base-100"
    >
      <Helmet>
        <title>Hubungi Kami & Lokasi – Teduh Kost Matahari</title>
        <meta name="description" content="Lokasi presisi dan kontak WhatsApp pengelola Teduh Kost Matahari Klungkung Bali untuk booking kamar atau survey lokasi." />
        <link rel="canonical" href="https://teduhkostmatahari.web.id/contact" />
      </Helmet>

      {/* KIRI: Google Maps & Pure Location Info Card */}
      <div className="relative w-full lg:w-1/2 min-h-100 lg:min-h-0 bg-base-200">
        <iframe
          src="https://maps.google.com/maps?q=-8.542981582896246,115.39684086566014&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Teduh Kost Matahari"
        />

        {/* Floating Location Card */}
        <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-base-100/80 backdrop-blur-xl border border-white/30 p-6 rounded-3xl shadow-2xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="badge badge-primary font-bold">📍 Petunjuk Lokasi</span>
            <span className="text-xs text-base-content/60 font-semibold flex items-center gap-1">
              <Clock size={12} /> Akses 24 Jam
            </span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Teduh Kost Matahari
            </h2>
            <p className="text-xs sm:text-sm text-base-content/70 mt-1 leading-relaxed">
              Jl. Matahari, Semarapura Kelod, Kec. Klungkung, Kabupaten Klungkung, Bali 80716 (Plus Code: F94W+RP4)
            </p>
          </div>

          <div className="pt-1 flex gap-2">
            <a
              href="https://www.google.com/maps/search/?api=1&query=-8.542981582896246,115.39684086566014"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm rounded-xl gap-2 text-xs w-full font-bold shadow-md"
            >
              <Navigation size={14} /> Petunjuk Arah di Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* KANAN: Dedicated Direct WhatsApp Action Hub */}
      <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto">
        <div className="max-w-xl mx-auto w-full space-y-8">

          {/* Section Header */}
          <div>
            <span className="badge badge-secondary badge-outline font-semibold mb-2">Layanan Respons Cepat</span>
            <h1 className="text-3xl sm:text-4xl font-black leading-tight text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Hubungi Pengelola via <span className="text-success">WhatsApp</span>
            </h1>
            <p className="text-sm text-base-content/60 mt-2 font-medium leading-relaxed">
              Silakan klik kontak pengelola di bawah ini untuk konsultasi ketersediaan kamar, reservasi DP 50%, atau membuat janji survey lokasi.
            </p>
          </div>

          {/* Pengelola WhatsApp Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://wa.me/628124605815?text=Halo%20Ayu%20Sri%2C%20saya%20tertarik%20tanya%20ketersediaan%20kamar%20di%20Teduh%20Kost%20Matahari."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl bg-linear-to-br from-emerald-500/10 via-base-200 to-base-100 border border-emerald-500/30 hover:border-emerald-500 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <MessageCircle size={20} />
              </div>
              <h3 className="font-bold text-base-content text-base">Ayu Sri</h3>
              <p className="text-xs text-base-content/60 mb-4 font-medium">Pengelola 1</p>
              <span className="btn btn-success btn-xs rounded-xl w-full text-white font-bold gap-1">
                Chat WhatsApp →
              </span>
            </a>

            <a
              href="https://wa.me/628970474149?text=Halo%20Pak%20Kuswara%2C%20saya%20tertarik%20tanya%20ketersediaan%20kamar%20di%20Teduh%20Kost%20Matahari."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl bg-linear-to-br from-emerald-500/10 via-base-200 to-base-100 border border-emerald-500/30 hover:border-emerald-500 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <MessageCircle size={20} />
              </div>
              <h3 className="font-bold text-base-content text-base">Kuswara</h3>
              <p className="text-xs text-base-content/60 mb-4 font-medium">Pengelola 2</p>
              <span className="btn btn-success btn-xs rounded-xl w-full text-white font-bold gap-1">
                Chat WhatsApp →
              </span>
            </a>
          </div>

          {/* Quick Notice & Booking Guarantee */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-base-200/70 border border-base-300">
              <ShieldCheck size={20} className="text-primary shrink-0 mt-0.5" />
              <div className="text-xs text-base-content/70 leading-relaxed font-medium">
                <strong className="text-base-content">Ketentuan Booking:</strong> Kamar diprioritaskan bagi penyewa yang telah mengonfirmasi DP booking 50%. Survey lokasi gratis dengan koordinasi waktu terlebih dahulu.
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
