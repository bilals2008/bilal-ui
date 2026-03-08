"use client";

import { AlertTriangle } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function AnimatedDelayTooltip() {
  return (
    <Tooltip delayDuration={500}>
      <TooltipTrigger asChild>
        <button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-50 transition-colors duration-150 hover:bg-orange-100">
          <AlertTriangle className="size-4 text-orange-600" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="animate-in fade-in duration-200 border-slate-800 bg-slate-900 text-slate-50">
        Delayed tooltip with smooth animation
      </TooltipContent>
    </Tooltip>
  );
}

