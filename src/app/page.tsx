import About from '@/components/About';
import { FlipWords } from '@/components/ui/shadcn-io/flip-words';
const words = ['developer.', 'designer.', 'creator.'];
export default function Home() {
  return (
    <div className='flex flex-col items-center w-full font-sans'>
      <section
        id='home'
        className='flex min-h-screen w-full max-w-5xl flex-col items-center justify-center py-32 px-16 z-20'
      >
        <div>
          <h2 className='pl-2'>Hello, I&apos;m</h2>
          <h1 className='text-9xl font-funky'>Feyza Seyfi</h1>
          <h2 className='text-right'>
            A passionate
            <FlipWords
              words={words}
              duration={2500}
              className='text-green-500 font-semibold'
            />
          </h2>
        </div>
      </section>
      <About />
    </div>
  );
}
