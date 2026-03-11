"use client";

import { useState } from "react";
import { Image, Music, Video } from "lucide-react";

import { cn } from "@/lib/utils";

const ITEMS = [
  { value: "music", label: "Music", icon: Music, description: "Listen to your library" },
  { value: "images", label: "Photos", icon: Image, description: "Browse your gallery" },
  { value: "video", label: "Video", icon: Video, description: "Watch your collection" },
];

export function CardTabs() {
  const [tab, setTab] = useState("music");

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="grid grid-cols-3 gap-2">
        {ITEMS.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            type="button"
            onClick={() => setTab(value)}
            className={cn(
              "flex flex-col items-center gap-1.5 rounded-xl border p-3 text-xs font-medium transition-all",
              tab === value
                ? "border-primary bg-primary/5 text-primary shadow-sm"
                : "border-border bg-card text-muted-foreground hover:border-muted-foreground/40",
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <div className="rounded-xl border bg-card p-4 text-sm text-muted-foreground">
        {ITEMS.find((item) => item.value === tab)?.description}
      </div>
    </div>
  );
}
