import { create } from 'zustand';
import { THEME_STORAGE_KEY, type ThemeMode } from '@/types/theme';

interface ThemeState {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  initTheme: () => void;
}

const isValidTheme = (value: string | null): value is ThemeMode =>
  value === 'light' || value === 'dark' || value === 'dark-grey';

const applyThemeToDom = (theme: ThemeMode): void => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
  }
};

const readStoredTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'dark';
  }
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isValidTheme(stored) ? stored : 'dark';
  } catch {
    return 'dark';
  }
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: readStoredTheme(),
  setTheme: (theme) => {
    applyThemeToDom(theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage failures in restricted contexts
    }
    set({ theme });
  },
  initTheme: () => {
    const resolved = readStoredTheme();
    applyThemeToDom(resolved);
    set({ theme: resolved });
  },
}));
