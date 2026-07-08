// Room types
export interface RoomFacility {
  id: string;
  name: string;
  icon: string;
}

export interface Room {
  id: string;
  name: string;
  type: 'standard' | 'deluxe' | 'premium' | 'vip';
  price: number;
  priceLabel: string;
  size: number;
  description: string;
  images: string[];
  facilities: string[];
  available: boolean;
  floor: number;
  maxOccupants: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  featured?: boolean;
}

// Facility types
export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'utama' | 'kamar' | 'keamanan' | 'tambahan';
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  occupation: string;
  avatar: string;
  rating: number;
  review: string;
  duration: string;
  roomType: string;
}

// Gallery types
export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: 'kamar' | 'fasilitas' | 'eksterior' | 'interior';
}

// Navigation types
export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

// Theme types
export type DaisyTheme =
  | 'light'
  | 'dark'
  | 'cupcake'
  | 'emerald'
  | 'cyberpunk'
  | 'valentine'
  | 'garden'
  | 'aqua'
  | 'lofi'
  | 'pastel'
  | 'fantasy'
  | 'dracula'
  | 'luxury'
  | 'night'
  | 'coffee'
  | 'winter'
  | 'dim'
  | 'nord'
  | 'sunset';

export interface ThemeOption {
  value: DaisyTheme;
  label: string;
  emoji: string;
}

// Contact form
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  roomType?: string;
}

// Stats
export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}
