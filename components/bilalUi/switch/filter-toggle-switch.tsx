"use client";

import { useState } from "react";
import { Filter } from "lucide-react";

import { Switch } from "@/components/ui/switch";

export function FilterToggleSwitch() {
  const [filters, setFilters] = useState({
    active: true,
    archived: false,
    draft: false,
  });

  const handleChange = (key: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const activeCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Filters</h3>
      <div className="space-y-2 rounded-lg border border-border bg-muted/20 p-3">
        {Object.entries(filters).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm capitalize text-foreground">{key}</span>
            </div>
            <Switch checked={value} onCheckedChange={() => handleChange(key as keyof typeof filters)} />
          </div>
        ))}
        {activeCount > 0 && (
          <div className="border-t border-border/40 pt-2 text-xs text-muted-foreground">
            {activeCount} filter{activeCount > 1 ? "s" : ""} applied
          </div>
        )}
      </div>
    </div>
  );
}

