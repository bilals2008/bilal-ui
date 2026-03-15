"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function CommandPaletteSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 text-muted-foreground transition-all duration-200 hover:text-foreground"
        >
          <Search className="size-4" />
          <span className="hidden sm:inline">Search...</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="top" className="border-b border-border sm:max-w-none">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
          <Input
            placeholder="Find anything..."
            className="pl-10 transition-all duration-200 focus:ring-offset-0"
            autoFocus
          />
        </div>

        <div className="space-y-2">
          {["Documents", "Settings", "Help", "Notifications"].map((item) => (
            <Button
              key={item}
              type="button"
              variant="ghost"
              className="w-full justify-start px-3 py-2 text-sm transition-all duration-150 hover:translate-x-1 hover:bg-muted/50"
            >
              {item}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
