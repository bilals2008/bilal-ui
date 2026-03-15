"use client";

import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function BasicTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Info className="size-4 text-sky-500" />
          Hover me
        </Button>
      </TooltipTrigger>
      <TooltipContent className="border border-sky-400 bg-sky-500 text-white [&_svg]:bg-sky-500 [&_svg]:fill-sky-500">
        Colorized tooltip content
      </TooltipContent>
    </Tooltip>
  );
}


