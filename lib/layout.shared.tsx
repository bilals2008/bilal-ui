// File: lib/layout.shared.tsx
// File: lib/layout.shared.tsx
import { Badge } from "@/components/ui/badge";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import pkg from "@/package.json";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex w-full justify-center items-center gap-2 font-bold text-lg">
           <div className="flex items-center justify-center">
              <Image src="/logo.png" alt="Bilal UI" width={24} height={24} className="h-6 w-6 rounded-sm " />
           </div>
          <span>Bilal UI</span>
          <Badge variant={"info"} appearance={"outline"} size={"sm"} className="text-xs font-normal ml-1">v{pkg.version}</Badge>
        </div>
      ),
    },
    links: [],
  };
}
