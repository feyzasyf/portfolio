import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Button from './Button';
import TechStack from './TechStack';

const socialLinks = [
  {
    name: 'LinkedIn',

    icon: <LinkedInLogoIcon className='w-12 h-12 text-black dark:text-white' />,
    url: 'https://www.linkedin.com/in/feyzaseyfi/',
  },
  {
    name: 'GitHub',
    icon: <GitHubLogoIcon className='w-12 h-12 text-black dark:text-white' />,
    url: 'https://github.com/feyzasyf',
  },
];

export default function About() {
  const downloadCV = async () => {
    'use server';
    console.log('Downloading CV...');
  };
  return (
    <section
      id='about'
      className='min-h-screen w-full flex items-center justify-center'
    >
      <div className='max-w-5xl w-full px-16'>
        <h2 className='text-4xl font-bold mb-8'>About Me</h2>
        <Button handleClick={downloadCV} className='mb-8'>
          Download CV
        </Button>
        <div>
          <TechStack />
        </div>
        <div className=''>
          <ul className='flex gap-4'>
            {socialLinks.map((link) => (
              <li
                key={link.name}
                className='hover:scale-110 transition-transform transform-duration-500 ease-in-out'
              >
                <a href={link.url} target='_blank' rel='noopener noreferrer'>
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
