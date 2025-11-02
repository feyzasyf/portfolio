'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  handleClick: () => void;
  children: ReactNode;
  className?: string;
}

export default function Button({
  handleClick,
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={`bg-green-500 text-white py-2 px-4 rounded cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
