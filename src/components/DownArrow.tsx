'use client';

import { ChevronDown } from 'lucide-react';

type DownArrowProps = {
  sectionName: 'about' | 'resume' | 'projects';
};

export default function DownArrow({ sectionName }: DownArrowProps) {
  const goToSection = (sectionName: DownArrowProps['sectionName']) => {
    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <ChevronDown
        className='w-6 h-6 text-black dark:text-white hover:cursor-pointer animate-bounce'
        onClick={() => goToSection(sectionName)}
      />
    </div>
  );
}
