import About from '@/app/sections/About';
import Landing from './sections/Landing';
import Resume from './sections/Resume';
import ThanksMessage from './sections/ThanksMessage';
import { Toaster } from 'react-hot-toast';
import ScrollUp from '@/components/ScrollUp';

export default function Home() {
  return (
    <div className='flex flex-col items-center w-full font-sans relative'>
      <Toaster position='bottom-center' />
      <Landing />
      <About />
      <Resume />
      <ThanksMessage />
      <div className='w-full max-w-5xl relative'>
        <ScrollUp />
      </div>
    </div>
  );
}
