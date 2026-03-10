"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarWithNotifBadge() {
  return (
    <div className="relative w-fit">
      <Avatar className="size-11">
        <AvatarImage src={AVATAR_URL} alt="User" />
        <AvatarFallback>BU</AvatarFallback>
      </Avatar>
      <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-destructive text-[10px] font-bold text-destructive-foreground">
        3
      </span>
    </div>
  );
}
