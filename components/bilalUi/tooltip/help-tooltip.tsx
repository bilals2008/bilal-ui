"use client";

import { HelpCircle } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function HelpTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 transition-colors duration-150 hover:bg-purple-100">
          <HelpCircle className="size-4 text-purple-600" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs border-purple-800 bg-purple-900 text-purple-50">
        <p className="font-semibold">Need Help?</p>
        <p className="mt-1 text-sm">
          This feature helps you organize your workflow efficiently.
        </p>
      </TooltipContent>
    </Tooltip>
  );
}

