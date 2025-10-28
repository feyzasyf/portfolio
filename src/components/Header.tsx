"use client"
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { useState } from "react";


const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
];
function NavigationLinks() {
    console.log(navItems)
  return (
    <ul className='flex flex-col items-center gap-4 sm:flex-row space-x-4'>
      {navItems.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className='px-4 py-2 inline-block text-white font-bold'
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 z-20 backdrop-blur-lg bg-amber-400">
        <div className="flex items-center justify-between max-w-5xl mx-auto px-4 py-2">
            <Link href="/" className="text-white font-bold">Logo</Link>
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
        {isOpen && <div className="sm:hidden block text-center">
             <nav className="pb-5">
        <NavigationLinks />
      </nav>
            </div>}
         
    </header>

  )

}
