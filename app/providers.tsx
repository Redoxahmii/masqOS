"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const lenis = useLenis();
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
        <ReactLenis root>{children}</ReactLenis>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
