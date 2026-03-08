"use client";

import { SlidersHorizontal } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function FloatingActionSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-full border border-border bg-background p-2 shadow-sm transition-all duration-200 hover:border-foreground/30 hover:shadow-md">
          <SlidersHorizontal className="size-4" />
        </button>
      </SheetTrigger>

      <SheetContent className="border-l border-border/50">
        <SheetHeader>
          <SheetTitle className="text-sm">Options</SheetTitle>
        </SheetHeader>

        <div className="space-y-2 py-4">
          {["Option 1", "Option 2", "Option 3"].map((opt) => (
            <button
              key={opt}
              className="block w-full rounded px-3 py-2 text-left text-sm transition-all duration-150 hover:bg-muted/50"
            >
              {opt}
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

