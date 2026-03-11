"use client";

import { Bell } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarNotifBell() {
  return (
    <div className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3">
      <div className="relative w-fit">
        <Avatar className="size-12">
          <AvatarImage src={AVATAR_URL} alt="User" />
          <AvatarFallback>BU</AvatarFallback>
        </Avatar>
        <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full border-2 border-background bg-primary">
          <Bell className="size-3 text-primary-foreground" />
        </span>
      </div>
      <div>
        <p className="text-sm font-semibold">BilalUI</p>
        <p className="text-xs text-muted-foreground">3 new notifications</p>
      </div>
    </div>
  );
}
