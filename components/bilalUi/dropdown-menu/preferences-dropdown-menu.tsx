// File: components/bilalUi/dropdown-menu/preferences-dropdown-menu.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlidersHorizontal } from "lucide-react";

export function PreferencesDropdownMenu() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivity, setShowActivity] = useState(false);
  const [theme, setTheme] = useState("system");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 border-violet-500/40 text-violet-600 dark:text-violet-300"
        >
          <SlidersHorizontal className="size-4" />
          Preferences
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>View</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={(checked) => setShowStatusBar(checked === true)}
        >
          Show Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivity}
          onCheckedChange={(checked) => setShowActivity(checked === true)}
        >
          Show Activity
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
