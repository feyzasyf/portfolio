import SocialLinks from '@/components/SocialLinks';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className='w-full pb-3 text-sm '>
      <div className='mb-4 bg-linear-to-r from-transparent via-green-800 to-transparent h-px w-full' />
      <div className='wrapper pb-4 '>
        <div className='w-32'>
          <Image
            className='float-right'
            src='/heart.png'
            alt='Pixel Heart'
            width={25}
            height={25}
            unoptimized
          />
          <p className='pt-0.5'>Pixel art by me</p>
          <p>© {currentYear} Feyza</p>
        </div>
        <div className='flex justify-center'>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
