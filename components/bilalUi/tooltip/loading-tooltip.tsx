"use client";

import { Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function LoadingTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button type="button" variant="ghost" size="icon" className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-50 transition-colors duration-150 hover:bg-cyan-100">
          <Clock className="size-4 animate-spin text-cyan-600" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="border-slate-800 bg-slate-900 text-slate-50">
        Processing your request...
      </TooltipContent>
    </Tooltip>
  );
}




