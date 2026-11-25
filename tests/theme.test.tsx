import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import { ThemeSwitcher } from '@/features/theme/ThemeSwitcher';
import { useThemeStore } from '@/features/theme/useThemeStore';
import { THEME_STORAGE_KEY } from '@/types/theme';

describe('Three-theme system', () => {
  beforeEach(() => {
    window.localStorage.clear();
    useThemeStore.getState().initTheme();
  });

  it('defaults to dark theme and switches across dark, light, and dark-grey', async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    await user.click(screen.getByRole('button', { name: /institutional light/i }));
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');

    await user.click(screen.getByRole('button', { name: /charcoal corporate grey/i }));
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark-grey');
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark-grey');
  });
});
