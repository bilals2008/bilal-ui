"use client";

import * as React from "react";
import { BarChart, Settings } from "lucide-react";

import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ChartTypeToggleGroup() {
  const [chart, setChart] = React.useState("bar");

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">Chart Type</Label>
      <ToggleGroup type="single" value={chart} onValueChange={(v) => v && setChart(v)}>
        <ToggleGroupItem value="bar" aria-label="Bar chart">
          <BarChart className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="line" aria-label="Line chart">
          <Settings className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}




