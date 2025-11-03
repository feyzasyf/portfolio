import About from '@/app/sections/About';
import Landing from './sections/Landing';
import Resume from './sections/Resume';

export default function Home() {
  return (
    <div className='flex flex-col items-center w-full font-sans'>
      <Landing />
      <About />
      <Resume />
    </div>
  );
}
