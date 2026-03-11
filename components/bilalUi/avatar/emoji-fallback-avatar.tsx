"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function AvatarEmojiFallback() {
  return (
    <div className="flex items-center gap-3">
      {[
        { emoji: "🧑‍💻", bg: "bg-blue-50" },
        { emoji: "🎨", bg: "bg-pink-50" },
        { emoji: "🚀", bg: "bg-amber-50" },
        { emoji: "🌿", bg: "bg-green-50" },
      ].map(({ emoji, bg }) => (
        <Avatar key={emoji} className="size-10">
          <AvatarFallback className={cn("text-base", bg)}>{emoji}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
