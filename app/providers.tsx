'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { CursorProvider } from '@/contexts/cursor-context';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
      <CursorProvider>
        <NextUIProvider navigate={router.push}>
          <NextThemesProvider defaultTheme="dark" forcedTheme="dark" attribute="class">
            {children}
          </NextThemesProvider>
        </NextUIProvider>
      </CursorProvider>
  );
}
