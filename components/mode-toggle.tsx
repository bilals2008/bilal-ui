// File: components/mode-toggle.tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative h-9 w-9 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300 ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500 fill-amber-500/20 scale-100 rotate-0 transition-all duration-500 ease-in-out dark:scale-0 dark:-rotate-90 dark:opacity-0" />
        <Moon className="absolute h-[1.1rem] w-[1.1rem] text-indigo-400 fill-indigo-400/20 scale-0 rotate-90 transition-all duration-500 ease-in-out dark:scale-100 dark:rotate-0 dark:opacity-100" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
