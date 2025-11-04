import DownArrow from '@/components/DownArrow';
import { Bitcount_Grid_Single } from 'next/font/google';

const bitcountSingle = Bitcount_Grid_Single({
  weight: '400',
  variable: '--font-bitcount-grid-single',
  subsets: ['latin'],
  fallback: ['geist-sans'],
});

export default function Landing() {
  return (
    <section
      id='home'
      className={`flex min-h-screen w-full max-w-5xl flex-col items-center justify-center py-32 px-16 z-20 ${bitcountSingle.variable}`}
    >
      <div className=''>
        <h2 className='font-semibold font-plain text-2xl sm:text-3xl'>
          Hello, I&apos;m
        </h2>
        <h1 className='text-5xl  md:text-7xl lg:text-9xl font-funky'>
          Feyza Seyfi
        </h1>
        <h2 className='text-right font-semibold font-plain text-xl sm:text-2xl'>
          A passionate web developer.
        </h2>
      </div>
      <div className='absolute bottom-10'>
        <DownArrow sectionName='about' />
      </div>
    </section>
  );
}
