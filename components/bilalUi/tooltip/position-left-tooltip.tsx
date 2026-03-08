"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function PositionLeftTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">
          Left Position
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left" className="border-slate-800 bg-slate-900 text-slate-50">
        Tooltip appears to the left
      </TooltipContent>
    </Tooltip>
  );
}

