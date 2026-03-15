"use client";

import { Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function GlowingBorderSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 transition-all duration-200 hover:border-amber-400/50 hover:shadow-sm"
        >
          <Filter className="size-4" />
          Filters
        </Button>
      </SheetTrigger>

      <SheetContent className="border-l border-border transition-all duration-200">
        <SheetHeader>
          <SheetTitle>Filter Options</SheetTitle>
        </SheetHeader>

        <div className="space-y-4 py-4">
          <div className="rounded-lg border border-border/50 bg-background px-3 py-2 transition-all duration-200 hover:border-amber-400/30 hover:bg-amber-50/30 dark:hover:bg-amber-950/10">
            <Label className="text-sm font-medium">Status</Label>
            <div className="mt-2 space-y-2">
              {["Active", "Inactive", "Pending"].map((status) => (
                <div key={status} className="flex items-center gap-2">
                  <Checkbox id={status} />
                  <Label htmlFor={status} className="text-sm font-normal text-muted-foreground">
                    {status}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Reset</Button>
          </SheetClose>
          <Button>Apply</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
