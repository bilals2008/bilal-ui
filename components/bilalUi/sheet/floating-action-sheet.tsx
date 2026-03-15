"use client";

import { SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
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
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="rounded-full shadow-sm transition-all duration-200 hover:border-foreground/30 hover:shadow-md"
        >
          <SlidersHorizontal className="size-4" />
        </Button>
      </SheetTrigger>

      <SheetContent className="border-l border-border/50">
        <SheetHeader>
          <SheetTitle className="text-sm">Options</SheetTitle>
        </SheetHeader>

        <div className="space-y-2 py-4">
          {["Option 1", "Option 2", "Option 3"].map((opt) => (
            <Button
              key={opt}
              type="button"
              variant="ghost"
              className="w-full justify-start px-3 py-2 text-sm transition-all duration-150 hover:bg-muted/50"
            >
              {opt}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
