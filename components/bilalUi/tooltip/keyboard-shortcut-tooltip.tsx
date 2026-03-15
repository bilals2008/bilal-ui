"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function KeyboardShortcutTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <span>Command Palette</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent className="flex items-center gap-2 border-slate-800 bg-slate-900 text-slate-50">
        <span className="text-sm">Press</span>
        <kbd className="rounded border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-semibold">
          Ctrl+K
        </kbd>
      </TooltipContent>
    </Tooltip>
  );
}



