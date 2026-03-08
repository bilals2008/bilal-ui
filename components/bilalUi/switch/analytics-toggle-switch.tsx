"use client";

import { useState } from "react";

import { Switch } from "@/components/ui/switch";

export function AnalyticsToggleSwitch() {
  const [analytics, setAnalytics] = useState({
    pageViews: true,
    clicks: true,
    scrollDepth: false,
    formSubmissions: true,
  });

  const handleChange = (key: keyof typeof analytics) => {
    setAnalytics((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Analytics Tracking</h3>
      <div className="space-y-3 rounded-lg border border-border bg-slate-50 p-4 dark:bg-slate-950/40">
        {Object.entries(analytics).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: value ? "#3b82f6" : "#9ca3af" }}
              />
              <span className="text-sm text-foreground">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </span>
            </div>
            <Switch checked={value} onCheckedChange={() => handleChange(key as keyof typeof analytics)} />
          </div>
        ))}
      </div>
    </div>
  );
}

