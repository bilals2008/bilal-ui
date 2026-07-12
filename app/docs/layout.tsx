// File: app/docs/layout.tsx
import { source } from "@/lib/source";
import { DocsLayoutClient } from "@/components/layout-client";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayoutClient tree={source.getPageTree()}>
      {children}
    </DocsLayoutClient>
  );
}
