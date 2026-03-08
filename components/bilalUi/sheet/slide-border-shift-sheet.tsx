"use client";

import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SlideBorderShiftSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 transition-colors duration-200 hover:border-cyan-400/50"
        >
          <ChevronRight className="size-4" />
          Details
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="border-l-2 border-cyan-500/20 bg-gradient-to-b from-background to-cyan-50/5 transition-all duration-300 dark:from-background dark:to-cyan-950/5"
      >
        <SheetHeader>
          <SheetTitle>Details Panel</SheetTitle>
          <SheetDescription>View comprehensive information</SheetDescription>
        </SheetHeader>

        <div className="space-y-4 py-4">
          <div className="rounded-lg border border-cyan-200/30 bg-cyan-50/50 px-4 py-3 transition-all duration-200 hover:border-cyan-300/50 hover:bg-cyan-50/80 dark:border-cyan-800/30 dark:bg-cyan-950/20 dark:hover:bg-cyan-950/40">
            <p className="text-sm font-medium">Information</p>
            <p className="text-xs text-muted-foreground">Details appear here</p>
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

