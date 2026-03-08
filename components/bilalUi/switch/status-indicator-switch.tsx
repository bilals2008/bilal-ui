"use client";

import { useState } from "react";

import { Switch } from "@/components/ui/switch";

const statusColors: Record<string, string> = {
  online: "bg-green-500",
  doNotDisturb: "bg-red-500",
  invisible: "bg-slate-400",
};

export function StatusIndicatorSwitch() {
  const [statuses, setStatuses] = useState({
    online: true,
    doNotDisturb: false,
    invisible: false,
  });

  const handleChange = (key: keyof typeof statuses) => {
    setStatuses((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Status Indicator</h3>
      <div className="space-y-3">
        {Object.entries(statuses).map(([key, value]) => (
          <div
            key={key}
            className={`rounded-lg border p-4 transition-all ${
              value
                ? "border-blue-500/40 bg-blue-50/50 dark:bg-blue-950/20"
                : "border-border hover:bg-muted/30"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`h-3 w-3 rounded-full ${value ? statusColors[key] : "bg-muted-foreground"} transition-colors`}
              />
              <span className="flex-1 text-sm capitalize text-foreground">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </span>
              <Switch checked={value} onCheckedChange={() => handleChange(key as keyof typeof statuses)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
