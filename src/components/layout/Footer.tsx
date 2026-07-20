import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, ExternalLink, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Kamar & Harga', path: '/rooms' },
  { label: 'Fasilitas', path: '/facilities' },
  { label: 'Galeri', path: '/gallery' },
  { label: 'Tentang Kami', path: '/about' },
  { label: 'Hubungi Kami', path: '/contact' },
];

const roomLinks = [
  { label: 'Kamar Standard (Non-AC)', path: '/rooms?type=standard' },
  { label: 'Kamar Deluxe (AC)', path: '/rooms?type=deluxe' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-t border-base-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                <img src="/griya_matahari_logo.png" alt="Logo Teduh Kost Matahari" className="w-full h-full object-contain p-0.5" />
              </div>
              <div>
                <p className="font-bold text-base-content" style={{ fontFamily: 'Poppins, sans-serif' }}>Teduh Kost Matahari</p>
                <p className="text-xs text-base-content/60">Kost Nyaman & Modern</p>
              </div>
            </div>
            <p className="text-sm text-base-content/70 leading-relaxed mb-6">
              Hunian terbaik untuk mahasiswa dan profesional muda. Nyaman, aman, bersih, dan terjangkau dengan fasilitas lengkap.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="https://instagram.com/teduhkostmatahari" target="_blank" rel="noopener noreferrer"
                className="btn btn-ghost btn-circle btn-sm hover:bg-pink-500 hover:text-white transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base-content mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Menu Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}
                    className="text-sm text-base-content/60 hover:text-primary transition-colors flex items-center gap-1 group">
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Room Types */}
          <div>
            <h3 className="font-semibold text-base-content mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Tipe Kamar</h3>
            <ul className="space-y-2">
              {roomLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}
                    className="text-sm text-base-content/60 hover:text-primary transition-colors flex items-center gap-1 group">
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base-content mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Informasi Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Teduh Kost Matahari<br />
                  Jl. Matahari, Semarapura Kelod<br />
                  Kec. Klungkung, Kab. Klungkung<br />
                  Bali 80716 (F94W+RP4)
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <a href="tel:+628124605815" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                    +62 812-4605-815 (Ayu Sri)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <a href="tel:+628970474149" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                    +62 897-0474-149 (Kuswara)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:teduhkostmatahari@gmail.com" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                  teduhkostmatahari@gmail.com
                </a>
              </li>
            </ul>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/628124605815?text=Halo%20Teduh%20Kost%20Matahari%2C%20saya%20ingin%20bertanya%20tentang%20kamar."
              target="_blank" rel="noopener noreferrer"
              className="mt-4 btn btn-success btn-sm w-full gap-2 rounded-xl"
            >
              <span>💬</span> Chat WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300 bg-base-300/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-base-content/50">
            © {currentYear} Teduh Kost Matahari. Semua hak dilindungi.
          </p>
          <p className="text-xs text-base-content/50 flex items-center gap-1">
            Dibuat dengan <Heart size={12} className="text-red-400 fill-red-400" /> untuk kenyamanan Anda
          </p>
        </div>
      </div>
    </footer>
  );
}
