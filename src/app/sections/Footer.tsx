import SocialLinks from '@/components/SocialLinks';
import React from 'react';

export default function Footer() {
  return (
    <section className='w-full pb-3 text-sm '>
      <div className='mb-4 bg-linear-to-r from-transparent via-green-800 to-transparent h-px w-full' />
      <div className='wrapper pb-4 '>
        <p className='hidden sm:block sm:basis-1/3'>
          No AI has been involved in making of this website
        </p>

        <div className='basis-1/3 flex justify-center'>
          <SocialLinks />
        </div>
        <p className='basis-1/3 text-right'>© 2025 Feyza.</p>
      </div>
    </section>
  );
}
