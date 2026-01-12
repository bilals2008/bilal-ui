import { source } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";
import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayoutClient } from "@/components/layout-client";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <DocsLayoutClient
        tree={source.getPageTree()}
        {...baseOptions()}
      >
        {children}
      </DocsLayoutClient>
    </RootProvider>
  );
}
