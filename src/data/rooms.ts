import type { Room } from '../types';

export const rooms: Room[] = [
  {
    id: 'r-01',
    name: 'Kamar Standard (Non-AC)',
    type: 'standard',
    price: 1100000,
    priceLabel: 'Rp 1.100.000',
    size: 15,
    description: 'Kamar nyaman Non-AC khusus mahasiswi/karyawati dengan ventilasi udara yang baik, suasana sejuk dan asri. Sudah termasuk listrik dan air.',
    images: [
      '/galery/Kamar1.jpeg',
      '/galery/Kamar2.jpeg',
      '/galery/Kamar3.jpeg',
      '/galery/Kamar4.jpeg',
      '/galery/WhatsApp Image 2026-07-19 at 14.35.22.jpeg',
    ],
    facilities: ['Kamar Mandi Dalam', 'Closet Jongkok', 'Kasur / Tempat Tidur', 'Lemari Pakaian', 'Meja & Kursi Belajar', 'WiFi 150 Mbps', 'Sudah Include Listrik & Air'],
    available: true,
    floor: 2,
    maxOccupants: 1,
    rating: 5.0,
    reviewCount: 1,
    badge: 'Hemat',
    featured: true,
  },
  {
    id: 'r-02',
    name: 'Kamar Deluxe (With AC)',
    type: 'deluxe',
    price: 1500000,
    priceLabel: 'Rp 1.500.000',
    size: 15,
    description: 'Kamar eksklusif dilengkapi AC khusus mahasiswi/karyawati dengan suasana sejuk dan nyaman. Sudah termasuk listrik dan air.',
    images: [
      '/galery/Kamar3.jpeg',
      '/galery/Kamar4.jpeg',
      '/galery/Kamar1.jpeg',
      '/galery/Kamar2.jpeg',
      '/galery/WhatsApp Image 2026-07-19 at 14.35.23.jpeg',
    ],
    facilities: ['AC (Air Conditioner)', 'Kamar Mandi Dalam', 'Closet Jongkok', 'Kasur / Tempat Tidur', 'Lemari Pakaian', 'Meja & Kursi Kerja', 'WiFi 150 Mbps', 'Sudah Include Listrik & Air'],
    available: true,
    floor: 2,
    maxOccupants: 1,
    rating: 5.0,
    reviewCount: 1,
    badge: 'Favorit',
    featured: true,
  }
];

export const getFeaturedRooms = () => rooms.filter((r) => r.featured);
export const getAvailableRooms = () => rooms.filter((r) => r.available);
export const getRoomById = (id: string) => rooms.find((r) => r.id === id);
