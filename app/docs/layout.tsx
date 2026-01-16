// File: app/docs/layout.tsx
import { source } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";
import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayoutClient } from "@/components/layout-client";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
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
