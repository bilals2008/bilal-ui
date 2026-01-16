// File: app/docs/layout.tsx
import { source } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";
import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayoutClient } from "@/components/layout-client";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <div 
        className="flex min-h-screen flex-col"
        style={{
          "--sidebar": "#0a0a0a",
        } as React.CSSProperties}
      >
        <DocsLayoutClient
          tree={source.getPageTree()}
          {...baseOptions()}
        >
          {children}
        </DocsLayoutClient>
      </div>
    </RootProvider>
  );
}
