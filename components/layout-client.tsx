// File: components/layout-client.tsx
"use client";

import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { ThemeSwitcher } from "@/components/kibo-ui/theme-switcher";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FlaskConical,
  Github,
  Twitter,
  ChevronDown,
  Rocket,
  Download,
  Palette,
  CircleHelp,
  History,
  Map,
  ListCollapse,
  MousePointerClick,
  AlertCircle,
  MessageSquareWarning,
  IdCard,
  BadgeCheck,
  User,
  SquareCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useMemo, useState, useEffect } from "react";
import { navigationSections, type NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";
import pkg from "@/package.json";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const IconMap: Record<
  string,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  Rocket,
  Download,
  Palette,
  CircleHelp,
  History,
  Map,
  ListCollapse,
  MousePointerClick,
  AlertCircle,
  MessageSquareWarning,
  IdCard,
  BadgeCheck,
  FlaskConical,
  Github,
  Twitter,
  ChevronDown,
  User,
  SquareCheck,
};

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

type BadgeVariant = React.ComponentProps<typeof Badge>["variant"];

const allNavItems = navigationSections.flatMap((s) => s.items);

const BADGE_FLAGS: ReadonlyArray<{
  key: keyof NavItem;
  variant: BadgeVariant;
  label: React.ReactNode;
}> = [
  { key: "isNew", variant: "new", label: "New" },
  { key: "isUpdated", variant: "updated", label: "Updated" },
  { key: "isLab", variant: "lab", label: <FlaskConical className="size-3" /> },
  { key: "isFeatured", variant: "featured", label: "Featured" },
  { key: "isRequest", variant: "request", label: "Request" },
  { key: "isWIP", variant: "wip", label: "WIP" },
  { key: "isStable", variant: "stable", label: "Stable" },
  { key: "isLegacy", variant: "legacy", label: "Legacy" },
  { key: "isHeadless", variant: "headless", label: "Headless" },
  { key: "isAlpha", variant: "alpha", label: "Alpha" },
  { key: "isDeprecated", variant: "deprecated", label: "Deprecated" },
  { key: "isVersion", variant: "version", label: `v${pkg.version}` },
  { key: "isBeta", variant: "beta", label: "Beta" },
  { key: "isExperimental", variant: "experimental", label: "Experimental" },
  { key: "isPreview", variant: "preview", label: "Preview" },
  { key: "isVerified", variant: "verified", label: "Verified" },
  { key: "isPro", variant: "pro", label: "Pro" },
  { key: "isBreaking", variant: "breaking", label: "Breaking" },
  { key: "isFix", variant: "fix", label: "Fix" },
  { key: "isDocs", variant: "docs", label: "Docs" },
  { key: "isPerf", variant: "perf", label: "Perf" },
  { key: "isRefactor", variant: "refactor", label: "Refactor" },
];

function getBadgeInfo(
  configItem: NavItem | undefined,
  node: NavigationNode,
): { variant: BadgeVariant; content: React.ReactNode } | null {
  if (configItem) {
    const match = BADGE_FLAGS.find((flag) => configItem[flag.key]);
    if (match) return { variant: match.variant, content: match.label };
  }

  const fallback = configItem?.badge || node.badge;
  if (fallback) return { variant: "secondary", content: fallback };

  if (configItem?.isComingSoon) return { variant: "soon", content: "Soon" };

  return null;
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
        navigationSections.forEach((section) => {
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
      }}
      links={props.links}
      sidebar={{
        components: {
          Item: ({ item }) => {
            const node = item as unknown as NavigationNode;
            const configItem = allNavItems.find((i) => i.href === node.url);

            const iconName = configItem?.icon || node.icon;
            const Icon =
              iconName && iconName in IconMap ? IconMap[iconName] : null;

            const isComingSoon = configItem?.isComingSoon;
            const badge = getBadgeInfo(configItem, node);
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
                  "flex items-center gap-3 w-full py-2 rounded-lg text-[13px] group relative",
                  "transition-all duration-200 ease-out",
                  isActive && ["bg-muted/60", "text-foreground font-semibold"],
                  !isActive && [
                    "text-muted-foreground/90",
                    "hover:bg-rose-500/3 hover:text-foreground",
                    "dark:hover:bg-rose-500/5",
                  ],
                  isComingSoon && [
                    "opacity-50 cursor-not-allowed",
                    "hover:bg-transparent dark:hover:bg-transparent",
                    "hover:text-muted-foreground/80",
                  ],
                )}
              >
                {Icon && (
                  <div
                    className={cn(
                      "flex items-center justify-center w-5 h-5 rounded-md transition-all duration-300 ml-1",
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

                <span
                  className={cn(
                    "flex-1 truncate tracking-[-0.01em] text-pretty",
                    isActive ? "font-bold" : "font-semibold",
                  )}
                >
                  {item.name}
                </span>

                {badge && (
                  <Badge variant={badge.variant} appearance="outline" size="sm">
                    {badge.content}
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
                  <Github className="w-4 h-4 transition-transform group-hover/social:scale-110" />
                </Link>
                <Link
                  href="https://x.com/bilals2008"
                  target="_blank"
                  className="p-2 text-muted-foreground hover:text-fuchsia-500 hover:bg-fuchsia-500/5 rounded-md transition-all group/social"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 transition-transform group-hover/social:scale-110" />
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
