import { useState, useEffect, useCallback } from 'react';
import type { DaisyTheme } from '../types';

const THEME_STORAGE_KEY = 'tedung-kost-matahari-theme';

export function useTheme() {
  const [theme, setTheme] = useState<DaisyTheme>(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as DaisyTheme | null;
    if (saved) return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleDarkLight = useCallback(() => {
    setTheme((prev) => {
      const isDark = ['dark', 'night', 'dracula', 'luxury', 'coffee', 'dim', 'cyberpunk'].includes(prev);
      return isDark ? 'light' : 'dark';
    });
  }, []);

  const isDark = ['dark', 'night', 'dracula', 'luxury', 'coffee', 'dim', 'cyberpunk'].includes(theme);

  return { theme, setTheme, toggleDarkLight, isDark };
}
