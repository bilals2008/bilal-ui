// File: app/layout.tsx
import type { Metadata } from "next";
import { Geist_Mono, Poppins, Public_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Poppins({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Bilal UI",
    default: "Bilal UI",
  },
  description:
    "Open-source collection of UI components and animated effects built with React, Typescript, Tailwind CSS, and Motion. Pairs beautifully with shadcn/ui.",
  metadataBase: new URL("https://bilal-ui.vercel.app"),
};

import { TooltipProvider } from "@/components/ui/tooltip";

import { ViewTransitions } from "next-view-transitions";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const publicSans = Public_Sans({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning className={cn("font-sans", publicSans.variable)}>
        <body
          className={`${geistMono.variable} ${inter.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
