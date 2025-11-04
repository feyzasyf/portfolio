'use client';
import useOnScreen from '@/hooks/useOnScreen';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

export default function ThanksMessage() {
  const isVisible = useOnScreen();
  const firstRender = useRef(true);

  useEffect(() => {
    if (isVisible && firstRender.current) {
      firstRender.current = false;

      setTimeout(() => {
        toast.custom(() => (
          <div className='bg-white dark:bg-gray-700 shadow-lg mb-2 rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5'>
            <div className='flex items-start p-3'>
              <div className='shrink-0 pt-0.5'>
                <span>🏆</span>
              </div>
              <div className='ml-3 flex-1'>
                <p>Dedication +10</p>
              </div>
            </div>
          </div>
        ));
      }, 800);
    }
  }, [isVisible]);
  return (
    <div
      id='end'
      className={`h-12 text-lg sm:text-3xl mt-4 mb-0 sm:mt-24 sm:mb-4 px-8 font-funky`}
    >
      You’ve reached the end!
    </div>
  );
}
