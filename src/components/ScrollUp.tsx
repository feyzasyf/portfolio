'use client';
import { ArrowUp } from 'lucide-react';

export default function ScrollUp() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='hidden sm:flex hover:scale-110 hover:animate-none duration-300 animate-pulse motion-reduce:transition-none absolute bottom-6 right-6 h-12 w-12 rounded-full justify-center items-center bg-gray-400/40  '>
      <button className='cursor-pointer ' onClick={scrollToTop}>
        {' '}
        <ArrowUp className='w-8 h-8 ' />
      </button>
    </div>
  );
}
