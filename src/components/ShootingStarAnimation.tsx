'use client';

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { ShootingStars } from './ui/shadcn-io/shooting-stars';
import usePageVisibility from '@/hooks/usePageVisibility';

export default function ShootingStarAnimation() {
  const { isVisible } = usePageVisibility();
  const prefersReducedMotion = usePrefersReducedMotion();

  if (!isVisible || prefersReducedMotion) return null;
  return (
    <>
      <ShootingStars
        starColor='#9E00FF'
        trailColor='#2EB9DF'
        minSpeed={15}
        maxSpeed={35}
        minDelay={1200}
        maxDelay={4200}
      />
      <ShootingStars
        starColor='#FF0099'
        trailColor='#FFB800'
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
    </>
  );
}
