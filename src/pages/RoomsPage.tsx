import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import RoomCard from '../components/ui/RoomCard';
import { rooms } from '../data/rooms';
import type { Room } from '../types';

type FilterType = Room['type'] | 'all';
type SortType = 'price-asc' | 'price-desc' | 'rating' | 'name';

export default function RoomsPage() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [sortBy, setSortBy] = useState<SortType>('price-asc');
  const [search, setSearch] = useState('');
  const [availableOnly, setAvailableOnly] = useState(false);

  const filtered = rooms
    .filter((r) => filter === 'all' || r.type === filter)
    .filter((r) => !availableOnly || r.available)
    .filter((r) => r.name.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  const filterButtons: { label: string; value: FilterType; emoji: string }[] = [
    { label: 'Semua', value: 'all', emoji: '🏠' },
    { label: 'Standard', value: 'standard', emoji: '🛏️' },
    { label: 'Deluxe', value: 'deluxe', emoji: '⭐' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>Daftar Kamar & Harga Sewa – Tedung Kost Matahari</title>
        <meta name="description" content="Pilihan Kamar Tedung Kost Matahari Klungkung Bali. Kamar Standard (Non-AC) mulai Rp 1.100.000 dan Deluxe (AC) mulai Rp 1.500.000. Fasilitas include air & listrik." />
        <link rel="canonical" href="https://griyamatahari.web.id/rooms" />
      </Helmet>
      {/* Header */}
      <div className="relative pt-24 pb-16 overflow-hidden bg-linear-to-br from-primary/10 via-base-100 to-secondary/5">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="badge badge-primary badge-outline mb-3">Pilih Hunian Terbaik</span>
            <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Kamar &{' '}<span className="text-primary">Harga</span>
            </h1>
            <p className="text-base-content/60 max-w-xl mx-auto">
              Temukan kamar yang sempurna untuk Anda. Dari standard hingga VIP, semua tersedia dengan harga terjangkau.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 md:top-20 z-30 bg-base-100/90 navbar-blur border-b border-base-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40" />
              <input
                type="text"
                placeholder="Cari kamar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input input-bordered w-full pl-9 pr-4 h-10 text-sm rounded-xl"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Type filter chips */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {filterButtons.map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setFilter(btn.value)}
                  className={`btn btn-xs sm:btn-sm rounded-xl whitespace-nowrap shrink-0 gap-1 ${filter === btn.value ? 'btn-primary' : 'btn-ghost border border-base-300'
                    }`}
                >
                  <span>{btn.emoji}</span>
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Sort + Available */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortType)}
                className="select select-bordered select-sm rounded-xl text-sm"
              >
                <option value="price-asc">Harga ↑</option>
                <option value="price-desc">Harga ↓</option>
                <option value="rating">Rating</option>
                <option value="name">Nama</option>
              </select>
              <label className="btn btn-sm btn-ghost border border-base-300 rounded-xl gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-xs"
                  checked={availableOnly}
                  onChange={(e) => setAvailableOnly(e.target.checked)}
                />
                <span className="text-xs">Tersedia</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Room Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-base-content/60">
            Menampilkan <span className="font-semibold text-base-content">{filtered.length}</span> kamar
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">🏠</span>
            <h3 className="text-xl font-bold text-base-content mb-2">Tidak ada kamar ditemukan</h3>
            <p className="text-base-content/60">Coba ubah filter atau kata kunci pencarian</p>
            <button onClick={() => { setFilter('all'); setSearch(''); setAvailableOnly(false); }}
              className="btn btn-primary btn-sm rounded-xl mt-4">
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
