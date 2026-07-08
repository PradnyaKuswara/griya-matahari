import type { Room } from '../types';

export const rooms: Room[] = [
  {
    id: 'r-01',
    name: 'Kamar Standard (Non-AC)',
    type: 'standard',
    price: 1100000,
    priceLabel: 'Rp 1.100.000',
    size: 15,
    description: 'Kamar nyaman Non-AC khusus mahasiswi/karyawati dengan pemandangan alam yang sejuk dan asri. Sudah termasuk listrik dan air.',
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
      'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80',
    ],
    facilities: ['Kamar Mandi Dalam', 'Closet Jongkok', 'Kasur / Tempat Tidur', 'Lemari Pakaian', 'Meja & Kursi Belajar', 'WiFi 75 Mbps', 'Sudah Include Listrik & Air'],
    available: true,
    floor: 1,
    maxOccupants: 1,
    rating: 4.8,
    reviewCount: 12,
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
    description: 'Kamar eksklusif dilengkapi AC khusus mahasiswi/karyawati dengan ventilasi yang baik dan pemandangan alam sejuk. Sudah termasuk listrik dan air.',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    ],
    facilities: ['AC (Air Conditioner)', 'Kamar Mandi Dalam', 'Closet Jongkok', 'Kasur / Tempat Tidur', 'Lemari Pakaian', 'Meja & Kursi Kerja', 'WiFi 75 Mbps', 'Sudah Include Listrik & Air'],
    available: true,
    floor: 1,
    maxOccupants: 1,
    rating: 4.9,
    reviewCount: 15,
    badge: 'Favorit',
    featured: true,
  }
];

export const getFeaturedRooms = () => rooms.filter((r) => r.featured);
export const getAvailableRooms = () => rooms.filter((r) => r.available);
export const getRoomById = (id: string) => rooms.find((r) => r.id === id);
