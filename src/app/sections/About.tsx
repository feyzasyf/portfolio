import DownArrow from '../../components/DownArrow';
import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';

export default function About() {
  return (
    <section
      id='about'
      className='min-h-screen w-full flex items-center justify-center relative px-8 '
    >
      <div className='sm:max-w-5xl  px-8 sm:pl-16 section-background'>
        <div className=' flex flex-row gap-8 '>
          <div className='w-ful sm:w-2/3 flex flex-col items-center sm:items-start mt-8'>
            <h2 className='text-4xl sm:text-6xl font-bold mb-8'>About Me</h2>
            <div className='flex sm:hidden -mt-20 justify-center items-center'>
              <Image
                src='/ben.png'
                alt='Pixel Picture of me'
                width={200}
                height={200}
              />
            </div>
            <div className='-mt-12 sm:mt-0'>
              <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a
                dolores officia atque reiciendis sit eveniet similique quae
                obcaecati eligendi? Quo incidunt vel est nemo porro, repellat
                esse consequuntur sunt.
              </p>
              <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a
                dolores officia atque reiciendis sit eveniet similique quae
                obcaecati eligendi? Quo incidunt vel est nemo porro, repellat
                esse consequuntur sunt.
              </p>
            </div>
          </div>
          <div className='hidden sm:flex shrink-0 justify-center items-center w-1/2'>
            <Image
              src='/ben.png'
              alt='Pixel Picture of me'
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className='flex flex-row items-center gap-4 mb-8 mt-4'>
          <span>Connect with me:</span>
          <SocialLinks />
        </div>
      </div>
      <div className='absolute hidden sm:block bottom-10'>
        <DownArrow sectionName='work' />
      </div>
    </section>
  );
}
