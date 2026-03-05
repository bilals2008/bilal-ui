"use client";

import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Crumb = {
  label: string;
  href?: string;
};

const PATH: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Workspace", href: "/workspace" },
  { label: "Design System", href: "/workspace/design-system" },
  { label: "Navigation", href: "/workspace/design-system/navigation" },
  { label: "Breadcrumb", href: "/workspace/design-system/navigation/breadcrumb" },
  { label: "Smart Ellipsis" },
];

export default function SmartEllipsisBreadcrumbDemo() {
  const first = PATH[0];
  const last = PATH[PATH.length - 1];
  const previous = PATH[PATH.length - 2];
  const hidden = PATH.slice(1, -2);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={first.href ?? "#"}>{first.label}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {hidden.length > 0 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-8 w-8 items-center justify-center rounded-md border border-transparent transition-colors hover:bg-muted focus-visible:ring-[3px] outline-none"
                    aria-label="Show hidden breadcrumb items"
                  >
                    <BreadcrumbEllipsis className="h-8 w-8" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-52">
                  {hidden.map((crumb) => (
                    <DropdownMenuItem key={crumb.label} asChild>
                      <Link href={crumb.href ?? "#"}>{crumb.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
          </>
        )}

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={previous.href ?? "#"}>{previous.label}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{last.label}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
