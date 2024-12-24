"use client"

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Set mounted to true only after the initial render to avoid hydration mismatch
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Render nothing on the first render, allowing hydration to complete without mismatch
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
