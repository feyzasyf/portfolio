'use client';
import { useRef } from 'react';
import Button from './Button';

export default function DownloadButton() {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const downloadCV = async () => {
    const response = await fetch('http://localhost:3000/api/files');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = linkRef.current as HTMLAnchorElement | null;

    if (!link) {
      return;
    }

    link.href = url;
    link.download = 'Feyza_Seyfi_CV.pdf';
    link.click();
    window.URL.revokeObjectURL(url);
  };
  return (
    <>
      <a ref={linkRef} className='hidden'></a>
      <Button handleClick={downloadCV} className='mb-8'>
        Download CV
      </Button>
    </>
  );
}
