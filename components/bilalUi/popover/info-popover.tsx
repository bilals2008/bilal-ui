"use client";

import { HelpCircle, Info } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function InfoPopover() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span>Storage limit</span>
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <HelpCircle className="h-4 w-4" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-60" side="top">
          <div className="flex gap-2">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="text-xs leading-relaxed text-muted-foreground">
              Storage is shared across all team members. Upgrade your plan to increase the
              limit.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
