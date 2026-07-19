import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BedDouble, Maximize2, Users, CheckCircle2, XCircle, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getRoomById } from '../data/rooms';

export default function RoomDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const room = getRoomById(id ?? '');
  const [imgIdx, setImgIdx] = useState(0);

  if (!room) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 gap-4">
        <Helmet>
          <title>Kamar Tidak Ditemukan – Teduh Kost Matahari</title>
        </Helmet>
        <span className="text-6xl">🏠</span>
        <h1 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Kamar tidak ditemukan</h1>
        <Link to="/rooms" className="btn btn-primary rounded-xl">Back to Rooms</Link>
      </div>
    );
  }

  const typeLabels: Record<string, string> = {
    standard: 'Standard', deluxe: 'Deluxe', premium: 'Premium', vip: 'VIP'
  };

  const waMessage = encodeURIComponent(`Halo Teduh Kost Matahari, saya tertarik dengan ${room.name} (${room.priceLabel}/bulan). Apakah masih tersedia?`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="pt-20"
    >
      <Helmet>
        <title>{`${room.name} – Teduh Kost Matahari`}</title>
        <meta name="description" content={`Sewa kamar ${room.name} Klungkung Bali. Harga sewa ${room.priceLabel}/bulan. Fasilitas: ${room.facilities.slice(0, 4).join(', ')}. Include listrik & air.`} />
        <link rel="canonical" href={`https://teduhkostmatahari.web.id/rooms/${room.id}`} />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back */}
        <button onClick={() => navigate(-1)} className="btn btn-ghost btn-sm gap-2 mb-6 rounded-xl">
          <ArrowLeft size={16} /> Kembali
        </button>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Images */}
          <div>
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
              <motion.img
                key={imgIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={room.images[imgIdx]}
                alt={room.name}
                className="w-full h-full object-cover"
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="badge badge-primary">{typeLabels[room.type]}</span>
                {room.badge && <span className="badge badge-warning">{room.badge}</span>}
              </div>
              <div className="absolute top-4 right-4">
                <span className={`badge gap-1 ${room.available ? 'badge-success' : 'badge-error'}`}>
                  {room.available ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                  {room.available ? 'Tersedia' : 'Penuh'}
                </span>
              </div>
              {/* Nav arrows */}
              {room.images.length > 1 && (
                <>
                  <button onClick={() => setImgIdx((i) => (i === 0 ? room.images.length - 1 : i - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-black/40 border-0 text-white hover:bg-black/60">
                    <ChevronLeft size={16} />
                  </button>
                  <button onClick={() => setImgIdx((i) => (i === room.images.length - 1 ? 0 : i + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-black/40 border-0 text-white hover:bg-black/60">
                    <ChevronRight size={16} />
                  </button>
                </>
              )}
            </div>
            {/* Thumbnails */}
            {room.images.length > 1 && (
              <div className="flex gap-3 mt-3">
                {room.images.map((img, i) => (
                  <button key={i} onClick={() => setImgIdx(i)}
                    className={`rounded-xl overflow-hidden h-20 flex-1 border-2 transition-all ${i === imgIdx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-90'}`}>
                    <img src={img} alt={`${room.name} ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Rules Section */}
            <div className="mt-8 p-6 rounded-2xl bg-base-200">
              <h3 className="font-bold text-base-content mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Aturan Teduh Kost Matahari</h3>
              <ul className="space-y-2 text-sm text-base-content/80">
                <li className="flex items-start gap-2">
                  <span className="text-error font-bold">•</span>
                  <span>Kost khusus **Putri** (Mahasiswi/Karyawati).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-error font-bold">•</span>
                  <span>**Dilarang** membawa hewan peliharaan (No Pets).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-error font-bold">•</span>
                  <span>Tamu berkunjung maksimal sampai jam **11 malam**.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-error font-bold">•</span>
                  <span>Dilarang merokok di dalam kamar dan menjaga ketenangan lingkungan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-error font-bold">•</span>
                  <span>Menjaga kebersihan bersama di area parkir dan fasilitas umum.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="badge badge-secondary mb-2">Khusus Putri (Mahasiswi/Karyawati)</span>
              <h1 className="text-3xl font-bold text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>{room.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-base-content/50">Teduh Kost Matahari Klungkung, Bali</span>
              </div>
            </div>

            {/* Price */}
            <div className="card bg-linear-to-br from-primary/10 to-primary/5 border border-primary/20 p-5 rounded-2xl">
              <p className="text-sm text-base-content/60">Harga Sewa</p>
              <p className="text-4xl font-black text-primary mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {room.priceLabel}
              </p>
              <p className="text-sm text-base-content/60">per bulan · **Sudah include listrik & air**</p>
            </div>

            {/* Room specs */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Maximize2, label: 'Luas', value: `${room.size} m²` },
                { icon: BedDouble, label: 'Lantai', value: `Lantai 1` },
                { icon: Users, label: 'Tipe', value: `Khusus Putri` },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="text-center p-3 rounded-2xl bg-base-200">
                  <Icon size={20} className="text-primary mx-auto mb-1" />
                  <p className="text-xs text-base-content/60">{label}</p>
                  <p className="text-sm font-semibold text-base-content">{value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-base-content mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Deskripsi</h3>
              <p className="text-base-content/70 leading-relaxed">{room.description}</p>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="font-semibold text-base-content mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Fasilitas Kamar</h3>
              <div className="grid grid-cols-2 gap-2">
                {room.facilities.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={14} className="text-success shrink-0" />
                    <span className="text-base-content/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="text-sm font-semibold text-base-content/70 mb-1">Hubungi Pengelola (WhatsApp):</div>
              <div className="grid sm:grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/628124605815?text=${waMessage}`}
                  target="_blank" rel="noopener noreferrer"
                  className={`btn btn-success rounded-xl gap-2 ${room.available ? '' : 'btn-disabled'}`}
                >
                  <MessageCircle size={18} />
                  Gusti Ayu Sri
                </a>
                <a
                  href={`https://wa.me/628970474149?text=${waMessage}`}
                  target="_blank" rel="noopener noreferrer"
                  className={`btn btn-success rounded-xl gap-2 ${room.available ? '' : 'btn-disabled'}`}
                >
                  <MessageCircle size={18} />
                  Kuswara
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
