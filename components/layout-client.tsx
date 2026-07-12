// File: components/layout-client.tsx
"use client";

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
  TextCursorInput,
  AlignLeft,
  ListFilter,
  Menu,
  ToggleRight,
  PanelTop,
  RectangleEllipsis,
  ChevronsUpDown,
  Paintbrush,
  Image,
  Loader,
  Layers,
  Square,
  ChevronLeft,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useState, useEffect } from "react";
import { navigationSections, type NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";
import pkg from "@/package.json";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { NavTitle } from "@/lib/layout.shared";

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
  TextCursorInput,
  AlignLeft,
  ListFilter,
  Menu,
  ToggleRight,
  PanelTop,
  RectangleEllipsis,
  ChevronsUpDown,
  Paintbrush,
  Image,
  Loader,
  Layers,
  Square,
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
  numericLabel?: string;
}> = [
  { key: "isNew", variant: "new", label: "New", numericLabel: "New" },
  { key: "isUpdated", variant: "updated", label: "Updated", numericLabel: "Updated" },
  { key: "isLab", variant: "lab", label: <FlaskConical className="size-3" />, numericLabel: "Lab" },
  { key: "isFeatured", variant: "featured", label: "Featured", numericLabel: "Featured" },
  { key: "isRequest", variant: "request", label: "Request", numericLabel: "Request" },
  { key: "isWIP", variant: "wip", label: "WIP", numericLabel: "WIP" },
  { key: "isStable", variant: "stable", label: "Stable", numericLabel: "Stable" },
  { key: "isLegacy", variant: "legacy", label: "Legacy", numericLabel: "Legacy" },
  { key: "isHeadless", variant: "headless", label: "Headless", numericLabel: "Headless" },
  { key: "isAlpha", variant: "alpha", label: "Alpha", numericLabel: "Alpha" },
  { key: "isDeprecated", variant: "deprecated", label: "Deprecated", numericLabel: "Deprecated" },
  { key: "isVersion", variant: "version", label: `v${pkg.version}`, numericLabel: `v${pkg.version}` },
  { key: "isBeta", variant: "beta", label: "Beta", numericLabel: "Beta" },
  { key: "isExperimental", variant: "experimental", label: "Experimental", numericLabel: "Experimental" },
  { key: "isPreview", variant: "preview", label: "Preview", numericLabel: "Preview" },
  { key: "isVerified", variant: "verified", label: "Verified", numericLabel: "Verified" },
  { key: "isPro", variant: "pro", label: "Pro", numericLabel: "Pro" },
  { key: "isBreaking", variant: "breaking", label: "Breaking", numericLabel: "Breaking" },
  { key: "isFix", variant: "fix", label: "Fix", numericLabel: "Fix" },
  { key: "isDocs", variant: "docs", label: "Docs", numericLabel: "Docs" },
  { key: "isPerf", variant: "perf", label: "Perf", numericLabel: "Perf" },
  { key: "isRefactor", variant: "refactor", label: "Refactor", numericLabel: "Refactor" },
];

function getBadgeInfo(
  configItem: NavItem | undefined,
  node: NavigationNode,
): { variant: BadgeVariant; content: React.ReactNode } | null {
  if (configItem) {
    const match = BADGE_FLAGS.find((flag) => {
      const value = configItem[flag.key];
      return typeof value === "number" ? value > 0 : Boolean(value);
    });

    if (match) {
      const value = configItem[match.key];
      let content: React.ReactNode = match.label;

      if (typeof value === "number") {
        const count = Math.trunc(value);
        if (count > 0) {
          content = match.numericLabel ? `+${count} ${match.numericLabel}` : `+${count}`;
        }
      }

      return { variant: match.variant, content };
    }
  }

  const fallback = configItem?.badge || node.badge;
  if (fallback) return { variant: "secondary", content: fallback };

  if (configItem?.isComingSoon) return { variant: "soon", content: "Soon" };

  return null;
}

