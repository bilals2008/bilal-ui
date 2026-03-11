"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarWithName() {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-10">
        <AvatarImage src={AVATAR_URL} alt="Alex Johnson" />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold leading-none">Alex Johnson</p>
        <p className="mt-1 text-xs text-muted-foreground">alex@example.com</p>
      </div>
    </div>
  );
}
