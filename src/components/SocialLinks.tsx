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
                className='list-none hover:scale-110 transition-transform transform-duration-500 ease-in-out'
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
