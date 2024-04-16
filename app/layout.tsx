import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // themeColor: [
  // 	{ media: "(prefers-color-scheme: light)", color: "white" },
  // 	{ media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://terminal.jup.ag/main-v2.js" />
        <title>$USADOG</title>
      </head>
      <body
          className={clsx(
              'min-h-screen bg-background font-sans subpixel-antialiased',
              fontSans.variable,
          )}
      >
      <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
        <div className="relative flex flex-col">
          <Navbar />
          <main className="flex-grow w-full h-full">
            {children}
          </main>
          {/*<footer className="w-full flex items-center justify-center py-3">*/}
          {/*	*/}
          {/*</footer>*/}
        </div>
      </Providers>
      </body>
      </html>
  );
}
