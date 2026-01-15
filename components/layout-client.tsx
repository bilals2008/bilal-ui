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
              ? "bg-primary/5 text-primary font-medium shadow-[0_1px_2px_rgba(0,0,0,0.02)]" 
              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground";

            return (
              <Link
                href={isComingSoon ? "#" : item.url}
                onClick={(e) => {
                  if (isComingSoon) {
                    e.preventDefault();
                  }
                }}
                className={cn(
                  "flex items-center gap-2.5 w-full py-2 px-3 rounded-lg text-[14px] transition-all duration-200 no-underline group relative overflow-hidden",
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
                    variant="outline"
                    className={cn(
                      "text-[10px] px-1.5 h-5 rounded-md font-bold uppercase tracking-wide border",
                      // New Badge - Vibrant Green/Emerald
                      (isNew || badgeText === "New") && 
                        "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400",
                      
                      // Soon Badge - Warm Amber/Yellow
                      badgeText === "Soon" && 
                        "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:bg-amber-500/20 dark:text-amber-400",
                      
                      // Updated Badge - Professional Blue
                      (badgeText === "Updated" || badgeText === "Update") && 
                        "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:bg-blue-500/20 dark:text-blue-400",
                        
                      // Default/Other Badges
                      !isNew && badgeText !== "New" && badgeText !== "Soon" && badgeText !== "Updated" && badgeText !== "Update" &&
                        "bg-muted text-muted-foreground border-transparent"
                    )}
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
