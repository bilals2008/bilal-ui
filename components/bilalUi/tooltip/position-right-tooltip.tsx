"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function PositionRightTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">
          Right Position
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" className="border-slate-800 bg-slate-900 text-slate-50">
        Tooltip appears to the right
      </TooltipContent>
    </Tooltip>
  );
}



