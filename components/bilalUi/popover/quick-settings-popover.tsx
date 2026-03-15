"use client";

import { useState } from "react";
import { Sliders } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type ToggleRow = {
  label: string;
  sub: string;
  value: boolean;
  set: (value: boolean) => void;
};

function QuickToggle({ label, sub, value, set }: ToggleRow) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
      <button
        type="button"
        onClick={() => set(!value)}
        className={cn(
          "relative h-5 w-9 rounded-full transition-colors",
          value ? "bg-primary" : "bg-muted",
        )}
      >
        <span
          className={cn(
            "absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform",
            value && "translate-x-4",
          )}
        />
      </button>
    </div>
  );
}

export function QuickSettingsPopover() {
  const [dense, setDense] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Sliders className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <p className="mb-3 text-sm font-semibold">Quick settings</p>
        <div className="flex flex-col gap-3">
          <QuickToggle
            label="Dense mode"
            sub="Compact layout"
            value={dense}
            set={setDense}
          />
          <QuickToggle
            label="Notifications"
            sub="Email & push alerts"
            value={notifications}
            set={setNotifications}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
