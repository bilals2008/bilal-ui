"use client";

import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function WarningTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button type="button" variant="ghost" size="icon" className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 transition-colors duration-150 hover:bg-amber-100">
          <AlertCircle className="size-4 text-amber-600" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="border-amber-800 bg-amber-900 text-amber-50">
        This action cannot be undone
      </TooltipContent>
    </Tooltip>
  );
}




