import { Contrast, Moon, Sun } from 'lucide-react';
import { useThemeStore } from './useThemeStore';
import { THEME_OPTIONS, type ThemeMode } from '@/types/theme';

const THEME_ICONS: Record<ThemeMode, typeof Sun> = {
  light: Sun,
  dark: Moon,
  'dark-grey': Contrast,
};

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className = '' }: ThemeSwitcherProps) {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <div
      role="group"
      aria-label="Select colour theme"
      className={`inline-flex items-center rounded-full border border-border bg-surface p-1 shadow-sm ${className}`}
    >
      {THEME_OPTIONS.map((option) => {
        const Icon = THEME_ICONS[option.value];
        const isActive = theme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            aria-label={option.description}
            aria-pressed={isActive}
            title={option.label}
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              isActive
                ? 'bg-primary text-primary-fg'
                : 'text-muted hover:text-fg hover:bg-surface-elevated'
            }`}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
