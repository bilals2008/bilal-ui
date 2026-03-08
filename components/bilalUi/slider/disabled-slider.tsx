"use client";

import { Slider } from "@/components/ui/slider";

export function DisabledSlider() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Slider
        value={[50]}
        disabled
        max={100}
        step={1}
        className="cursor-not-allowed opacity-50 [&_[data-slot=slider-range]]:bg-gray-300 [&_[data-slot=slider-thumb]]:border-gray-300 [&_[data-slot=slider-thumb]]:bg-gray-300"
      />
      <p className="text-sm text-muted-foreground">Disabled Slider</p>
    </div>
  );
}
