import type { Metadata } from 'next';
import { Indie_Flower, Manrope, Oswald, Space_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-space-mono',
});

const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-indie-flower',
});

export const metadata: Metadata = {
  title: 'Moyasi Portfolio',
  description: 'Personal portfolio for Moyasi, built with Next.js.',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${oswald.variable} ${spaceMono.variable} ${indieFlower.variable}`}>
        {children}
      </body>
    </html>
  );
}