import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, Video as VideoIcon } from 'lucide-react';

type Category = 'semua' | 'kamar' | 'fasilitas' | 'eksterior' | 'interior';

const galleryItems = [
  { id: 'g-01', title: 'Suasana Kamar Kost 1', category: 'kamar', image: '/galery/Kamar1.jpeg' },
  { id: 'g-02', title: 'Suasana Kamar Kost 2', category: 'kamar', image: '/galery/Kamar2.jpeg' },
  { id: 'g-03', title: 'Fasilitas & Kasur Kamar', category: 'kamar', image: '/galery/Kamar3.jpeg' },
  { id: 'g-04', title: 'Interior Kamar Kost', category: 'kamar', image: '/galery/Kamar4.jpeg' },
  { id: 'g-05', title: 'Kamar Standard Bersih', category: 'kamar', image: '/galery/WhatsApp Image 2026-07-19 at 14.35.22.jpeg' },
  { id: 'g-06', title: 'Kamar Deluxe AC Nyaman', category: 'kamar', image: '/galery/WhatsApp Image 2026-07-19 at 14.35.23.jpeg' },
  { id: 'g-07', title: 'Tampak Depan Teduh Kost Matahari', category: 'eksterior', image: '/galery/WhatsApp Image 2026-07-19 at 14.36.12.jpeg' },
  { id: 'g-08', title: 'Area Parkir & Lingkungan Kost', category: 'eksterior', image: '/galery/WhatsApp Image 2026-07-19 at 14.36.17.jpeg' },
  { id: 'g-09', title: 'Fasilitas Kamar Mandi Dalam', category: 'fasilitas', image: '/galery/WhatsApp Image 2026-07-19 at 15.42.18.jpeg' },
  { id: 'g-10', title: 'Akses Lorong & Pintu Kamar', category: 'interior', image: '/galery/WhatsApp Image 2026-07-19 at 15.42.19.jpeg' },
  { id: 'g-11', title: 'Detail Fasilitas Kamar', category: 'kamar', image: '/galery/WhatsApp Image 2026-07-19 at 15.42.20.jpeg' },
  { id: 'g-12', title: 'Tampak Halaman Kost', category: 'eksterior', image: '/galery/WhatsApp Image 2026-08-05 at 11.49.43.jpeg' },
  { id: 'g-13', title: 'Sudut Lingkungan Kost', category: 'eksterior', image: '/galery/WhatsApp Image 2026-08-05 at 11.50.59.jpeg' },
  { id: 'g-14', title: 'Area Parkir & Lorong', category: 'fasilitas', image: '/galery/WhatsApp Image 2026-08-05 at 11.51.29.jpeg' },
  { id: 'g-15', title: 'Taman & Gazebo Sejuk', category: 'eksterior', image: '/galery/Gemini_Generated_Image_sn5ze3sn5ze3sn5z.png' },
];

const categories: { value: Category; label: string; emoji: string }[] = [
  { value: 'semua', label: 'Semua', emoji: '📷' },
  { value: 'kamar', label: 'Kamar', emoji: '🛏️' },
  { value: 'fasilitas', label: 'Fasilitas', emoji: '✨' },
  { value: 'eksterior', label: 'Eksterior', emoji: '🏠' },
  { value: 'interior', label: 'Interior', emoji: '🛋️' },
];

export default function GalleryPage() {
  const [category, setCategory] = useState<Category>('semua');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const filtered = galleryItems.filter((g) => category === 'semua' || g.category === category);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="pt-20"
    >
      <Helmet>
        <title>Galeri Foto Kost Lengkap – Teduh Kost Matahari</title>
        <meta name="description" content="Foto-foto unit Kamar Deluxe AC & Standard, dapur bersama, area parkir, dan lingkungan sejuk Teduh Kost Matahari Semarapura Klungkung Bali." />
        <link rel="canonical" href="https://teduhkostmatahari.web.id/gallery" />
      </Helmet>
      {/* Header */}
      <div className="relative py-16 overflow-hidden bg-linear-to-br from-violet-500/10 via-base-100 to-pink-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-secondary badge-outline mb-3">Lihat Keindahannya</span>
            <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Galeri & <span className="text-secondary">Video Tour</span>
            </h1>
            <p className="text-base-content/60 max-w-xl mx-auto">
              Lihat lebih dekat keindahan dan kenyamanan Teduh Kost Matahari dari foto dan video suasana riil.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Video Tour Section - Seamless Borderless Modern UI/UX */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-base-300/40 bg-black aspect-video sm:aspect-video">
          <video
            ref={videoRef}
            src="/galery/Video1.mp4"
            poster="/galery/Kamar1.jpeg"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
            onClick={togglePlay}
          />

          {/* Gradient Overlay for Controls */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Top Floating Badge */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 absolute" />
              <span className="text-white text-xs font-bold tracking-wider uppercase ml-3">Live Video Tour</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white/80 text-xs font-medium">
              <VideoIcon size={14} className="text-secondary" /> Suasana Riil Kost
            </div>
          </div>

          {/* Center Play/Pause Overlay Indicator */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs cursor-pointer z-10"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <Play size={32} className="ml-1 fill-white" />
              </div>
            </div>
          )}

          {/* Bottom Controls Bar */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
            <div>
              <p className="text-white font-bold text-sm sm:text-lg drop-shadow-md">Tur Suasana Kamar & Lingkungan Kost</p>
              <p className="text-white/70 text-xs hidden sm:block font-medium">Pengalaman langsung hunian nyaman di Klungkung Bali</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="btn btn-circle btn-sm sm:btn-md bg-white/20 hover:bg-white/40 border-0 text-white backdrop-blur-md"
                title={isPlaying ? 'Pause Video' : 'Play Video'}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                className="btn btn-circle btn-sm sm:btn-md bg-white/20 hover:bg-white/40 border-0 text-white backdrop-blur-md"
                title={isMuted ? 'Aktifkan Suara' : 'Matikan Suara'}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`btn btn-sm rounded-xl gap-1.5 ${category === cat.value ? 'btn-primary' : 'btn-ghost border border-base-300'}`}
            >
              <span>{cat.emoji}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Pinterest-style Masonry Grid */}
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="break-inside-avoid relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer group bg-base-200 shadow-sm sm:shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => setLightbox(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Floating Pinterest Category Badge */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="badge badge-xs sm:badge-sm bg-black/60 text-white backdrop-blur-md border-0 capitalize px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Gradient Overlay & Title */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-5 rounded-2xl sm:rounded-3xl">
                  <p className="text-white font-bold text-xs sm:text-sm leading-tight sm:leading-snug drop-shadow-md">
                    {item.title}
                  </p>
                  <span className="text-white/70 text-[10px] sm:text-xs mt-0.5 sm:mt-1 flex items-center gap-1 font-medium">
                    🔍 Perbesar
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox}
              alt="Gallery"
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 btn btn-circle btn-ghost text-white"
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
