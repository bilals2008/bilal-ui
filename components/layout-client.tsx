// File: components/layout-client.tsx
"use client";

import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { ThemeSwitcher } from "@/components/kibo-ui/theme-switcher";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icons from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useMemo, useState, useEffect } from "react";
import { navigationSections } from "@/config/navigation";
import { cn } from "@/lib/utils";
import pkg from "@/package.json";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface NavigationNode {
  name: string;
  url?: string;
  index?: { url: string };
  children?: NavigationNode[];
  type?: string;
  icon?: string;
  badge?: string;
  isVirtual?: boolean;
}

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
  const tree = useMemo(() => {
    const clonedTree = JSON.parse(JSON.stringify(props.tree));

    const injectVirtualItems = (node: NavigationNode) => {
      if (node.children) {
        // Check if this folder corresponds to any navigation section
        navigationSections.forEach((section) => {
          // We identify the folder if it contains at least one item from the section
          const matchesSection = node.children!.some((child) =>
            section.items.some((item) => item.href === child.url),
          );

          if (
            matchesSection ||
            node.name === section.title ||
            (node.name === "components" && section.title === "Components")
          ) {
            section.items.forEach((navItem) => {
              const exists = node.children!.find(
                (child) => child.url === navItem.href,
              );
              if (!exists && navItem.isComingSoon) {
                node.children!.push({
                  type: "page",
                  name: navItem.title,
                  url: navItem.href,
                  isVirtual: true,
                });
              }
            });
          }
        });

        // Recurse
        node.children?.forEach((child) =>
          injectVirtualItems(child as NavigationNode),
        );
      }
    };

    injectVirtualItems(clonedTree);
    return clonedTree;
  }, [props.tree]);

  return (
    <DocsLayout
      {...props}
      tree={tree}
      themeSwitch={{ enabled: false }}
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
            const node = item as unknown as NavigationNode;
            // Find manual config for this item to get premium metadata
            const allNavItems = navigationSections.flatMap((s) => s.items);
            const configItem = allNavItems.find((i) => i.href === node.url);

            const iconName = configItem?.icon || node.icon;
            const Icon =
              iconName && iconName in Icons
                ? (
                    Icons as unknown as Record<
                      string,
                      React.ComponentType<{
                        className?: string;
                        strokeWidth?: number;
                      }>
                    >
                  )[iconName]
                : null;

            const isComingSoon = configItem?.isComingSoon;
            const isNew = configItem?.isNew;
            const isUpdated = configItem?.isUpdated;
            const isLab = configItem?.isLab;
            const isFeatured = configItem?.isFeatured;
            const isRequest = configItem?.isRequest;
            const isWIP = configItem?.isWIP;
            const isStable = configItem?.isStable;
            const isLegacy = configItem?.isLegacy;
            const isHeadless = configItem?.isHeadless;
            const isAlpha = configItem?.isAlpha;
            const isDeprecated = configItem?.isDeprecated;
            const isVersion = configItem?.isVersion;

            const badgeContent = isNew ? (
              "New"
            ) : isUpdated ? (
              "Updated"
            ) : isLab ? (
              <Icons.FlaskConical className="size-3" />
            ) : isFeatured ? (
              "Featured"
            ) : isRequest ? (
              "Request"
            ) : isWIP ? (
              "WIP"
            ) : isStable ? (
              "Stable"
            ) : isLegacy ? (
              "Legacy"
            ) : isHeadless ? (
              "Headless"
            ) : isAlpha ? (
              "Alpha"
            ) : isDeprecated ? (
              "Deprecated"
            ) : isVersion ? (
              "v0.0.1"
            ) : (
              configItem?.badge || node.badge || (isComingSoon ? "Soon" : null)
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
                  // bg-linear-to-r
                  "flex items-center gap-3 w-full py-2 px-3 rounded-lg text-[13px] no-underline group relative",
                  // Transition & animation
                  "transition-all duration-200 ease-out",
                  // Active state - subtle and readable
                  isActive && ["bg-muted/60", "text-foreground font-semibold"],
                  // Inactive state with subtler hover
                  !isActive && [
                    "text-muted-foreground/90",
                    "hover:bg-rose-500/3 hover:text-foreground",
                    "dark:hover:bg-rose-500/5",
                  ],
                  // Coming soon disabled state
                  isComingSoon && [
                    "opacity-50 cursor-not-allowed",
                    "hover:bg-transparent dark:hover:bg-transparent",
                    "hover:text-muted-foreground/80",
                  ],
                )}
              >
                {/* Active Indicator - Left accent bar */}
                <div
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full transition-all duration-300",
                    isActive
                      ? "h-6 bg-linear-to-b from-rose-500/50 via-fuchsia-500/50 to-purple-500/50 opacity-100 shadow-[0_0_12px_rgba(244,63,94,0.4)] "
                      : "h-0 opacity-0",
                  )}
                />

                {/* Icon */}
                {Icon && (
                  <div
                    className={cn(
                      "flex items-center justify-center w-5 h-5 rounded-md transition-all duration-300",
                      isActive
                        ? "text-rose-500 drop-shadow-[0_0_3px_rgba(244,63,94,0.3)]"
                        : "text-muted-foreground/50 group-hover:text-fuchsia-500",
                    )}
                  >
                    <Icon
                      className="w-4 h-4"
                      strokeWidth={isActive ? 2.25 : 1.75}
                    />
                  </div>
                )}

                {/* Label */}
                <span
                  className={cn(
                    "flex-1 truncate tracking-[-0.01em] text-pretty",
                    isActive ? "font-bold" : "font-semibold",
                  )}
                >
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
          Folder: ({ item, children }) => {
            const node = item as unknown as NavigationNode;

            const checkActive = (curr: NavigationNode): boolean => {
              const url = curr.index?.url || curr.url;
              if (url === pathname) return true;
              return curr.children?.some(checkActive) ?? false;
            };

            const isActive = checkActive(node);
            const [isOpen, setIsOpen] = useState(isActive);

            useEffect(() => {
              if (isActive) setIsOpen(true);
            }, [isActive]);

            return (
              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="group/folder flex flex-col w-full"
              >
                <CollapsibleTrigger
                  className={cn(
                    "flex items-center justify-between w-full py-2.5 px-3 rounded-lg text-[14px] no-underline group relative",
                    "transition-all duration-300 ease-out",
                    "text-foreground/90 hover:bg-rose-500/3 hover:text-foreground",
                    "dark:hover:bg-rose-500/5",
                    isActive &&
                      "text-foreground font-bold bg-muted/40 backdrop-blur-[1px]",
                  )}
                >
                  <span
                    className={cn(
                      "tracking-tight transition-colors duration-200",
                      isActive
                        ? "text-foreground font-bold"
                        : "text-foreground/80 font-semibold",
                    )}
                  >
                    {item.name}
                  </span>
                  <ChevronDown className="size-3.5 text-muted-foreground/50 transition-transform duration-200 group-data-[state=open]/folder:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col gap-1 mt-1 pl-2 border-l border-muted/30 ml-3">
                  {children}
                </CollapsibleContent>
              </Collapsible>
            );
          },
        },

        footer: (
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="flex items-center justify-between w-full pt-2 border-t border-muted/30">
              <ThemeSwitcher
                value={theme as "light" | "dark" | "system"}
                onChange={(v) => setTheme(v)}
                className="h-8"
              />
              <div className="flex items-center gap-1">
                <Link
                  href="https://github.com/bilals2008/bilal-ui"
                  target="_blank"
                  className="p-2 text-muted-foreground hover:text-rose-500 hover:bg-rose-500/5 rounded-md transition-all group/social"
                  aria-label="GitHub"
                >
                  <Icons.Github className="w-4 h-4 transition-transform group-hover/social:scale-110" />
                </Link>
                <Link
                  href="https://x.com/bilals2008"
                  target="_blank"
                  className="p-2 text-muted-foreground hover:text-fuchsia-500 hover:bg-fuchsia-500/5 rounded-md transition-all group/social"
                  aria-label="Twitter"
                >
                  <Icons.Twitter className="w-4 h-4 transition-transform group-hover/social:scale-110" />
                </Link>
              </div>
            </div>

            <div className="text-[11px] font-medium text-muted-foreground/40 text-center tracking-wide">
              © {new Date().getFullYear()}{" "}
              <span className="text-rose-500/60">Bilal UI</span>{" "}
              <span className="text-fuchsia-500/50">v{pkg.version}</span>. All
              rights reserved.
            </div>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
