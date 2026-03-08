"use client";

import { useState } from "react";
import { Activity, Bell, Database } from "lucide-react";

import { cn } from "@/lib/utils";

const ITEMS = [
  { value: "active", label: "Active", icon: Activity, color: "bg-emerald-500 text-white" },
  { value: "paused", label: "Paused", icon: Bell, color: "bg-amber-500 text-white" },
  { value: "archived", label: "Archived", icon: Database, color: "bg-slate-500 text-white" },
];

export function ColoredTabs() {
  const [tab, setTab] = useState("active");

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex gap-2">
        {ITEMS.map(({ value, label, icon: Icon, color }) => (
          <button
            key={value}
            type="button"
            onClick={() => setTab(value)}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-all",
              tab === value ? color : "bg-muted text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>
      <div className="rounded-lg border bg-card p-4 text-sm text-muted-foreground">
        Showing {ITEMS.find((item) => item.value === tab)?.label} items.
      </div>
    </div>
  );
}
