"use client";

import { Filter, X } from "lucide-react";

import { Button } from "@/components/ui/button";
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

export function FilterPanelSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 transition-all duration-200 hover:border-purple-400/50"
        >
          <Filter className="size-4" />
          Filters
        </Button>
      </SheetTrigger>

      <SheetContent side="bottom" className="border-t border-border sm:w-full">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>Filters</SheetTitle>
            <SheetClose asChild>
              <button className="rounded p-1 transition-colors duration-150 hover:bg-muted/50">
                <X className="size-4" />
              </button>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="space-y-4 py-4">
          <div>
            <Label className="text-xs font-semibold uppercase text-muted-foreground">
              Category
            </Label>
            <div className="mt-2 space-y-2">
              {["All", "Active", "Archived"].map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 rounded px-2 py-1 transition-colors duration-150 hover:bg-muted/50"
                >
                  <input type="radio" name="category" className="size-3" />
                  <span className="text-sm">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="h-px bg-border/50" />

          <div>
            <Label className="text-xs font-semibold uppercase text-muted-foreground">
              Sort
            </Label>
            <div className="mt-2 space-y-2">
              {["Newest", "Oldest", "Name"].map((sort) => (
                <label
                  key={sort}
                  className="flex items-center gap-2 rounded px-2 py-1 transition-colors duration-150 hover:bg-muted/50"
                >
                  <input type="radio" name="sort" className="size-3" />
                  <span className="text-sm">{sort}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <SheetFooter className="flex gap-2">
          <SheetClose asChild>
            <Button variant="outline" size="sm">
              Reset
            </Button>
          </SheetClose>
          <Button size="sm">Apply</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
