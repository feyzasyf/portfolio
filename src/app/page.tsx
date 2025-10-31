import { FlipWords } from '@/components/ui/shadcn-io/flip-words';
const words = ['developer.', 'designer.', 'creator.'];
export default function Home() {
  return (
    <div className='flex flex-col items-center w-full font-sans'>
      <section className='flex min-h-screen w-full max-w-5xl flex-col items-center justify-center py-32 px-16'>
        <div>
          <h2 className='pl-2'>Hello, I&apos;m</h2>
          <h1 className='text-9xl '>Feyza Seyfi</h1>
          <h2 className='text-right'>
            A passionate{' '}
            <FlipWords
              words={words}
              duration={2500}
              className='text-green-500 font-semibold'
            />
          </h2>
        </div>
      </section>
      <section className='min-h-screen w-full flex items-center justify-center'>
        <div className='max-w-5xl w-full px-16'>
          <h2 className='text-4xl font-bold mb-8'>About Me</h2>
        </div>
      </section>
    </div>
  );
}
