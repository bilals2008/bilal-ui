"use client";

import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function ErrorTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button type="button" variant="ghost" size="icon" className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-50 transition-colors duration-150 hover:bg-red-100">
          <AlertCircle className="size-4 text-red-600" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="border-red-800 bg-red-900 text-red-50">
        Email format is invalid. Use example@domain.com
      </TooltipContent>
    </Tooltip>
  );
}




