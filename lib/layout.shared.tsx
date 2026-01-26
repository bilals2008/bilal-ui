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
            <Image
              src="/logo-2.png"
              alt="Bilal UI"
              width={24}
              height={24}
              className="h-6 w-6 rounded-sm "
            />
          </div>
          <span className="font-bold bg-clip-text text-transparent bg-linear-to-r from-rose-500 via-fuchsia-500 to-purple-500">
            Bilal UI
          </span>
          <Badge
            variant={"info"}
            appearance={"outline"}
            size={"sm"}
            className="text-xs font-normal ml-1"
          >
            v{pkg.version}
          </Badge>
        </div>
      ),
    },
    links: [],
  };
}
