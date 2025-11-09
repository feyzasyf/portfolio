import ProgressBar from './ProgressBar';
type CVItem = {
  company: string;
  date: string;
  description: string;
  experience: {
    date: string;
    position: string;
    details: string[];
  }[];
};
const cv: CVItem[] = [
  {
    company: 'Denebunu',
    date: 'DEC 2022 - SEP 2025',
    description:
      'Denebunu is the creator of Sorbunu, A next-gen market research SaaS platform used by brands in Turkey and the UK.',
    experience: [
      {
        date: 'DEC 2022 - FEB 2024',
        position: 'Junior Frontend Developer',
        details: [
          'Played a key role in preparing Sorbunu for launch in March 2023 by helping design major features and implementing core UI components.',
          'Collaborated with senior developers to build scalable, reusable frontend architecture using React, Typescript and Redux (RTK).',
          'Implemented internationalization (i18n), enabling seamless multilingual support for UK and Turkish audiences.',
        ],
      },
      {
        date: 'FEB 2022 - AUG 2024',
        position: 'Frontend Developer',
        details: [
          'Built and maintained the front end of Sorbunu using React, TypeScript, Tailwind CSS, and Redux (RTK), delivering a responsive and performant user experience.',
          'Collaborated with design, backend, and customer success teams to translate business requirements into intuitive user interfaces.',
          'Led the team to build responsive SPA microsites using Next.js, translating Figma UI/UX design wireframes into code.',
          'Handled testing, debugging, refactoring, and performance tuning to maintain code quality and reduce technical debt.',
        ],
      },
      {
        date: 'AUG 2024 - SEP 2025',
        position: 'Fullstack Developer',
        details: [
          'Took ownership of backend development for Sorbunu, designing REST APIs, handling backend debugging, and collaborating on data modeling with Django/Python with PostgreSQL.',
          'Contributed to the development of a large-scale B2B dashboard — a unified platform aggregating all of Denebunu’s business-facing services — built with React, TypeScript, Tailwind CSS (Catalyst), and Redux (RTK).',
        ],
      },
    ],
  },
];
type ResumePartProps = {
  date: string;
  position: string;
  details: string[];
};

function ResumePart({ date, position, details }: ResumePartProps) {
  return (
    <div className='relative'>
      <ProgressBar />
      <div className='pl-8 sm:pl-4 relative flex flex-col gap-2 sm:flex-row '>
        <div className='basis-auto sm:basis-xs mr-8 dark:text-gray-600'>
          <p className='text-xl sm:text-3xl'>{date}</p>
          <h3 className='dark:text-gray-500 text-xl'>{position}</h3>
        </div>
        <ul className='basis-auto sm:basis-lg flex gap-2 flex-col list-disc list-outside'>
          {details.map((detail, index) => (
            <li key={index}>
              <p className='text-sm sm:text-base'>{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const CompanyDetails = ({ item }: { item: CVItem }) => {
  return (
    <div>
      <div className='flex flex-row gap-4'>
        <div className='rounded-full w-6 h-6 bg-green-700 mt-1 shrink-0'></div>
        <div className='flex flex-col gap-1'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2'>
            <h3 className='inline text-2xl sm:text-3xl dark:text-gray-400 text-gray-800'>
              {item.company}
            </h3>
            <time className='inline text-lg sm:text-3xl text-gray-600 float-right'>
              {item.date}
            </time>
          </div>
          <p className='text-sm sm:text-base'>{item.description}</p>
        </div>
      </div>

      {item.experience.map((exp, index) => (
        <div key={index} className='pl-4 sm:pl-12 py-4 sm:py-6'>
          <ResumePart
            key={index}
            date={exp.date}
            position={exp.position}
            details={exp.details}
          />
        </div>
      ))}
    </div>
  );
};
export default function ResumeList() {
  return (
    <div className='flex flex-col gap-16 mb-16'>
      {cv.map((item, index) => (
        <CompanyDetails key={index} item={item} />
      ))}
    </div>
  );
}
