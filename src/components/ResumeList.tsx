import React from 'react';

const cv = [
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
];
type ResumePartProps = {
  date: string;
  position: string;
  details: string[];
};

function ResumePart({ date, position, details }: ResumePartProps) {
  return (
    <div className='flex flex-col gap-2 sm:flex-row  '>
      <div className='basis-auto sm:basis-xs mr-8 text-gray-600 '>
        <p className='text-3xl'>{date}</p>
        <h3 className='text-gray-500 text-xl'>{position}</h3>
      </div>
      <ul className='basis-auto sm:basis-lg flex gap-2 flex-col list-disc list-outside'>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
export default function ResumeList() {
  return (
    <div className='flex flex-col gap-16 mb-32'>
      {cv.map((item, index) => (
        <ResumePart
          key={index}
          date={item.date}
          position={item.position}
          details={item.details}
        />
      ))}
    </div>
  );
}
