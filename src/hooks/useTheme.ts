import { useState, useEffect, useCallback } from 'react';
import type { DaisyTheme } from '../types';

const THEME_STORAGE_KEY = 'teduh-kost-matahari-theme';

const LIGHT_THEME: DaisyTheme = 'winter';
const DARK_THEME: DaisyTheme = 'forest';

export function useTheme() {
  const [theme, setTheme] = useState<DaisyTheme>(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as DaisyTheme | null;
    if (saved) return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? DARK_THEME : LIGHT_THEME;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleDarkLight = useCallback(() => {
    setTheme((prev) => (prev === DARK_THEME ? LIGHT_THEME : DARK_THEME));
  }, []);

  const isDark = theme === DARK_THEME;

  return { theme, setTheme, toggleDarkLight, isDark };
}
