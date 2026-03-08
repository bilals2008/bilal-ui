"use client";

import * as React from "react";

import { Slider } from "@/components/ui/slider";

export function PriceRangeSlider() {
  const [prices, setPrices] = React.useState([250, 750]);

  return (
    <div className="w-full max-w-sm space-y-4 rounded-lg bg-slate-50 p-6">
      <div className="space-y-2">
        <h3 className="font-semibold">Price Range</h3>
        <Slider
          value={prices}
          onValueChange={setPrices}
          max={1000}
          step={10}
          className="[&_[data-slot=slider-range]]:bg-indigo-600 [&_[data-slot=slider-thumb]]:border-indigo-600 [&_[data-slot=slider-thumb]]:bg-indigo-600"
        />
      </div>
      <div className="flex justify-between">
        <span className="text-sm font-semibold">${prices[0]}</span>
        <span className="text-sm font-semibold">${prices[1]}</span>
      </div>
    </div>
  );
}

