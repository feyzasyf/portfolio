import About from '@/app/sections/About';
import DownArrow from '@/components/DownArrow';
import { FlipWords } from '@/components/ui/shadcn-io/flip-words';
import Resume from './sections/Resume';

const words = ['developer.', 'designer.', 'creator.'];

export default function Home() {
  return (
    <div className='flex flex-col items-center w-full font-sans'>
      <section
        id='home'
        className='flex min-h-screen w-full max-w-5xl flex-col items-center justify-center py-32 px-16 z-20'
      >
        <div className=''>
          <h2 className='font-semibold font-plain text-2xl sm:text-3xl'>
            Hello, I&apos;m
          </h2>
          <h1 className='text-6xl  md:text-7xl lg:text-9xl font-funky'>
            Feyza Seyfi
          </h1>
          <h2 className='text-right font-semibold font-plain text-xl sm:text-2xl'>
            A passionate
            {/* <FlipWords
              words={words}
              duration={2500}
              className='text-green-500 font-semibold'
            /> */}
          </h2>
        </div>
        <div className='absolute bottom-10'>
          <DownArrow sectionName='about' />
        </div>
      </section>

      <About />
      <Resume />
    </div>
  );
}
