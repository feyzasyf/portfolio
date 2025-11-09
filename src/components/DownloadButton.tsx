'use client';
import { useState } from 'react';
import Button from './Button';
import { urlLink } from '@/constants';
import toast from 'react-hot-toast';

export default function DownloadButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const downloadCV = async () => {
    setIsLoading(true);
    setStatusMessage('');

    try {
      const response = await fetch(`${urlLink}/api/files`);
      if (!response.ok) throw new Error('Network error');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const tempLink = document.createElement('a');
      tempLink.href = url;

      tempLink.download = 'Feyza_Seyfi_CV.pdf';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(url);

      setStatusMessage('Your CV download has started');
    } catch (error) {
      toast.error('Failed to download CV. Please try again.');
      setStatusMessage('Download failed, Please try again');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Button
        handleClick={downloadCV}
        className='mb-8 bg-green-500 text-white py-2 px-4 rounded cursor-pointer'
        disabled={isLoading}
        aria-label='Download CV'
      >
        {isLoading ? 'Downloading...' : 'Download CV'}
      </Button>
      {statusMessage && (
        <span role='status' aria-live='polite' className='sr-only'>
          {statusMessage}
        </span>
      )}
    </>
  );
}
