"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarRoundedSquare() {
  return (
    <div className="flex items-center gap-3">
      {["rounded-none", "rounded-sm", "rounded-md", "rounded-lg", "rounded-full"].map(
        (rounded) => (
          <Avatar key={rounded} className={cn("size-10", rounded)}>
            <AvatarImage src={AVATAR_URL} alt="User" />
            <AvatarFallback className={rounded}>BU</AvatarFallback>
          </Avatar>
        ),
      )}
    </div>
  );
}
