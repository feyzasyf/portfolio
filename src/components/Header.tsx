'use client';

import { X, Menu } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { FlipWords } from './ui/shadcn-io/flip-words';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Work', id: 'work' },
  { name: 'Projects', id: 'projects' },
];
function NavigationLinks() {
  return (
    <ul className='flex flex-col items-center gap-4 sm:flex-row  font-plain animate-text sm:animate-none motion-reduce:animate-none'>
      {navItems.map((item) => (
        <li key={item.name} className='flex items-center justify-center'>
          <button
            onClick={() => {
              const element = document.getElementById(item.id);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className='px-4 py-2 inline-block font-bold cursor-pointer hover:underline hover:decoration-green-500 hover:underline-offset-4'
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
const nameList = ['Feyza', '菲菲'];
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed inset-x-0 z-30  dark:bg-gray-900/80 bg-white/80'>
      <div className='flex items-center justify-between max-w-5xl mx-auto px-4 py-2'>
        <span className='font-bold text-2xl'>
          <FlipWords
            words={nameList}
            duration={2500}
            wordDelay={0.3}
            letterDelay={0.05}
            className={`text-green-500 font-bold font-chinese`}
          />
        </span>

        <div className='flex items-center flex-row sm:flex-row-reverse gap-4'>
          <ThemeToggle />
          <div className='sm:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='cursor-pointer flex'
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          <nav className='hidden sm:flex items-center space-x-4'>
            <NavigationLinks />
          </nav>
        </div>
      </div>
      {isOpen && (
        <div className='sm:hidden block text-center'>
          <nav className='pb-5'>
            <NavigationLinks />
          </nav>
        </div>
      )}
    </header>
  );
}
