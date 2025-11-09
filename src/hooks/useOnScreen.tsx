import { useState, useEffect } from 'react';

export default function useOnScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('end-of-content');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible;
}
