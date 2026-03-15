"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  { label: "Dashboard", active: true },
  { label: "Projects" },
  { label: "Teams" },
  { label: "Workflows" },
  { label: "Analytics" },
];

export function SlideOutMenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          Menu
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="border-r border-border">
        <SheetHeader className="mb-6">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              type="button"
              variant="ghost"
              className={`w-full justify-start px-3 py-2 text-sm transition-all duration-150 ${
                item.active
                  ? "bg-muted/60 font-medium"
                  : "hover:translate-x-1 hover:bg-muted/40"
              }`}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
