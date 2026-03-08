"use client";

import { CheckCircle } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function SuccessTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50 transition-colors duration-150 hover:bg-green-100">
          <CheckCircle className="size-4 text-green-600" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="border-green-800 bg-green-900 text-green-50">
        Changes saved successfully
      </TooltipContent>
    </Tooltip>
  );
}

