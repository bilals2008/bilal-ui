// File: components/layout-client.tsx
"use client";

import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

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

            const isActive = pathname === item.url;
            
            // Premium active state logic
            const activeStyles = isActive 
              ? "bg-primary/8 text-primary font-medium shadow-[0_1px_4px_rgba(0,0,0,0.05)]" 
              : "text-muted-foreground hover:bg-muted/60 hover:text-foreground";

            return (
              <Link
                href={isComingSoon ? "#" : item.url}
                onClick={(e) => {
                  if (isComingSoon) {
                    e.preventDefault();
                  }
                }}
                className={cn(
                  "flex items-center gap-3 w-full py-2.5 px-3 rounded-sm text-[13.5px] transition-all duration-300 no-underline group relative overflow-hidden",
                  activeStyles,
                  isComingSoon &&
                    "opacity-60 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent"
                )}
              >
                {/* Active Indicator Strip */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-primary rounded-r-full opacity-100" />
                )}
                
                {Icon && (
                  <Icon 
                    className={cn(
                      "w-4.5 h-4.5 transition-colors duration-200",
                      isActive 
                        ? "text-primary/80" 
                        : "text-muted-foreground/70 group-hover:text-foreground/80"
                    )} 
                  />
                )}
                
                <span className={cn(
                  "flex-1 tracking-tight whitespace-nowrap overflow-hidden text-overflow-ellipsis",
                  isActive ? "font-medium" : "font-normal"
                )}>
                  {item.name}
                </span>

                {badgeText && (
                  <Badge
                    variant={
                      isNew || badgeText === "New"
                        ? "new"
                        : isComingSoon || badgeText === "Soon"
                        ? "soon"
                        : badgeText === "Updated" || badgeText === "Update"
                        ? "updated"
                        : "secondary"
                    }
                    appearance="outline"
                    size="sm"
                    className=""
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
