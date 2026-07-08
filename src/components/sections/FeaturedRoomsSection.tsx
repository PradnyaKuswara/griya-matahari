import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import RoomCard from '../ui/RoomCard';
import { getFeaturedRooms } from '../../data/rooms';

export default function FeaturedRoomsSection() {
  const featuredRooms = getFeaturedRooms();
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0, 0.4, 1], [60, 0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0.3, 1, 1, 0.5]);

  return (
    <section ref={targetRef} className="py-20 bg-base-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="badge badge-primary badge-outline mb-3">Pilihan Terbaik</span>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Kamar{' '}
              <span className="text-primary">Unggulan</span>
            </h2>
            <p className="text-base-content/60 mt-2 max-w-md">
              Pilih kamar yang paling sesuai dengan kebutuhan dan budget Anda
            </p>
          </div>
          <Link
            to="/rooms"
            className="btn btn-outline btn-primary rounded-xl gap-2 self-start md:self-auto"
          >
            Semua Kamar <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Room Grid */}
        <motion.div 
          style={{ y: cardsY, opacity }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {featuredRooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
