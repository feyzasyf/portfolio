'use client';

import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface ButtonProps {
  handleClick: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

export default function Button({
  handleClick,
  children,
  className,
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
