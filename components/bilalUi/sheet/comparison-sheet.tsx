"use client";

import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function ComparisonSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <ChevronRight className="size-4" />
          Compare
        </Button>
      </SheetTrigger>

      <SheetContent className="border-l border-border sm:w-[600px]">
        <SheetHeader>
          <SheetTitle>Comparison</SheetTitle>
        </SheetHeader>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border/50 bg-muted/20 p-4">
            <p className="text-sm font-medium">Option A</p>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li>Feature 1</li>
              <li>Feature 2</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border/50 bg-muted/20 p-4">
            <p className="text-sm font-medium">Option B</p>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li>Feature 1</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>

        <SheetFooter className="mt-6">
          <Button variant="outline">Cancel</Button>
          <Button>Select Option A</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

