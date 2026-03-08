"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

import { Switch } from "@/components/ui/switch";

export function ThemeModeSwitch() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Theme Mode</h3>
      <div
        className={`rounded-lg border-2 p-6 transition-all ${
          isDark ? "border-slate-700 bg-slate-950" : "border-amber-300 bg-amber-50"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isDark ? (
              <Moon className="h-5 w-5 text-slate-400" />
            ) : (
              <Sun className="h-5 w-5 text-amber-600" />
            )}
            <span className="text-sm font-medium">{isDark ? "Dark mode" : "Light mode"}</span>
          </div>
          <Switch checked={isDark} onCheckedChange={setIsDark} />
        </div>
      </div>
    </div>
  );
}

