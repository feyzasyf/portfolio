'use client';

import { useEffect, useState } from 'react';

export default function usePageVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    return () => document.removeEventListener('visibilitychange', () => {});
  }, []);

  return { isVisible };
}
