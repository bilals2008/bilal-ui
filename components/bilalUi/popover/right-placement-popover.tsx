"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function RightPlacementPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Opens right</Button>
      </PopoverTrigger>
      <PopoverContent side="right" className="w-48">
        <p className="text-sm text-muted-foreground">Popover on the right side.</p>
      </PopoverContent>
    </Popover>
  );
}
