import SocialLinks from '@/components/SocialLinks';
import Image from 'next/image';

export default function Footer() {
  return (
    <section className='w-full pb-3 text-sm '>
      <div className='mb-4 bg-linear-to-r from-transparent via-green-800 to-transparent h-px w-full' />
      <div className='wrapper pb-4 '>
        <div className='hidden sm:flex flex-row items-center gap-1 sm:basis-1/3'>
          <p>Pixel art by me</p>
          <Image
            src='/heart.png'
            alt='Pixel Heart'
            width={30}
            height={30}
            unoptimized
          />
        </div>

        <div className='basis-1/3 flex justify-center'>
          <SocialLinks />
        </div>
        <p className='basis-1/3 text-right'>© 2025 Feyza.</p>
      </div>
    </section>
  );
}
