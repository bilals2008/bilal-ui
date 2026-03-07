"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const WEIGHTED_ITEMS = [
  { id: "security", label: "Security", weight: 5 },
  { id: "performance", label: "Performance", weight: 3 },
  { id: "ux", label: "UX Quality", weight: 2 },
] as const;

type ItemId = (typeof WEIGHTED_ITEMS)[number]["id"];

export function WeightedCheckbox() {
  const [selected, setSelected] = React.useState<Record<ItemId, boolean>>({
    security: false,
    performance: false,
    ux: false,
  });

  const total = WEIGHTED_ITEMS.reduce(
    (sum, item) => sum + (selected[item.id] ? item.weight : 0),
    0
  );
  const max = WEIGHTED_ITEMS.reduce((sum, item) => sum + item.weight, 0);

  return (
    <div className="inline-flex min-w-[320px] flex-col gap-3 rounded-lg border border-border p-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Feature Priority Score</p>
        <span className="rounded-full border border-border px-2 py-0.5 text-xs font-semibold">
          {total} / {max}
        </span>
      </div>

      <div className="space-y-2">
        {WEIGHTED_ITEMS.map((item) => (
          <label key={item.id} htmlFor={`weighted-${item.id}`} className="flex items-center justify-between gap-3 rounded-md border border-border px-2.5 py-2">
            <span className="inline-flex items-center gap-2 text-sm">
              <Checkbox
                id={`weighted-${item.id}`}
                checked={selected[item.id]}
                onCheckedChange={(value) =>
                  setSelected((prev) => ({ ...prev, [item.id]: value === true }))
                }
              />
              {item.label}
            </span>
            <span className="text-xs font-medium text-muted-foreground">+{item.weight} pts</span>
          </label>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">Live score updates as you toggle priorities.</p>
    </div>
  );
}
