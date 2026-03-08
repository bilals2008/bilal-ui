"use client";

import * as React from "react";

import { Slider } from "@/components/ui/slider";

export function RangeSlider() {
  const [values, setValues] = React.useState([20, 80]);

  return (
    <div className="w-full max-w-sm space-y-4">
      <Slider
        value={values}
        onValueChange={setValues}
        max={100}
        step={1}
        className="[&_[data-slot=slider-range]]:bg-blue-500 [&_[data-slot=slider-thumb]]:border-blue-500 [&_[data-slot=slider-thumb]]:bg-blue-500"
      />
      <div className="flex justify-between text-sm">
        <span>Min: ${values[0]}</span>
        <span>Max: ${values[1]}</span>
      </div>
    </div>
  );
}
