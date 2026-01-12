// File: components/layout-client.tsx
"use client";

import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { navigationSections } from "@/config/navigation";
import { cn } from "@/lib/utils";

export interface DocsLayoutClientProps extends DocsLayoutProps {
  sidebarIconBadge?: boolean;
}

export function DocsLayoutClient({
  children,
  ...props
}: DocsLayoutClientProps) {
  return (
    <DocsLayout
      {...props}
      sidebar={{
        components: {
          Item: ({ item }) => {
            // Find manual config for this item to get premium metadata
            const allNavItems = navigationSections.flatMap((s) => s.items);
            const configItem = allNavItems.find((i) => i.href === item.url);

            const iconName = configItem?.icon || (item as any).icon;
            const Icon =
              iconName && (Icons as any)[iconName]
                ? (Icons as any)[iconName]
                : null;

            const isComingSoon =
              configItem?.isComingSoon || (item as any).isComingSoon;
            const isNew = configItem?.isNew || (item as any).isNew;

            const badgeText = isNew
              ? "New"
              : configItem?.badge ||
                (item as any).badge ||
                (isComingSoon ? "Soon" : null);
            const badgeVariant =
              badgeText?.toLowerCase() === "new" || isNew
                ? "new"
                : badgeText?.toLowerCase() === "updated" ||
                  badgeText?.toLowerCase() === "soon"
                ? "soon"
                : "secondary";

            return (
              <Link
                href={isComingSoon ? "#" : item.url}
                onClick={(e) => {
                  if (isComingSoon) {
                    e.preventDefault();
                  }
                }}
                className={cn(
                  "flex items-center gap-2.5 w-full py-2 px-3 rounded-xl transition-all duration-200 no-underline group",
                  "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/50",
                  isComingSoon &&
                    "opacity-50 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent"
                )}
              >
                {Icon && (
                  <Icon className="w-4 h-4 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                )}
                <span className="flex-1 text-[13px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  {item.name}
                </span>
                {badgeText && (
                  <Badge
                    variant={badgeVariant as any}
                    appearance="light"
                    size="xs"
                    className="font-bold uppercase tracking-wider"
                  >
                    {badgeText === "Updated" ? "Update" : badgeText}
                  </Badge>
                )}
              </Link>
            );
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
