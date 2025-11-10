'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  ThemeToggleButton,
  useThemeTransition,
} from './ui/shadcn-io/theme-toggle-button';
import { useTheme } from 'next-themes';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

export default function ThemeToggle() {
  const { startTransition } = useThemeTransition();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleThemeToggle = useCallback(() => {
    const base =
      theme === 'system' || theme === undefined ? resolvedTheme : theme;
    const newMode: 'light' | 'dark' = base === 'dark' ? 'light' : 'dark';

    if (!prefersReducedMotion) {
      startTransition(() => {
        setTheme(newMode);
      });
    } else {
      setTheme(newMode);
    }
  }, [setTheme, startTransition, theme, resolvedTheme, prefersReducedMotion]);

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
