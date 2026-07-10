import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const contacts = [
    { icon: Phone, label: 'Telepon (Ayu Sri)', value: '+62 812-4605-815', href: 'tel:+628124605815' },
    { icon: Phone, label: 'Telepon (Kuswara)', value: '+62 897-0474-149', href: 'tel:+628970474149' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+62 812-4605-815', href: 'https://wa.me/628124605815' },
    { icon: MapPin, label: 'Alamat', value: 'Jl. Matahari, Semarapura Kelod, Klungkung, Bali', href: 'https://www.google.com/maps/search/?api=1&query=-8.542981582896246,115.39684086566014' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-20 flex flex-col lg:flex-row bg-base-100"
    >
      <Helmet>
        <title>Hubungi Kami / Booking Kamar – Tedung Kost Matahari</title>
        <meta name="description" content="Kontak telepon & WhatsApp resmi pengelola Tedung Kost Matahari Klungkung Bali (Ayu Sri: +628124605815, Kuswara: +628970474149) untuk booking atau survey lokasi." />
        <link rel="canonical" href="https://griyamatahari.web.id/contact" />
      </Helmet>
      {/* KIRI: Google Maps & Floating Glass Info (Full height on desktop) */}
      <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-0 bg-base-200">
        <iframe
          src="https://maps.google.com/maps?q=-8.542981582896246,115.39684086566014&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Tedung Kost Matahari"
        />

        {/* Floating Glassmorphism Badge */}
        <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-base-100/70 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] space-y-4">
          <div className="flex items-center gap-2">
            <span className="badge badge-primary badge-sm font-bold animate-pulse">Lokasi Kami</span>
            <p className="text-xs text-base-content/60 font-semibold">Semarapura Kelod, Bali</p>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Tedung Kost Matahari
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-base-100/50 hover:bg-base-100/80 transition-colors border border-base-200/30"
              >
                <Icon size={16} className="text-primary shrink-0" />
                <div className="truncate">
                  <p className="text-[10px] text-base-content/50 font-medium">{label}</p>
                  <p className="font-bold truncate text-base-content">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* KANAN: WhatsApp Quick Actions & Hubungi Kami */}
      <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-20 flex flex-col justify-center overflow-y-auto">
        <div className="max-w-xl mx-auto w-full space-y-8">

          {/* Section Header */}
          <div>
            <span className="badge badge-primary badge-outline font-semibold mb-2">Mari Berbicara</span>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Pesan Kamar Lewat <span className="bg-linear-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">WhatsApp</span>
            </h1>
            <p className="text-sm sm:text-base text-base-content/60 mt-2 font-medium">
              Kami tidak menyediakan formulir kontak email. Untuk respons paling cepat, silakan klik salah satu kontak WhatsApp pengelola kami di bawah ini untuk bertanya informasi seputar ketersediaan kamar, kesepakatan DP booking 50%, atau survey langsung ke lokasi kost.
            </p>
          </div>

          {/* WhatsApp Direct Quick Action Bento (Enlarged and highlighted) */}
          <div className="bg-linear-to-br from-green-500/15 via-emerald-500/5 to-base-200 border border-green-500/30 p-8 rounded-4xl space-y-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-success/20 flex items-center justify-center text-success">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-extrabold text-base-content text-base sm:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Kontak WhatsApp Chat Resmi
                </h3>
                <p className="text-xs text-base-content/60 font-semibold">Aktif setiap hari. Rata-rata respons cepat di bawah 5 menit.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/628124605815?text=Halo%20Tedung%20Kost%20Matahari%2C%20saya%20tertarik%20ingin%20tanya%20informasi%20booking%20kamar."
                target="_blank" rel="noopener noreferrer"
                className="btn btn-success btn-lg rounded-2xl flex-1 gap-2 font-extrabold text-sm hover:scale-[1.03] transition-transform shadow-lg shadow-success/20"
              >
                <MessageCircle size={18} />
                WhatsApp - Ayu Sri
              </a>
              <a
                href="https://wa.me/628970474149?text=Halo%20Tedung%20Kost%20Matahari%2C%20saya%20tertarik%20ingin%20tanya%20informasi%20booking%20kamar."
                target="_blank" rel="noopener noreferrer"
                className="btn btn-success btn-lg rounded-2xl flex-1 gap-2 font-extrabold text-sm hover:scale-[1.03] transition-transform shadow-lg shadow-success/20"
              >
                <MessageCircle size={18} />
                WhatsApp - Kuswara
              </a>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="text-xs text-base-content/50 leading-relaxed font-semibold bg-base-200/50 p-4 rounded-xl border border-base-300">
            📌 <strong>Catatan Booking:</strong> Kamar kost diprioritaskan untuk penyewa yang telah membayar DP booking minimal 50%. Survey lokasi dapat dijadwalkan terlebih dahulu dengan menghubungi kontak pengelola di atas.
          </div>

        </div>
      </div>
    </motion.div>
  );
}
