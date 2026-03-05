"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import {
  Breadcrumb,
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

const SIBLING_SEGMENTS = [
  { label: "Breadcrumb", href: "/workspace/design-system/navigation/breadcrumb" },
  { label: "Tabs", href: "/workspace/design-system/navigation/tabs" },
  { label: "Pagination", href: "/workspace/design-system/navigation/pagination" },
  { label: "Steps", href: "/workspace/design-system/navigation/steps" },
];

export default function SegmentSwitchBreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/workspace">Workspace</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/workspace/design-system">Design System</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Navigation</BreadcrumbPage>
        </BreadcrumbItem>

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center gap-1 rounded-md border border-transparent px-1.5 py-1 text-sm text-foreground transition-colors hover:bg-muted focus-visible:ring-[3px] outline-none"
                aria-label="Switch current segment"
              >
                Breadcrumb
                <ChevronDown className="size-3.5 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-52">
              {SIBLING_SEGMENTS.map((segment) => (
                <DropdownMenuItem key={segment.label} asChild>
                  <Link href={segment.href}>{segment.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
