'use client';
import { ArrowUp } from 'lucide-react';
import Button from './Button';

export default function ScrollUp() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='hidden sm:flex hover:scale-110 hover:animate-none duration-300 animate-pulse motion-reduce:transition-none motion-reduce:animate-none absolute bottom-6 right-6 h-12 w-12 rounded-full justify-center items-center bg-gray-400/40  '>
      <Button
        aria-label='Scroll to top'
        handleClick={scrollToTop}
        className='cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
      >
        <ArrowUp className='w-8 h-8 ' />
      </Button>
    </div>
  );
}
