"use client";

import { useState } from "react";
import { Check, Zap } from "lucide-react";

import { Switch } from "@/components/ui/switch";

export function WithIconSwitch() {
  const [premium, setPremium] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">With Icons</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-950">
              <Zap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            </div>
            <span className="text-sm font-medium text-foreground">Premium features</span>
          </div>
          <Switch checked={premium} onCheckedChange={setPremium} />
        </div>
        <div className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
              <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-sm font-medium text-foreground">Auto-save</span>
          </div>
          <Switch defaultChecked />
        </div>
      </div>
    </div>
  );
}

