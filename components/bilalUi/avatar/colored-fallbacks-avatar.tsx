"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function AvatarColoredFallbacks() {
  const users = [
    { initials: "AJ", bg: "bg-red-100 text-red-700" },
    { initials: "SL", bg: "bg-blue-100 text-blue-700" },
    { initials: "RP", bg: "bg-green-100 text-green-700" },
    { initials: "OH", bg: "bg-amber-100 text-amber-700" },
    { initials: "NW", bg: "bg-violet-100 text-violet-700" },
  ];

  return (
    <div className="flex items-center gap-3">
      {users.map(({ initials, bg }) => (
        <Avatar key={initials} className="size-10">
          <AvatarFallback className={cn("text-xs font-semibold", bg)}>
            {initials}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
