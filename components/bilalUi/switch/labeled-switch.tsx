"use client";

import { useState } from "react";

import { Switch } from "@/components/ui/switch";

export function LabeledSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Labeled Switches</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50">
          <span className="text-sm text-foreground">Enable notifications</span>
          <Switch checked={enabled} onCheckedChange={setEnabled} />
        </div>
        <div className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50">
          <span className="text-sm text-foreground">Dark mode</span>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3">
          <span className="text-sm text-muted-foreground">Maintenance mode</span>
          <Switch disabled />
        </div>
      </div>
    </div>
  );
}

