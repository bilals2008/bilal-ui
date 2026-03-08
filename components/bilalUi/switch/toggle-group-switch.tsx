"use client";

import { useState } from "react";

export function ToggleGroupSwitch() {
  const [selected, setSelected] = useState("weekly");

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Toggle Group</h3>
      <div className="inline-flex rounded-lg border border-border bg-muted/30 p-1">
        {["daily", "weekly", "monthly"].map((period) => (
          <button
            key={period}
            onClick={() => setSelected(period)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
              selected === period
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

