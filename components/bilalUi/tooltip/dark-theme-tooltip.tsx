"use client";

import { Info } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function DarkThemeTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 transition-colors duration-150 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600">
          <Info className="size-4 text-slate-700 dark:text-slate-300" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="border-slate-700 bg-slate-900 text-slate-50 dark:border-slate-300 dark:bg-slate-100 dark:text-slate-900">
        Theme-aware tooltip content
      </TooltipContent>
    </Tooltip>
  );
}

