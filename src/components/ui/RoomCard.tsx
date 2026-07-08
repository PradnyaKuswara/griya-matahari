import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, BedDouble, Maximize2, Users, CheckCircle2, XCircle } from 'lucide-react';
import type { Room } from '../../types';

interface RoomCardProps {
  room: Room;
  index?: number;
}

const typeColors: Record<Room['type'], string> = {
  standard: 'badge-info',
  deluxe: 'badge-success',
  premium: 'badge-warning',
  vip: 'badge-error',
};

const typeLabels: Record<Room['type'], string> = {
  standard: 'Standard',
  deluxe: 'Deluxe',
  premium: 'Premium',
  vip: 'VIP',
};

export default function RoomCard({ room, index = 0 }: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card bg-base-100 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group overflow-hidden card-hover border border-base-200"
    >
      {/* Image */}
      <figure className="relative overflow-hidden h-52">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          <span className={`badge badge-sm font-semibold ${typeColors[room.type]}`}>
            {typeLabels[room.type]}
          </span>
          {room.badge && (
            <span className="badge badge-sm badge-primary font-semibold">{room.badge}</span>
          )}
        </div>

        {/* Availability */}
        <div className="absolute top-3 right-3">
          <span className={`badge badge-sm gap-1 ${room.available ? 'badge-success' : 'badge-error'} bg-opacity-90`}>
            {room.available ? <CheckCircle2 size={10} /> : <XCircle size={10} />}
            {room.available ? 'Tersedia' : 'Penuh'}
          </span>
        </div>

        {/* Price overlay on hover */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {room.priceLabel}<span className="text-sm font-normal">/bulan</span>
          </p>
        </div>
      </figure>

      {/* Content */}
      <div className="card-body p-5 gap-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-base-content text-lg leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {room.name}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <Star size={14} className="text-warning fill-warning" />
              <span className="text-sm font-semibold text-base-content">{room.rating}</span>
              <span className="text-xs text-base-content/50">({room.reviewCount} ulasan)</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-primary font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {room.priceLabel}
            </p>
            <p className="text-xs text-base-content/50">/bulan</p>
          </div>
        </div>

        <p className="text-sm text-base-content/60 line-clamp-2">{room.description}</p>

        {/* Room Info */}
        <div className="flex items-center gap-4 text-sm text-base-content/60">
          <span className="flex items-center gap-1.5">
            <Maximize2 size={14} className="text-primary" />
            {room.size} m²
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble size={14} className="text-primary" />
            Lantai {room.floor}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={14} className="text-primary" />
            Maks {room.maxOccupants}
          </span>
        </div>

        {/* Top Facilities */}
        <div className="flex flex-wrap gap-1.5">
          {room.facilities.slice(0, 4).map((f) => (
            <span key={f} className="badge badge-ghost badge-sm text-xs">{f}</span>
          ))}
          {room.facilities.length > 4 && (
            <span className="badge badge-ghost badge-sm text-xs">+{room.facilities.length - 4} lagi</span>
          )}
        </div>

        {/* Action */}
        <div className="card-actions pt-1">
          <Link
            to={`/rooms/${room.id}`}
            className={`btn btn-sm w-full rounded-xl ${room.available ? 'btn-primary' : 'btn-disabled'}`}
          >
            {room.available ? 'Lihat Detail & Pesan' : 'Tidak Tersedia'}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
