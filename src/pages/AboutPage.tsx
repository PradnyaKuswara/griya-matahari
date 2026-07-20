import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Heart, Target, Eye } from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const team = [
  { name: 'I Gusti Ngurah Mantra', role: 'Pemilik & Pengelola', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Mantra&backgroundColor=fde68a', desc: 'Pendiri utama yang mendirikan dan mengawasi jalannya Teduh Kost Matahari' },
  { name: 'I Gusti Ayu Made Sri Adnyani', role: 'Pemilik & Pengelola', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=AyuSri&backgroundColor=ffd5dc', desc: 'Pemilik pendamping yang mengelola aspek operasional harian dan kenyamanan penghuni' },
  { name: 'Pradnya Kuswara', role: 'Pengelola', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Kuswara&backgroundColor=c0aede', desc: 'Mengelola administrasi harian, sistem pendukung, jaringan WiFi, serta layanan penghuni' },
];

const values = [
  { icon: Heart, title: 'Kenyamanan', desc: 'Setiap keputusan kami didasarkan pada kenyamanan penghuni sebagai prioritas utama' },
  { icon: CheckCircle2, title: 'Kebersihan', desc: 'Standar kebersihan tinggi dijaga setiap hari untuk lingkungan yang sehat dan segar' },
  { icon: Target, title: 'Keterjangkauan', desc: 'Harga kompetitif dengan kualitas premium agar semua kalangan bisa menikmati hunian terbaik' },
  { icon: Eye, title: 'Transparansi', desc: 'Tidak ada biaya tersembunyi. Semua harga dan aturan dijelaskan secara jelas dan terbuka' },
];

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="pt-20"
    >
      <Helmet>
        <title>Tentang Kami & Tim Pengelola – Teduh Kost Matahari</title>
        <meta name="description" content="Kisah pendirian Teduh Kost Matahari Klungkung Bali tahun 2026. Temui pemilik dan tim pengelola kami: I Gusti Ngurah Mantra, I Gusti Ayu Made Sri Adnyani, dan Pradnya Kuswara." />
        <link rel="canonical" href="https://teduhkostmatahari.web.id/about" />
      </Helmet>
      {/* Hero */}
      <div className="relative py-20 overflow-hidden bg-linear-to-br from-amber-500/15 via-orange-500/5 to-base-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="badge badge-warning badge-outline mb-4">Tentang Kami</span>
              <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Kisah di Balik{' '}
                <span className="text-warning">Teduh Kost Matahari</span>
              </h1>
              <p className="text-base-content/70 leading-relaxed mb-4">
                Didirikan pada tahun 2026, <strong>Teduh Kost Matahari</strong> lahir dari impian sederhana:
                menciptakan hunian yang terasa seperti rumah sendiri bagi para mahasiswi dan karyawati di Klungkung, Bali.
              </p>
              <p className="text-base-content/70 leading-relaxed mb-8">
                Kami berkomitmen untuk terus berkembang dengan mendengarkan masukan penghuni, meningkatkan fasilitas,
                dan mempertahankan kehangatan keluarga dalam setiap sudut Teduh Kost Matahari.
              </p>
              <Link to="/contact" className="btn btn-warning rounded-xl gap-2 hover:scale-105 transition-transform">
                Hubungi Kami <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '2026', label: 'Tahun Berdiri', emoji: '🏠' },
                { value: '2 Orang', label: 'Penghuni Aktif', emoji: '👥' },
                { value: '5.0★', label: 'Rating Google', emoji: '⭐' },
                { value: 'Gress', label: 'Bangunan Baru', emoji: '✨' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="card bg-base-100 border border-base-200 shadow-md p-6 text-center hover:shadow-xl hover:border-warning/40 transition-all duration-300"
                >
                  <span className="text-3xl mb-2">{s.emoji}</span>
                  <p className="text-3xl font-black text-warning" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.value}</p>
                  <p className="text-sm text-base-content/60">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Nilai Kami */}
      <section className="py-20 bg-base-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge badge-primary badge-outline mb-3">Nilai Kami</span>
            <h2 className="text-3xl font-bold text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Apa Yang Kami <span className="text-primary">Pegang Teguh</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card bg-base-100 border border-base-200 p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-base-content mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p className="text-sm text-base-content/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim Kami */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge badge-secondary badge-outline mb-3">Orang-Orang Kami</span>
            <h2 className="text-3xl font-bold text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Tim <span className="text-secondary">Teduh Kost Matahari</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card bg-base-100 border border-base-200 p-6 text-center hover:shadow-xl hover:border-secondary/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="avatar justify-center mb-4">
                  <div className="w-20 h-20 rounded-full ring-4 ring-secondary/20">
                    <img src={member.avatar} alt={member.name} />
                  </div>
                </div>
                <h3 className="font-bold text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>{member.name}</h3>
                <p className="text-xs text-secondary font-medium mb-2">{member.role}</p>
                <p className="text-xs text-base-content/60 leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
}
