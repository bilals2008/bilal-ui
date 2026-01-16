// File: lib/layout.shared.tsx
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2 font-bold text-lg">
           <div className="flex items-center justify-center">
              <Image src="/logo.png" alt="Bilal UI" width={24} height={24} className="h-6 w-6" />
           </div>
          <span>Bilal UI</span>
        </div>
      ),
    },
    links: [],
  };
}
