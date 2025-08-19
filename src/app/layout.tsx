import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import { AuthProvider } from '@/context/AuthContext';
import './globals.scss';

const vazir = Vazirmatn({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'fallback',
  variable: '--font-vazirmatn',
});

export const metadata: Metadata = {
  title: 'Authentication App',
  description: 'Next.js Authentication Application with TypeScript and SCSS',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.variable}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
