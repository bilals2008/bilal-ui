"use client";

import { useState } from "react";
import { Briefcase, Home, Image } from "lucide-react";

import { cn } from "@/lib/utils";

const ITEMS = [
  { value: "overview", label: "Overview", icon: Home },
  { value: "work", label: "Work", icon: Briefcase },
  { value: "media", label: "Media", icon: Image },
];

export function UnderlineTabs() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="w-full max-w-md">
      <div className="flex border-b border-border">
        {ITEMS.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            type="button"
            onClick={() => setTab(value)}
            className={cn(
              "flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-medium transition-colors",
              tab === value
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>
      <div className="p-4 text-sm text-muted-foreground">
        {ITEMS.find((item) => item.value === tab)?.label} content.
      </div>
    </div>
  );
}
