import DownArrow from '@/components/DownArrow';
import DownloadButton from '@/components/DownloadButton';
import ResumeList from '@/components/ResumeList';

export default function Resume() {
  return (
    <section
      id='work'
      className='min-h-screen w-full flex  justify-center relative pt-24 px-8'
    >
      <div className='max-w-5xl w-full relative'>
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-12 '>
          <h2 className='text-3xl sm:text-4xl font-bold mb-0 sm:mb-8'>
            My Work Experience
          </h2>
          <div className='w-1/2 sm:w-auto'>
            <DownloadButton />
          </div>
        </div>
        <div className=''>
          <ResumeList />
        </div>
      </div>
      <div className='absolute hidden sm:block bottom-10'>
        <DownArrow sectionName='projects' />
      </div>
    </section>
  );
}
