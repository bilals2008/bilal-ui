"use client";

import { Switch } from "@/components/ui/switch";

export function DisabledStateSwitch() {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Disabled States</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/40 p-3">
          <div>
            <p className="text-sm text-muted-foreground">Disabled (off)</p>
            <p className="mt-1 text-xs text-muted-foreground/70">Feature not available</p>
          </div>
          <Switch disabled />
        </div>
        <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/40 p-3">
          <div>
            <p className="text-sm text-muted-foreground">Disabled (on)</p>
            <p className="mt-1 text-xs text-muted-foreground/70">Locked by admin</p>
          </div>
          <Switch disabled defaultChecked />
        </div>
      </div>
    </div>
  );
}

