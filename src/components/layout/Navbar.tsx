import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Palette, Home, BedDouble, Sparkles, Image, Phone, Info } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useScrollPosition } from '../../hooks/useUtils';
// import { themeOptions } from '../../data/facilities';
// import ThemeSelector from '../ui/ThemeSelector';

const navItems = [
  { label: 'Beranda', path: '/', icon: Home },
  { label: 'Kamar', path: '/rooms', icon: BedDouble },
  { label: 'Fasilitas', path: '/facilities', icon: Sparkles },
  { label: 'Galeri', path: '/gallery', icon: Image },
  { label: 'Tentang Kami', path: '/about', icon: Info },
  { label: 'Kontak', path: '/contact', icon: Phone },
];

export default function Navbar() {
  const { theme, toggleDarkLight, isDark, setTheme } = useTheme();
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setThemeOpen(false);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    const handleClick = () => setThemeOpen(false);
    if (themeOpen) {
      setTimeout(() => document.addEventListener('click', handleClick), 10);
    }
    return () => document.removeEventListener('click', handleClick);
  }, [themeOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'navbar-blur bg-base-100/80 shadow-lg border-b border-base-300/50'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg group-hover:shadow-orange-400/50 transition-shadow duration-300">
                  <img src="/griya_matahari_logo.png" alt="Logo Teduh Kost Matahari" className="w-full h-full object-contain p-0.5" />
                </div>
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-base-content leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Teduh Kost Matahari
                </p>
                <p className="text-xs text-base-content/60 leading-none">Hunian Nyaman & Modern</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Selector */}
              {/* <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  id="theme-toggle-btn"
                  onClick={() => setThemeOpen(!themeOpen)}
                  className="btn btn-ghost btn-circle btn-sm"
                  title="Pilih Tema"
                >
                  <Palette size={18} />
                </button>
                <AnimatePresence>
                  {themeOpen && (
                    <ThemeSelector
                      themes={themeOptions}
                      currentTheme={theme}
                      onSelect={(t) => { setTheme(t); setThemeOpen(false); }}
                    />
                  )}
                </AnimatePresence>
              </div> */}

              {/* Dark/Light Toggle */}
              <button
                id="dark-light-toggle-btn"
                onClick={toggleDarkLight}
                className="btn btn-ghost btn-circle btn-sm"
                title={isDark ? 'Mode Terang' : 'Mode Gelap'}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Sun size={18} />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Moon size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* CTA Button (Desktop) */}
              <Link
                to="/contact"
                className="hidden lg:flex btn btn-primary btn-sm rounded-xl gap-2 shadow-md hover:shadow-primary/40 hover:scale-105 transition-all duration-200"
              >
                Hubungi Kami
              </Link>

              {/* Mobile Menu Button */}
              <button
                id="mobile-menu-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden btn btn-ghost btn-circle btn-sm"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 navbar-blur bg-base-100/95 border-b border-base-300 shadow-xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive ? 'bg-primary text-primary-content' : 'hover:bg-base-200 text-base-content'
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-2 pt-2 border-t border-base-300">
                <Link to="/contact" className="btn btn-primary w-full rounded-xl">
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
