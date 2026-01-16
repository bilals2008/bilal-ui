// File: lib/layout.shared.tsx
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex w-full justify-center items-center gap-2 font-bold text-lg">
           <div className="flex items-center justify-center">
              <Image src="/logo.png" alt="Bilal UI" width={24} height={24} className="h-6 w-6" />
           </div>
          <span>Bilal UI</span>
          <span className="text-xs font-normal text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded-md ml-1">v0.1.0</span>
        </div>
      ),
    },
    links: [],
  };
}
