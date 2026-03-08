"use client";

import { Info } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function RichContentTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 transition-colors duration-150 hover:bg-indigo-100">
          <Info className="size-4 text-indigo-600" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-sm border-slate-800 bg-slate-900 p-3 text-slate-50">
        <div className="space-y-2">
          <p className="text-sm font-semibold">Feature Overview</p>
          <ul className="space-y-1 text-xs text-slate-300">
            <li>• Supports multiple formats</li>
            <li>• Real-time collaboration</li>
            <li>• Full version history</li>
          </ul>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}

