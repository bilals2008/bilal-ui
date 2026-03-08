"use client";

import { useState } from "react";

import { Switch } from "@/components/ui/switch";

export function LoadingStateSwitch() {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (newChecked: boolean) => {
    setLoading(true);
    setTimeout(() => {
      setChecked(newChecked);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Loading State</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-border p-4 opacity-75 transition-colors hover:bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 animate-pulse rounded-full bg-amber-500" />
            <span className="text-sm text-foreground">Processing request...</span>
          </div>
          <Switch checked={checked} onCheckedChange={handleChange} disabled={loading} />
        </div>
      </div>
    </div>
  );
}

