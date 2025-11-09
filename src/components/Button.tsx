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
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
