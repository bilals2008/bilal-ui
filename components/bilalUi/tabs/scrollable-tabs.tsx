"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

const DAYS = [
  { value: "mon", label: "Monday" },
  { value: "tue", label: "Tuesday" },
  { value: "wed", label: "Wednesday" },
  { value: "thu", label: "Thursday" },
  { value: "fri", label: "Friday" },
  { value: "sat", label: "Saturday" },
  { value: "sun", label: "Sunday" },
];

export function ScrollableTabs() {
  const [tab, setTab] = useState("mon");

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="scrollbar-hide flex gap-1 overflow-x-auto pb-1">
        {DAYS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setTab(value)}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              tab === value
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="rounded-lg border bg-card p-4 text-sm text-muted-foreground">
        Schedule for {DAYS.find((day) => day.value === tab)?.label}.
      </div>
    </div>
  );
}
