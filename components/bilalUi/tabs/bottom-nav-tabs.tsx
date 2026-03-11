"use client";

import { useState } from "react";
import { Globe, Home, Inbox, User } from "lucide-react";

import { cn } from "@/lib/utils";

const ITEMS = [
  { value: "home", label: "Home", icon: Home },
  { value: "explore", label: "Explore", icon: Globe },
  { value: "inbox", label: "Inbox", icon: Inbox, badge: 5 },
  { value: "profile", label: "Profile", icon: User },
];

export function BottomNavTabs() {
  const [tab, setTab] = useState("home");

  return (
    <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="min-h-[80px] flex-1 p-5 text-sm text-muted-foreground">
        {ITEMS.find((item) => item.value === tab)?.label} screen content.
      </div>
      <div className="flex border-t bg-background">
        {ITEMS.map(({ value, label, icon: Icon, badge }) => (
          <button
            key={value}
            type="button"
            onClick={() => setTab(value)}
            className={cn(
              "relative flex flex-1 flex-col items-center gap-0.5 py-3 text-[10px] font-medium transition-colors",
              tab === value ? "text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <div className="relative">
              <Icon className="h-5 w-5" />
              {badge ? (
                <span className="absolute -right-1.5 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[9px] font-bold text-destructive-foreground">
                  {badge}
                </span>
              ) : null}
            </div>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
