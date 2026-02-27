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

type MenuLink = {
  title: string;
  href: string;
  description: string;
};

const productLinks: MenuLink[] = [
  {
    title: "Components",
    href: "/docs/components",
    description: "Browse production-ready blocks and UI patterns.",
  },

  {
    title: "Theming",
    href: "/docs/getting-started/theming",
    description: "Customize colors, tokens, and visual consistency.",
  },
  {
    title: "Installation",
    href: "/docs/getting-started/installation",
    description: "Set up Bilal UI quickly in your project.",
  },
];

const resourceLinks: MenuLink[] = [
  {
    title: "Introduction",
    href: "/docs/getting-started/introduction",
    description: "Understand the philosophy and usage model.",
  },
  {
    title: "Changelog",
    href: "/docs/getting-started/changelog",
    description: "Track newly added components and updates.",
  },
  {
    title: "Troubleshooting",
    href: "/docs/getting-started/troubleshooting",
    description: "Fix common setup and runtime issues quickly.",
  },

];

function NavigationGrid({ links }: { links: MenuLink[] }) {
  return (
    <ul className="grid gap-2 p-2 md:w-[460px] md:grid-cols-2">
      {links.map((link) => (
        <li key={link.title}>
          <NavigationMenuLink asChild>
            <a
              href={link.href}
              className="block rounded-md border bg-card px-3 py-2 transition-colors hover:bg-muted/50"
            >
              <p className="text-sm font-semibold">{link.title}</p>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
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
    <div className="w-full max-w-2xl rounded-xl border bg-card p-3 shadow-sm">
      <NavigationMenu viewport={false} className="max-w-full justify-start">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationGrid links={productLinks} />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationGrid links={resourceLinks} />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/docs/components/sheet"
              className="inline-flex h-9 items-center rounded-md px-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              New
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
