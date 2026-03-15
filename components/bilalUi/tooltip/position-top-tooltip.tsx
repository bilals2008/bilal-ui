"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function PositionTopTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">
          Top Position
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top" className="border-slate-800 bg-slate-900 text-slate-50">
        Tooltip appears above the trigger
      </TooltipContent>
    </Tooltip>
  );
}



