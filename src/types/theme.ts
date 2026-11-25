export type ThemeMode = 'light' | 'dark' | 'dark-grey';

export const THEME_STORAGE_KEY = 'aairi-theme';

export const THEME_OPTIONS: readonly {
  value: ThemeMode;
  label: string;
  description: string;
}[] = [
  { value: 'light', label: 'Light', description: 'Clean institutional light theme' },
  { value: 'dark', label: 'Dark', description: 'High-contrast cinematic dark theme' },
  { value: 'dark-grey', label: 'Dark Grey', description: 'Charcoal corporate grey theme' },
];
