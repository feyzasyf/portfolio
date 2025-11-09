import DownloadButton from '@/components/DownloadButton';
import ResumeList from '@/components/ResumeList';

export default function Resume() {
  return (
    <section
      id='work'
      aria-labelledby='work-heading'
      className='min-h-screen w-full flex justify-center relative pt-18 sm:pt-24 px-8 sm:px-16'
    >
      <div className='max-w-5xl w-full relative'>
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-12 '>
          <h2
            id='work-heading'
            className='text-3xl sm:text-4xl font-bold mb-0 sm:mb-8'
          >
            My Work Experience
          </h2>
          <div className='w-1/2 sm:w-auto'>
            <DownloadButton />
          </div>
        </div>
        <div>
          <ResumeList />
        </div>
      </div>
    </section>
  );
}
