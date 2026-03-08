"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ThemeSwitcherToggleGroup() {
  const [theme, setTheme] = React.useState("light");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Theme</label>
      <ToggleGroup type="single" value={theme} onValueChange={(v) => v && setTheme(v)}>
        <ToggleGroupItem value="light" aria-label="Light mode">
          <Sun className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" aria-label="Dark mode">
          <Moon className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

