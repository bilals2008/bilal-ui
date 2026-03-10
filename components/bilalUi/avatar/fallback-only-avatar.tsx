"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AvatarFallbackOnly() {
  return (
    <div className="flex items-center gap-3">
      {["Alex Johnson", "Sam Lee", "Rita Patel", "Omar Hassan"].map((name) => {
        const initials = name
          .split(" ")
          .map((part) => part[0])
          .join("");

        return (
          <Avatar key={name}>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        );
      })}
    </div>
  );
}
