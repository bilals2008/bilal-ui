// File: components/layout-client.tsx
"use client";

import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { ThemeSwitcher } from "@/components/kibo-ui/theme-switcher";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icons from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { navigationSections } from "@/config/navigation";
import { cn } from "@/lib/utils";
import pkg from "@/package.json";

export interface DocsLayoutClientProps extends DocsLayoutProps {
  sidebarIconBadge?: boolean;
}

export function DocsLayoutClient({
  children,
  ...props
}: DocsLayoutClientProps) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  
  // Clone tree to inject virtual items
  const tree = JSON.parse(JSON.stringify(props.tree));

  const injectVirtualItems = (node: any) => {
    if (node.children) {
      // Check if this folder corresponds to any navigation section
      navigationSections.forEach(section => {
        // We identify the folder if it contains at least one item from the section
        const matchesSection = node.children.some((child: any) => 
          section.items.some(item => item.href === child.url)
        );

        if (matchesSection || node.name === section.title || (node.name === "components" && section.title === "Components")) {
          section.items.forEach(navItem => {
            const exists = node.children.find((child: any) => child.url === navItem.href);
            if (!exists && navItem.isComingSoon) {
              node.children.push({
                type: "page",
                name: navItem.title,
                url: navItem.href,
                isVirtual: true
              });
            }
          });
        }
      });

      // Recurse
      node.children.forEach(injectVirtualItems);
    }
  };

  injectVirtualItems(tree);

  return (
    <DocsLayout
      {...props}
      tree={tree}
      nav={{
        ...props.nav,
        // Ensure title is preserved from baseOptions, or handled by props.nav
        // If we want search, we typically don't need to do anything special IF the provider is set up,
        // but explicit usage is better.
      }}
      links={props.links}
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
            const isUpdated = configItem?.isUpdated || (item as any).isUpdated;
            const isLab = configItem?.isLab || (item as any).isLab;
            const isFeatured = configItem?.isFeatured || (item as any).isFeatured;
            const isRequest = configItem?.isRequest || (item as any).isRequest;
            const isWIP = configItem?.isWIP || (item as any).isWIP;
            const isStable = configItem?.isStable || (item as any).isStable;
            const isLegacy = configItem?.isLegacy || (item as any).isLegacy;
            const isHeadless = configItem?.isHeadless || (item as any).isHeadless;
            const isAlpha = configItem?.isAlpha || (item as any).isAlpha;
            const isDeprecated = configItem?.isDeprecated || (item as any).isDeprecated;
            const isVersion = configItem?.isVersion || (item as any).isVersion;

            const badgeContent = isNew
              ? "New"
              : isUpdated
              ? "Updated"
              : isLab ? (
              <Icons.FlaskConical className="size-3" />
            ) : isFeatured
              ? "Featured"
              : isRequest
              ? "Request"
              : isWIP
              ? "WIP"
              : isStable
              ? "Stable"
              : isLegacy
              ? "Legacy"
              : isHeadless
              ? "Headless"
              : isAlpha
              ? "Alpha"
              : isDeprecated
              ? "Deprecated"
              : isVersion
              ? "v0.0.1"
              : (
              configItem?.badge ||
              (item as any).badge ||
              (isComingSoon ? "Soon" : null)
            );

            const isActive = pathname === item.url;

            return (
              <Link
                href={isComingSoon ? "#" : item.url}
                onClick={(e) => {
                  if (isComingSoon) {
                    e.preventDefault();
                  }
                }}
                className={cn(
                  // Base styles
                  "flex items-center gap-3 w-full py-2 px-3 rounded-lg text-[13px] no-underline group relative",
                  // Transition & animation
                  "transition-all duration-200 ease-out",
                  // Active state - premium enterprise look
                  isActive && [
                    "bg-gradient-to-r from-primary/10 via-primary/8 to-transparent",
                    "text-foreground font-semibold",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
                    "dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_1px_2px_rgba(0,0,0,0.1)]",
                  ],
                  // Inactive state with subtle hover
                  !isActive && [
                    "text-muted-foreground/80",
                    "hover:bg-muted/50 hover:text-foreground",
                    "dark:hover:bg-white/[0.04]",
                  ],
                  // Coming soon disabled state
                  isComingSoon && [
                    "opacity-50 cursor-not-allowed",
                    "hover:bg-transparent dark:hover:bg-transparent",
                    "hover:text-muted-foreground/80",
                  ]
                )}
              >
                {/* Active Indicator - Left accent bar */}
                <div 
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full transition-all duration-200",
                    isActive 
                      ? "h-5 bg-gradient-to-b from-primary via-primary to-primary/70 opacity-100" 
                      : "h-0 opacity-0"
                  )} 
                />
                
                {/* Icon */}
                {Icon && (
                  <div className={cn(
                    "flex items-center justify-center w-5 h-5 rounded-md transition-all duration-200",
                    isActive 
                      ? "text-primary" 
                      : "text-muted-foreground/60 group-hover:text-foreground/70"
                  )}>
                    <Icon className="w-4 h-4" strokeWidth={isActive ? 2.25 : 1.75} />
                  </div>
                )}
                
                {/* Label */}
                <span className={cn(
                  "flex-1 truncate tracking-[-0.01em]",
                  isActive ? "font-semibold" : "font-medium"
                )}>
                  {item.name}
                </span>

                {/* Badge */}
                {badgeContent && (
                  <Badge
                    variant={
                      isNew
                        ? "new"
                        : isComingSoon || badgeContent === "Soon"
                        ? "soon"
                        : isUpdated
                        ? "updated"
                        : isLab
                        ? "lab"
                        : isFeatured
                        ? "featured"
                        : isRequest
                        ? "request"
                        : isWIP
                        ? "wip"
                        : isStable
                        ? "stable"
                        : isLegacy
                        ? "legacy"
                        : isHeadless
                        ? "headless"
                        : isAlpha
                        ? "alpha"
                        : isDeprecated
                        ? "deprecated"
                        : isVersion
                        ? "version"
                        : "secondary"
                    }
                    appearance="outline"
                    size="sm"
                  >
                    {badgeContent}
                  </Badge>
                )}
              </Link>
            );
          },
        },
        
        footer: (
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="flex items-center justify-between w-full">
              <ThemeSwitcher
                value={theme as "light" | "dark" | "system"}
                onChange={(v) => setTheme(v)}
                className="h-8"
              />
              <div className="flex items-center gap-1">
                <Link 
                  href="https://github.com/bilals2008/bilal-ui" 
                  target="_blank"
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-md transition-all"
                  aria-label="GitHub"
                >
                  <Icons.Github className="w-4 h-4" />
                </Link>
                <Link 
                  href="https://x.com/bilals2008" 
                  target="_blank"
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-md transition-all"
                  aria-label="Twitter"
                >
                  <Icons.Twitter className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
             <div className="text-[11px] font-medium text-muted-foreground/40 text-center tracking-wide">
              © {new Date().getFullYear()} Bilal UI v{pkg.version}. All rights reserved.
            </div>
          </div>
        )
      }}
    >
      {children}
    </DocsLayout>
  );
}
