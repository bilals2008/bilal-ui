"use client";

import * as React from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function PeriodSelectorToggleGroup() {
  const [period, setPeriod] = React.useState("week");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Time Period</label>
      <ToggleGroup type="single" value={period} onValueChange={(v) => v && setPeriod(v)}>
        <ToggleGroupItem value="day" aria-label="Day">
          <span className="text-xs font-medium">Day</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="week" aria-label="Week">
          <span className="text-xs font-medium">Week</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="month" aria-label="Month">
          <span className="text-xs font-medium">Month</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="year" aria-label="Year">
          <span className="text-xs font-medium">Year</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-xs capitalize text-muted-foreground">View data by {period}</p>
    </div>
  );
}
