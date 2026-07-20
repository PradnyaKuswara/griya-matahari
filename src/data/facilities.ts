import type { Facility, StatItem, ThemeOption } from '../types';

export const facilities: Facility[] = [
  // Fasilitas Utama
  { id: 'f-01', name: 'WiFi 150 Mbps', description: 'Koneksi internet fiber optik cepat, stabil 24 jam untuk seluruh penghuni', icon: 'Wifi', category: 'utama' },
  { id: 'f-02', name: 'Parkir Nyaman', description: 'Area parkir motor yang aman, teduh, dan terpantau', icon: 'ParkingCircle', category: 'utama' },
  { id: 'f-03', name: 'Akses 24 Jam', description: 'Kebebasan akses keluar-masuk kost kapan saja dengan kunci gerbang sendiri', icon: 'Clock', category: 'utama' },
  { id: 'f-04', name: 'Pemandangan Asri', description: 'Pemandangan alam yang sejuk, hijau, tenang, dan menyegarkan', icon: 'Trees', category: 'utama' },
  { id: 'f-05', name: 'Kamar Mandi Dalam', description: 'Setiap kamar memiliki kamar mandi dalam dengan closet jongkok', icon: 'ShowerHead', category: 'utama' },
  { id: 'f-06', name: 'Lingkungan Aman & Nyaman', description: 'Lingkungan khusus putri yang tenang, kondusif, dan terjaga keamanannya', icon: 'Shield', category: 'utama' },
  // Fasilitas Kamar
  { id: 'f-07', name: 'AC / Non-AC', description: 'Pilihan kamar dengan AC (Deluxe) atau Non-AC (Standard)', icon: 'Wind', category: 'kamar' },
  { id: 'f-08', name: 'Tempat Tidur', description: 'Tempat tidur nyaman lengkap dengan kasur berkualitas', icon: 'Bed', category: 'kamar' },
  { id: 'f-09', name: 'Meja Kerja/Belajar', description: 'Dilengkapi meja dan kursi yang nyaman untuk produktivitas Anda', icon: 'Laptop', category: 'kamar' },
  { id: 'f-10', name: 'Lemari Pakaian', description: 'Lemari pakaian kayu/modern untuk penyimpanan yang rapi', icon: 'ChefHat', category: 'kamar' },
  // Fasilitas Keamanan
  { id: 'f-11', name: 'CCTV Terpantau', description: 'Area kost dilengkapi dengan kamera pengawas CCTV untuk memantau keamanan 24 jam', icon: 'Camera', category: 'keamanan' },
  { id: 'f-12', name: 'Gerbang Kunci Sendiri', description: 'Akses gerbang utama yang aman dengan kunci yang dipegang masing-masing penghuni', icon: 'Shield', category: 'keamanan' },
];

export const stats: StatItem[] = [
  { label: 'Kamar Tersedia', value: 2, suffix: '', icon: 'BedDouble' },
  { label: 'WiFi Speed', value: 150, suffix: ' Mbps', icon: 'Wifi' },
  { label: 'Keamanan', value: 24, suffix: ' Jam', icon: 'Shield' },
  { label: 'Rating Kepuasan', value: 5.0, suffix: ' ★', icon: 'Star' },
];

export const themeOptions: ThemeOption[] = [
  { value: 'light', label: 'Light', emoji: '☀️' },
  { value: 'dark', label: 'Dark', emoji: '🌙' },
  { value: 'cupcake', label: 'Cupcake', emoji: '🧁' },
  { value: 'emerald', label: 'Emerald', emoji: '💚' },
  { value: 'cyberpunk', label: 'Cyberpunk', emoji: '🤖' },
  { value: 'valentine', label: 'Valentine', emoji: '💕' },
  { value: 'garden', label: 'Garden', emoji: '🌸' },
  { value: 'aqua', label: 'Aqua', emoji: '🌊' },
  { value: 'lofi', label: 'Lo-Fi', emoji: '🎵' },
  { value: 'pastel', label: 'Pastel', emoji: '🎨' },
  { value: 'fantasy', label: 'Fantasy', emoji: '🔮' },
  { value: 'dracula', label: 'Dracula', emoji: '🧛' },
  { value: 'luxury', label: 'Luxury', emoji: '👑' },
  { value: 'night', label: 'Night', emoji: '🌃' },
  { value: 'coffee', label: 'Coffee', emoji: '☕' },
  { value: 'winter', label: 'Winter', emoji: '❄️' },
  { value: 'dim', label: 'Dim', emoji: '🔅' },
  { value: 'nord', label: 'Nord', emoji: '🏔️' },
  { value: 'sunset', label: 'Sunset', emoji: '🌅' },
];
