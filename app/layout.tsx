"use client"

import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import Image from 'next/image';
import { Divider } from '@nextui-org/divider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import logo from '../public/logo.png';
import { Cursor } from '@/components/cursor';

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   // themeColor: [
//   // 	{ media: "(prefers-color-scheme: light)", color: "white" },
//   // 	{ media: "(prefers-color-scheme: dark)", color: "black" },
//   // ],
//   icons: {
//     icon: '/favicon.ico',
//     shortcut: '/favicon-16x16.png',
//     apple: '/apple-touch-icon.png',
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = React.useRef(null);

  return (
      <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://terminal.jup.ag/main-v2.js" async />
        <title>$USADOG - Pack of Crypto Heroes</title>
      </head>
      <body
          className={clsx(
              'min-h-screen bg-background font-sans subpixel-antialiased',
              fontSans.variable,
          )}
      >
      <Providers>
        <Cursor layoutRef={ref} />

        <div className="relative flex flex-col" ref={ref}>
          <Navbar />
          <main className="flex-grow w-full h-full">
            {children}
          </main>

          <footer className="w-full flex justify-center py-8 min-h-64 px-8 border-t border-default-400">
            <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between items-center gap-12 md:gap-24">
              <div className="flex flex-col items-center gap-4 flex-shrink-0">
                <Image
                    src={logo}
                    alt="logo"
                    className="w-[180px] md:w-[320px] h-auto"
                />

                <Divider />

                <div className="text-sm md:text-xl">© 2024 $USADOG • All Rights Reserved</div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-xl md:text-2xl text-center">
                  Join us on this exciting journey as we honor the courage and dedication of military working dogs. Together, we can make a
                  difference – one bark at a time!
                </div>
                <Divider />
                <div className="flex gap-4 w-full justify-center">
                  {siteConfig.socials.map((social, index) => (
                      <Link key={index}
                            href={social.href}
                            isExternal
                            showAnchorIcon
                            className="text-white text-lg"
                      >
                        {social.label}
                      </Link>
                  ))}
                </div>
              </div>

            </div>
          </footer>
        </div>
      </Providers>

      <Analytics />
      <SpeedInsights />
      </body>
      </html>
  );
}
