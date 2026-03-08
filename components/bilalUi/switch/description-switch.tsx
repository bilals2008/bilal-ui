"use client";

import { useState } from "react";

import { Switch } from "@/components/ui/switch";

export function DescriptionSwitch() {
  const [analytics, setAnalytics] = useState(true);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">With Descriptions</h3>
      <div className="space-y-3">
        <div className="flex items-start justify-between rounded-lg border border-border p-4 transition-all hover:border-border/80 hover:bg-muted/30">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Analytics</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Track user interactions and behavior
            </p>
          </div>
          <Switch checked={analytics} onCheckedChange={setAnalytics} className="ml-4" />
        </div>
        <div className="flex items-start justify-between rounded-lg border border-border p-4 transition-all hover:border-border/80 hover:bg-muted/30">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Email digests</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Weekly summary of your activity
            </p>
          </div>
          <Switch defaultChecked className="ml-4" />
        </div>
      </div>
    </div>
  );
}

