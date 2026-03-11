"use client";

import { useState } from "react";
import { Code, Database, Palette } from "lucide-react";

import { cn } from "@/lib/utils";

const ITEMS = [
  { value: "design", label: "Design", icon: Palette },
  { value: "code", label: "Code", icon: Code },
  { value: "database", label: "Database", icon: Database },
];

export function BorderedTabs() {
  const [tab, setTab] = useState("design");

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border">
      <div className="flex border-b bg-muted/40">
        {ITEMS.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            type="button"
            onClick={() => setTab(value)}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 border-r py-3 text-sm font-medium transition-colors last:border-r-0",
              tab === value
                ? "bg-background text-foreground"
                : "text-muted-foreground hover:bg-muted",
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>
      <div className="p-5 text-sm text-muted-foreground">
        {ITEMS.find((item) => item.value === tab)?.label} panel.
      </div>
    </div>
  );
}
