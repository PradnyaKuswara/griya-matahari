import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'semua' | 'kamar' | 'fasilitas' | 'eksterior' | 'interior';

const galleryItems = [
  { id: 'g-01', title: 'Kamar Deluxe AC', category: 'kamar', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80' },
  { id: 'g-03', title: 'Kamar Standard', category: 'kamar', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80' },
  { id: 'g-06', title: 'Dapur Bersama', category: 'fasilitas', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80' },
  { id: 'g-07', title: 'Taman & Gazebo Sejuk', category: 'eksterior', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
  { id: 'g-08', title: 'Tampak Depan Tedung Kost Matahari', category: 'eksterior', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80' },
  { id: 'g-09', title: 'Area Parkir Luas', category: 'eksterior', image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80' },
  { id: 'g-10', title: 'Ruang Santai Bersama', category: 'interior', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80' },
  { id: 'g-11', title: 'Koridor Lantai Sejuk', category: 'interior', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80' },
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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filtered = galleryItems.filter((g) => category === 'semua' || g.category === category);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="pt-20"
    >
      <Helmet>
        <title>Galeri Foto Kost Lengkap – Tedung Kost Matahari</title>
        <meta name="description" content="Foto-foto unit Kamar Deluxe AC & Standard, dapur bersama, area parkir, dan lingkungan sejuk Tedung Kost Matahari Semarapura Klungkung Bali." />
        <link rel="canonical" href="https://griyamatahari.web.id/gallery" />
      </Helmet>
      {/* Header */}
      <div className="relative py-16 overflow-hidden bg-linear-to-br from-violet-500/10 via-base-100 to-pink-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-secondary badge-outline mb-3">Lihat Keindahannya</span>
            <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Galeri <span className="text-secondary">Foto</span>
            </h1>
            <p className="text-base-content/60 max-w-xl mx-auto">
              Lihat lebih dekat keindahan dan kenyamanan Tedung Kost Matahari dari berbagai sudut
            </p>
          </motion.div>
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

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${i % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                style={{ aspectRatio: i % 5 === 0 ? '1/1' : '4/3' }}
                onClick={() => setLightbox(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-sm">{item.title}</p>
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
