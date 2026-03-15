"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function TopPlacementPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Opens above</Button>
      </PopoverTrigger>
      <PopoverContent side="top" className="w-56 text-center">
        <p className="text-sm text-muted-foreground">This popover appears above the trigger.</p>
      </PopoverContent>
    </Popover>
  );
}
