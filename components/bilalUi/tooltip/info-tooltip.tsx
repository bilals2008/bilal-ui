// File: components/bilalUi/tooltip/info-tooltip.tsx
"use client";

import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function InfoTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button type="button" variant="ghost" size="icon" className="inline-flex h-6 w-6 cursor-help items-center justify-center rounded-full bg-blue-50 transition-colors duration-150 hover:bg-blue-100">
          <Info className="size-4 text-blue-600" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="border-slate-800 bg-slate-900 text-sm text-slate-50">
        This is additional information about this field
      </TooltipContent>
    </Tooltip>
  );
}




