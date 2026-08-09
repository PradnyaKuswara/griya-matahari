import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ShieldCheck, Wifi, Sparkles } from 'lucide-react';

const wallImages = [
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80',
  'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80',
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse move for Cursor Parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Calculate normalized position between -0.5 and 0.5
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove as any);
    return () => window.removeEventListener('mousemove', handleMouseMove as any);
  }, []);

  // Track vertical scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scroll parallax transforms
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const wallY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const wallScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  // Mouse tilt transforms
  const rotateX = mousePos.y * 12; // max 6 degrees tilt
  const rotateY = mousePos.x * -12; // max -6 degrees tilt
  const glowX = mousePos.x * 60;
  const glowY = mousePos.y * 60;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-base-100 py-12 pt-28 lg:pt-36"
      style={{ perspective: 1200 }}
    >
      {/* 3D Glowing Ambient Lights (Orbs) linked to Mouse Position */}
      <motion.div
        animate={{ x: glowX, y: glowY }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-linear-to-br from-yellow-400/20 to-orange-500/25 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: -glowX, y: -glowY }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
        className="absolute bottom-[10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-linear-to-tr from-rose-500/20 to-yellow-500/10 blur-[130px] pointer-events-none"
      />

      {/* Background Interactive Infinite Scrolling Image Wall */}
      <motion.div
        style={{
          y: wallY,
          scale: wallScale,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.15] pointer-events-none flex flex-col justify-center gap-6 select-none"
      >
        {/* Row 1 (Scroll Left) */}
        <div className="flex gap-6 w-[200%] animate-scroll-left">
          {[...wallImages, ...wallImages].map((img, i) => (
            <div key={i} className="w-80 h-48 rounded-2xl overflow-hidden shadow-lg border border-base-300 shrink-0">
              <img src={img} alt="Gallery item" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Row 2 (Scroll Right) */}
        <div className="flex gap-6 w-[200%] ml-[-50%] animate-scroll-right">
          {[...wallImages, ...wallImages].map((img, i) => (
            <div key={i} className="w-80 h-48 rounded-2xl overflow-hidden shadow-lg border border-base-300 shrink-0">
              <img src={img} alt="Gallery item" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Centered Typography Section (Glassmorphism overlay removed, text directly on top) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10 flex flex-col items-center">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="text-center space-y-8 max-w-4xl mx-auto flex flex-col items-center p-4 drop-shadow-[0_2px_15px_rgba(0,0,0,0.15)]"
        >
          {/* Location Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 bg-linear-to-r from-primary/10 to-orange-500/10 border border-primary/20 backdrop-blur-md rounded-2xl px-4 py-2 text-xs sm:text-sm font-bold text-primary">
              <MapPin size={16} className="text-primary animate-bounce" />
              Semarapura Kelod, Klungkung, Bali
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-base-content max-w-3xl"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Hunian Asri & Nyaman<br />
            <span className="bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-sm font-extrabold">
              Teduh Kost Matahari
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg md:text-xl text-base-content/75 leading-relaxed max-w-xl mx-auto font-medium">
            Hunian kos eksklusif yang aman, tenang, dan asri di Bali dengan pemandangan alam indah dan sejuk.
          </p>

          {/* Trust Highlights */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-base-content/85">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-base-200/50 backdrop-blur-sm border border-base-300">
              <ShieldCheck size={14} className="text-primary" />
              <span>Keamanan Aman & Nyaman</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-base-200/50 backdrop-blur-sm border border-base-300">
              <Wifi size={14} className="text-primary" />
              <span>WiFi 150 Mbps</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-base-200/50 backdrop-blur-sm border border-base-300">
              <Sparkles size={14} className="text-primary" />
              <span>Akses 24 Jam</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/rooms"
              className="btn btn-lg btn-primary rounded-2xl gap-2 font-bold px-8 shadow-lg shadow-primary/20 hover:scale-[1.03] transition-transform w-full sm:w-auto"
            >
              Pilih Kamar
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/6281548175522?text=Halo%20Teduh%20Kost%20Matahari%2C%20saya%20tertarik%20tanya%20ketersediaan%20kamar."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-outline border-2 rounded-2xl gap-2 px-8 hover:scale-[1.03] transition-transform w-full sm:w-auto"
            >
              💬 Hubungi WA
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
