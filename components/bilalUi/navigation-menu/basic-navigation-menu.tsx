// File: components/bilalUi/navigation-menu/basic-navigation-menu.tsx
"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Combine,
  Paintbrush,
  Zap,
  BookOpen,
  Clock,
  LifeBuoy,
} from "lucide-react";
import React from "react";

type MenuLink = {
  title: string;
  href: string;
  description: string;
  icon?: React.ReactNode;
};

const productLinks: MenuLink[] = [
  {
    title: "Components",
    href: "/docs/components",
    description: "Browse production-ready blocks and UI patterns.",
    icon: <Combine className="h-4 w-4 text-primary" />,
  },
  {
    title: "Theming",
    href: "/docs/getting-started/theming",
    description: "Customize colors, tokens, and visual consistency.",
    icon: <Paintbrush className="h-4 w-4 text-primary" />,
  },
  {
    title: "Installation",
    href: "/docs/getting-started/installation",
    description: "Set up Bilal UI quickly in your project.",
    icon: <Zap className="h-4 w-4 text-primary" />,
  },
];

const resourceLinks: MenuLink[] = [
  {
    title: "Introduction",
    href: "/docs/getting-started/introduction",
    description: "Understand the philosophy and usage model.",
    icon: <BookOpen className="h-4 w-4 text-primary" />,
  },
  {
    title: "Changelog",
    href: "/docs/getting-started/changelog",
    description: "Track newly added components and updates.",
    icon: <Clock className="h-4 w-4 text-primary" />,
  },
  {
    title: "Troubleshooting",
    href: "/docs/getting-started/troubleshooting",
    description: "Fix common setup and runtime issues quickly.",
    icon: <LifeBuoy className="h-4 w-4 text-primary" />,
  },
];

function NavigationGrid({ links }: { links: MenuLink[] }) {
  return (
    <ul className="grid w-[350px] gap-1 p-2 md:w-[450px] md:grid-cols-2 lg:w-[500px]">
      {links.map((link) => (
        <li key={link.title}>
          <NavigationMenuLink asChild>
            <a
              href={link.href}
              className="group flex flex-col gap-1.5 rounded-md p-2.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded border bg-background shadow-sm">
                  {link.icon}
                </div>
                <div className="text-sm font-medium leading-none">
                  {link.title}
                </div>
              </div>
              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-0.5">
                {link.description}
              </p>
            </a>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  );
}

export function BasicNavigationMenu() {
  return (
    <div className="flex w-full items-center py-4">
      <NavigationMenu className="rounded-lg border bg-card p-1 shadow-sm">
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-8 rounded-md bg-transparent px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationGrid links={productLinks} />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-8 rounded-md bg-transparent px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationGrid links={resourceLinks} />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/docs/components/sheet"
              className="group inline-flex h-8 items-center justify-center rounded-md bg-transparent px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              New
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
