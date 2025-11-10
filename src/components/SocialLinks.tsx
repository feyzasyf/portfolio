import { socialLinks } from '@/constants';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const iconMap = {
  linkedin: LinkedInLogoIcon,
  github: GitHubLogoIcon,
};

export default function SocialLinks() {
  return (
    <nav aria-label='Social Links'>
      <ul className='flex gap-4'>
        {socialLinks.map(({ name, icon, url, 'aria-label': ariaLabel }) => {
          const Icon = iconMap[icon];
          return (
            <li key={name}>
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={ariaLabel}
                className='inline-flex transition-transform transform-duration-500 ease-in-out motion-reduce:transition-none motion-reduce:transform-none hover:scale-110 focus:scale-110'
              >
                <Icon className='w-8 h-8 sm:w-12 sm:h-12 text-black dark:text-white' />
                <span className='sr-only'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
