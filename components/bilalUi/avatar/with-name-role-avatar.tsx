"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarWithNameRole() {
  return (
    <div className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3">
      <div className="relative w-fit">
        <Avatar className="size-11">
          <AvatarImage src={AVATAR_URL} alt="Sam Lee" />
          <AvatarFallback>SL</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-emerald-500" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">Sam Lee</p>
        <p className="text-xs text-muted-foreground">Product Designer</p>
      </div>
      <span className="text-xs text-muted-foreground">Admin</span>
    </div>
  );
}
