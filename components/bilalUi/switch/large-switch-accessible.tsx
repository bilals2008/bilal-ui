"use client";

import { useState } from "react";

import { Switch } from "@/components/ui/switch";

export function LargeSwitchAccessible() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Large - Accessibility</h3>
      <div className="flex items-center gap-4 rounded-lg border-2 border-border p-6 transition-colors hover:border-border/60">
        <div className="flex-1">
          <p className="text-base font-medium text-foreground">Enable voice input</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Larger target for better accessibility
          </p>
        </div>
        <div className="h-10 w-16 rounded-full border-2 border-border p-1">
          <Switch checked={enabled} onCheckedChange={setEnabled} />
        </div>
      </div>
    </div>
  );
}

