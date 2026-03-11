"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function StatusIndicatorTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="inline-flex cursor-help items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 transition-colors duration-150 hover:bg-emerald-100">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-sm font-medium text-emerald-700">Active</span>
        </div>
      </TooltipTrigger>
      <TooltipContent className="border-slate-800 bg-slate-900 text-slate-50">
        System is operating normally
      </TooltipContent>
    </Tooltip>
  );
}

