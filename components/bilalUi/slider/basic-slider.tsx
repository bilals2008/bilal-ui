"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

// Helper functions for color mapping.
function getSliderTone(value: number) {
  if (value >= 90) return "danger";
  if (value >= 70) return "warning-high";
  if (value >= 50) return "warning";
  if (value >= 20) return "info";
  return "success";
}

function getToneClasses(tone: ReturnType<typeof getSliderTone>) {
  switch (tone) {
    case "danger":
      return "[&_[data-slot=slider-range]]:bg-red-500 [&_[data-slot=slider-thumb]]:border-red-500 [&_[data-slot=slider-thumb]]:bg-red-500";
    case "warning-high":
      return "[&_[data-slot=slider-range]]:bg-orange-500 [&_[data-slot=slider-thumb]]:border-orange-500 [&_[data-slot=slider-thumb]]:bg-orange-500";
    case "warning":
      return "[&_[data-slot=slider-range]]:bg-amber-500 [&_[data-slot=slider-thumb]]:border-amber-500 [&_[data-slot=slider-thumb]]:bg-amber-500";
    case "info":
      return "[&_[data-slot=slider-range]]:bg-sky-500 [&_[data-slot=slider-thumb]]:border-sky-500 [&_[data-slot=slider-thumb]]:bg-sky-500";
    default:
      return "[&_[data-slot=slider-range]]:bg-emerald-500 [&_[data-slot=slider-thumb]]:border-emerald-500 [&_[data-slot=slider-thumb]]:bg-emerald-500";
  }
}

export function BasicSlider() {
  const [value, setValue] = React.useState(50);
  const tone = getSliderTone(value);

  return (
    <div className="w-full max-w-sm">
      <Slider
        value={[value]}
        onValueChange={(next) => setValue(next[0] ?? 0)}
        max={100}
        step={1}
        className={cn(getToneClasses(tone))}
      />
      <p className="mt-2 text-sm text-muted-foreground">Value: {value}%</p>
    </div>
  );
}
