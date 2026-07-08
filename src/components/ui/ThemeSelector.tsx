import { motion } from 'framer-motion';
import type { ThemeOption, DaisyTheme } from '../../types';

interface ThemeSelectorProps {
  themes: ThemeOption[];
  currentTheme: DaisyTheme;
  onSelect: (theme: DaisyTheme) => void;
}

export default function ThemeSelector({ themes, currentTheme, onSelect }: ThemeSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
      transition={{ duration: 0.15 }}
      className="absolute right-0 top-full mt-2 w-56 bg-base-100 border border-base-300 rounded-2xl shadow-2xl z-50 overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-2">
        <p className="text-xs font-semibold text-base-content/50 px-2 py-1 uppercase tracking-wider">Pilih Tema</p>
        <div className="max-h-72 overflow-y-auto scrollbar-thin">
          {themes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => onSelect(theme.value)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all ${
                currentTheme === theme.value
                  ? 'bg-primary text-primary-content font-medium'
                  : 'hover:bg-base-200 text-base-content'
              }`}
            >
              <span className="text-base">{theme.emoji}</span>
              <span>{theme.label}</span>
              {currentTheme === theme.value && (
                <span className="ml-auto text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
