"use client";

import { Switch } from "@/components/ui/switch";

export function CompactSwitch() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-foreground">Compact Variant</h3>
      <div className="grid grid-cols-3 gap-2">
        {["Email", "SMS", "Push", "In-app", "Slack", "Teams"].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between rounded border border-border p-2 transition-colors hover:bg-muted/40"
          >
            <span className="text-xs font-medium text-foreground">{item}</span>
            <Switch defaultChecked className="origin-right scale-75" />
          </div>
        ))}
      </div>
    </div>
  );
}

