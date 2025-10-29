'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  ThemeToggleButton,
  useThemeTransition,
} from './ui/shadcn-io/theme-toggle-button';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { startTransition } = useThemeTransition();
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleThemeToggle = useCallback(() => {
    // If the user hasn't chosen a preference (theme === 'system'), base the toggle on the
    // currently resolved theme (the one actually applied by the system).
    const base =
      theme === 'system' || theme === undefined ? resolvedTheme : theme;
    const newMode: 'light' | 'dark' = base === 'dark' ? 'light' : 'dark';

    startTransition(() => {
      setTheme(newMode);
    });
  }, [setTheme, startTransition, theme, resolvedTheme]);

  const currentTheme =
    (resolvedTheme as 'light' | 'dark' | undefined) ?? 'light';

  if (!mounted || resolvedTheme === undefined) {
    return null;
  }

  return (
    <ThemeToggleButton
      theme={currentTheme}
      onClick={handleThemeToggle}
      variant='circle-blur'
      start='top-right'
    />
  );
}
