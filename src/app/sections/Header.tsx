'use client';
import { X, Menu } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import ThemeToggle from '../../components/ThemeToggle';
import { FlipWords } from '../../components/ui/shadcn-io/flip-words';
import { Ma_Shan_Zheng } from 'next/font/google';

const maShanZheng = Ma_Shan_Zheng({
  weight: '400',
});

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Work', id: 'work' },
];

type NavigationLinksProps = {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

function NavigationLinks({ setIsOpen }: NavigationLinksProps) {
  return (
    <ul
      className={`flex flex-col items-center gap-4 sm:flex-row  font-plain animate-text sm:animate-none motion-reduce:animate-none`}
    >
      {navItems.map((item) => (
        <li key={item.name} className='flex items-center justify-center'>
          <a
            href={`#${item.id}`}
            onClick={() => {
              const element = document.getElementById(item.id);
              element?.scrollIntoView({ behavior: 'smooth' });
              if (setIsOpen) {
                setIsOpen(false);
              }
            }}
            className='px-4 py-2 inline-block font-bold cursor-pointer hover:underline hover:decoration-green-500 hover:underline-offset-4'
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
const nameList = ['Feyza', '菲菲'];
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        headerRef.current &&
        !headerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className='fixed inset-x-0 z-30  dark:bg-gray-900/90 bg-white/90'
    >
      {/* Skip to content link */}
      <a
        href='#main'
        className='sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-green-500 text-white px-3 py-1 rounded'
      >
        Skip to main content
      </a>
      <div className='wrapper  py-2'>
        <span className={`${maShanZheng.className} font-bold text-2xl`}>
          <FlipWords
            words={nameList}
            duration={2500}
            wordDelay={0.3}
            letterDelay={0.05}
            className={`text-green-600 font-bold font-chinese`}
          />
        </span>

        <div className='flex items-center flex-row sm:flex-row-reverse gap-4'>
          <ThemeToggle />
          {/* Mobile menu button */}
          <div className='sm:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='cursor-pointer flex'
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls='mobile-menu'
            >
              {isOpen ? <X aria-hidden='true' /> : <Menu aria-hidden='true' />}
            </button>
          </div>

          {/* Desktop nav */}
          <nav
            className='hidden sm:flex items-center space-x-4'
            aria-label='Main navigation'
          >
            <NavigationLinks />
          </nav>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div
          id='mobile-menu'
          ref={menuRef}
          className='sm:hidden block text-center  dark:bg-gray-900/90 bg-white/90'
        >
          <nav className='pb-5'>
            <NavigationLinks
              setIsOpen={setIsOpen}
              aria-label='Mobile navigation'
            />
          </nav>
        </div>
      )}
    </header>
  );
}
