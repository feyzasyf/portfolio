'use client';

import { ChevronDown } from 'lucide-react';

type DownArrowProps = {
  sectionName: 'about' | 'resume' | 'work' | 'projects';
};

export default function DownArrow({ sectionName }: DownArrowProps) {
  const goToSection = (sectionName: DownArrowProps['sectionName']) => {
    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <button
      type='button'
      onClick={() => goToSection(sectionName)}
      aria-label={`Scroll down to ${sectionName} section`}
      className='p-2 hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-green-500 focus:outline-none motion-reduce:animate-none'
    >
      <ChevronDown
        className='w-6 h-6 text-black dark:text-white  animate-bounce motion-reduce:animate-none motion-reduce:opacity-70
          transition-opacity'
        aria-hidden='true'
      />
      <span className='sr-only'>Scroll down to next section</span>
    </button>
  );
}
