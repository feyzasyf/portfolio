import type { Metadata } from 'next';
import { Geist, Geist_Mono, Nunito } from 'next/font/google';
import './globals.css';
import Header from '@/app/sections/Header';
import { ThemeProvider } from '@/components/theme-provider';
import SparklesAnimation from '@/components/SparklesAnimation';
import Footer from './sections/Footer';
import { Bitcount_Grid_Single } from 'next/font/google';

const bitcountSingle = Bitcount_Grid_Single({
  weight: '400',
  variable: '--font-bitcount-grid-single',
  subsets: ['latin'],
  fallback: ['geist-sans'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const nunito = Nunito({
  weight: '600',
  variable: '--font-nunito',
  subsets: ['latin'],
  fallback: ['geist-sans'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Feyza's Website",
  description:
    "Welcome to my page! I'm Feyza, a passionate software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='favcon.ico' sizes='any' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${nunito.variable} ${bitcountSingle.variable}  antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />

          {children}
          <Footer />

          {/* <ShootingStarAnimation /> */}
          <SparklesAnimation />
        </ThemeProvider>
      </body>
    </html>
  );
}
