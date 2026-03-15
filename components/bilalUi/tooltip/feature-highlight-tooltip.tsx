"use client";

import { Star, Zap } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function FeatureHighlightTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="inline-flex h-6 w-6 cursor-help items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400 transition-all duration-150 hover:from-purple-500 hover:to-pink-500">
          <Zap className="size-4 text-white" />
        </div>
      </TooltipTrigger>
      <TooltipContent className="border-purple-700 bg-gradient-to-br from-purple-900 to-pink-900 text-slate-50">
        <div className="flex items-center gap-2">
          <Star className="size-4 fill-yellow-300 text-yellow-300" />
          <span className="font-semibold">New Feature</span>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}



