import DownArrow from '../../components/DownArrow';
import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';

export default function About() {
  return (
    <section
      id='about'
      className='min-h-screen w-full flex items-center justify-center relative px-8 sm:px-16 pb-0 sm:pb-12'
    >
      <div className='sm:max-w-5xl py-4 sm:py-8 px-4 sm:px-8 sm:pl-16 section-background'>
        <div className=' flex flex-row gap-8 '>
          <div className='w-full lg:w-2/3 flex flex-col items-center lg:items-start mt-8'>
            <h2 className='text-4xl sm:text-6xl font-bold mb-8'>About Me</h2>
            <div className='flex lg:hidden -mt-20 justify-center items-center'>
              <Image
                src='/ben.png'
                alt='Pixel Picture of me'
                width={200}
                height={200}
                unoptimized
              />
            </div>
            <div className='-mt-10 sm:mt-0 text-sm sm:text-base px-4 sm:px-0'>
              <p className='mt-4'>
                Hey there! I’m a web developer who loves building things for the
                web and constantly learning new ways to do it better. Most of my
                experience is on the front end with React, TypeScript, and
                Redux, but I’ve also worked with Python and Django on the back
                end and I’m exploring more full-stack development.
              </p>
              <p className='mt-6'>
                I like experimenting with different tools like Vue, Svelte, C#,
                Rust, anything that teaches me something new. When I’m not
                coding, I’m usually watching Chinese dramas or playing adventure
                games.
              </p>
              <p className='mt-6'>
                I’m always open to collaborating on open-source projects and I
                am in the belief that technology should empower people, not
                dominate them.
              </p>
            </div>
          </div>
          <div className='hidden lg:flex shrink-0 justify-center items-center w-1/2 lg:w-1/3'>
            <Image
              src='/ben.png'
              alt='Pixel Picture of me'
              width={500}
              height={500}
              unoptimized
            />
          </div>
        </div>
        <div className='flex flex-row items-center px-4 sm:px-0 gap-4 mb-8 mt-4 sm:mt-12 text-sm sm:text-base'>
          <span>Connect with me:</span>
          <SocialLinks />
        </div>
      </div>
      <div className='absolute hidden sm:block bottom-4'>
        <DownArrow sectionName='work' />
      </div>
    </section>
  );
}
