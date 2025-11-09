'use client';
import { useRef } from 'react';
import Button from './Button';
import { urlLink } from '@/constants';

export default function DownloadButton() {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const downloadCV = async () => {
    const response = await fetch(`${urlLink}/api/files`);
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
      <Button
        handleClick={downloadCV}
        className='mb-8 bg-green-500 text-white py-2 px-4 rounded cursor-pointer'
      >
        Download CV
      </Button>
    </>
  );
}