function SidebarItem({ node }: { node: NavigationNode }) {
  const pathname = usePathname();
  const configItem = allNavItems.find((i) => i.href === node.url);

  const iconName = configItem?.icon || node.icon;
  const Icon = iconName && iconName in IconMap ? IconMap[iconName] : null;

  const isComingSoon = configItem?.isComingSoon;
  const badge = getBadgeInfo(configItem, node);
  const isActive = pathname === node.url;

  return (
    <Link
      href={(isComingSoon || !node.url) ? "#" : node.url}
      onClick={(e) => { if (isComingSoon) e.preventDefault(); }}
      className={cn(
        "flex items-center gap-3 w-full py-2 px-2.5 rounded-lg text-[13px] group/item relative",
        "transition-all duration-200 ease-out motion-safe:transform-gpu motion-safe:hover:translate-x-0.5",
        isActive && ["bg-muted/60", "text-foreground font-semibold", "px-3"],
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
            "flex items-center justify-center w-5 h-5 rounded-md transition-all duration-300 ml-1 motion-safe:group-hover/item:scale-105",
            isActive
              ? "text-rose-500 drop-shadow-[0_0_3px_rgba(244,63,94,0.3)]"
              : "text-muted-foreground/50 group-hover:text-fuchsia-500",
          )}
        >
          <Icon className="w-4 h-4" strokeWidth={isActive ? 2.25 : 1.75} />
        </div>
      )}

      <span
        className={cn(
          "flex-1 truncate tracking-[-0.01em] text-pretty transition-transform duration-200 motion-safe:group-hover/item:translate-x-0.5",
          isActive ? "font-bold" : "font-semibold",
        )}
      >
        {node.name}
      </span>

      {badge && (
        <Badge
          variant={badge.variant}
          appearance="ghost"
          size="xs"
          className="ml-2 shrink-0 uppercase tracking-tight transition-transform duration-200 motion-safe:group-hover/item:scale-95"
        >
          {badge.content}
        </Badge>
      )}
    </Link>
  );
}

function SidebarFolder({ node, children }: { node: NavigationNode; children: React.ReactNode }) {
  const pathname = usePathname();

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
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="group/folder flex flex-col w-full">
      <CollapsibleTrigger
        className={cn(
          "flex items-center justify-between w-full py-2.5 px-3 rounded-lg text-[14px] no-underline group relative",
          "transition-all duration-300 ease-out motion-safe:transform-gpu motion-safe:hover:translate-x-0.5",
          "text-foreground/90 hover:bg-rose-500/3 hover:text-foreground",
          "dark:hover:bg-rose-500/5",
          isActive && "text-foreground font-bold bg-muted/40 backdrop-blur-[1px]",
        )}
      >
        <span
          className={cn(
            "tracking-tight transition-colors duration-200",
            isActive ? "text-foreground font-bold" : "text-foreground/80 font-semibold",
          )}
        >
          {node.name}
        </span>
        <ChevronDown className="size-3.5 text-muted-foreground/50 transition-transform duration-200 group-hover/folder:text-foreground/80 group-data-[state=open]/folder:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-1 mt-1 pl-2 border-l border-muted/30 ml-1 overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:slide-in-from-top-1 data-[state=closed]:slide-out-to-top-1 duration-200">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}

function renderTree(nodes: NavigationNode[]) {
  return nodes.map((node) => {
    if (node.children) {
      return (
        <SidebarFolder key={node.name} node={node}>
          {renderTree(node.children)}
        </SidebarFolder>
      );
    }
    // skip virtual/index nodes without a real url
    if (!node.url) return null;
    return <SidebarItem key={node.url || node.name} node={node} />;
  });
}

export function DocsLayoutClient({
  children,
  tree,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tree: any;
}) {
  const nodes = (tree as unknown as NavigationNode)?.children || [];
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="flex min-h-screen">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-border bg-background pt-14",
          "transition-transform duration-300 ease-in-out md:sticky md:top-0 md:h-screen md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <NavTitle />
          <Button
            variant="ghost"
            size="icon-xs"
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <ChevronLeft className="size-4" />
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {renderTree(nodes)}
        </nav>

        <div className="flex flex-col gap-2 p-4 border-t border-border">
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
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-rose-500/60">Bilal UI</span>{" "}
            <span className="text-fuchsia-500/50">v{pkg.version}</span>. All
            rights reserved.
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        {/* Top nav bar */}
        <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-lg">
          <div className="flex h-14 items-center gap-4 px-4">
            <Button
              variant="ghost"
              size="icon-sm"
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="size-5" />
            </Button>
            <div className="flex-1" />
          </div>
        </header>

        <div className="mx-auto max-w-[900px] px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
