"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function CompactTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 transition-colors duration-150 hover:bg-gray-200">
          <span className="text-xs font-bold text-gray-700">?</span>
        </button>
      </TooltipTrigger>
      <TooltipContent className="border-gray-800 bg-gray-900 px-2 py-1 text-xs text-gray-50">
        Quick hint
      </TooltipContent>
    </Tooltip>
  );
}
