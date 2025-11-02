'use client';
import { SparklesCore } from './ui/shadcn-io/sparkles';
import usePageVisibility from '@/hooks/usePageVisibility';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { useTheme } from 'next-themes';

export default function SparklesAnimation() {
  const { isVisible } = usePageVisibility();
  const prefersReducedMotion = usePrefersReducedMotion();
  const { theme } = useTheme();
  if (!isVisible || prefersReducedMotion) return null;
  return (
    <div className='w-full absolute inset-0 h-screen'>
      <SparklesCore
        id='tsparticlescolorful'
        background='transparent'
        minSize={0.6}
        maxSize={2.4}
        particleDensity={30}
        className='w-full h-full'
        particleColor={theme === 'dark' ? '#00ff00' : '#000000'}
        speed={0.5}
      />
    </div>
  );
}
