"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function PositionBottomTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">
          Bottom Position
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="border-slate-800 bg-slate-900 text-slate-50">
        Tooltip appears below the trigger
      </TooltipContent>
    </Tooltip>
  );
}

