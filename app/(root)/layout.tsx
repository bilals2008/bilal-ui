// File: app/(root)/layout.tsx
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
// import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Bilal UI - Open Source Components",
    default: "Bilal UI - Open Source Components",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="relative w-full pt-0 md:pt-0 bg-white dark:bg-black font-inter">
        <RootProvider>{children}</RootProvider>
      </main>
      <Footer />
    </>
  );
}