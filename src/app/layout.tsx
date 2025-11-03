import type { Metadata } from 'next';
import { Geist, Geist_Mono, Nunito, Ma_Shan_Zheng } from 'next/font/google';
import './globals.css';
import Header from '@/app/sections/Header';
import { ThemeProvider } from '@/components/theme-provider';
import ShootingStarAnimation from '@/components/ShootingStarAnimation';
import SparklesAnimation from '@/components/SparklesAnimation';
import Footer from './sections/Footer';

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
        className={`${geistSans.variable} ${geistMono.variable}  ${nunito.variable}  antialiased`}
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
