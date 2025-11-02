import DownArrow from '@/components/DownArrow';
import DownloadButton from '@/components/DownloadButton';
import ProgressBar from '@/components/ProgressBar';
import ResumeList from '@/components/ResumeList';

export default function Resume() {
  return (
    <section
      id='work'
      className='min-h-screen w-full flex  justify-center relative pt-24'
    >
      <div className='max-w-5xl w-full relative px-16'>
        <ProgressBar />
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-12 '>
          <h2 className='text-4xl font-bold mb-0 sm:mb-8'>
            My Work Experience
          </h2>
          <div className='w-1/2 sm:w-auto'>
            <DownloadButton />
          </div>
        </div>
        <div className='pl-8 sm:pl-0'>
          <ResumeList />
        </div>
      </div>
      <div className='absolute bottom-10'>
        <DownArrow sectionName='projects' />
      </div>
    </section>
  );
}
