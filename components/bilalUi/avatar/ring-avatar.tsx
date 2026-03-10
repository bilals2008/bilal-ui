"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarWithRing() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="size-12 ring-2 ring-primary ring-offset-2 ring-offset-background">
        <AvatarImage src={AVATAR_URL} alt="Active user" />
        <AvatarFallback>AU</AvatarFallback>
      </Avatar>
      <Avatar className="size-12 ring-2 ring-emerald-500 ring-offset-2 ring-offset-background">
        <AvatarImage src={`${AVATAR_URL}&seed=green`} alt="Online user" />
        <AvatarFallback>ON</AvatarFallback>
      </Avatar>
      <Avatar className="size-12 ring-2 ring-amber-400 ring-offset-2 ring-offset-background">
        <AvatarImage src={`${AVATAR_URL}&seed=gold`} alt="Pro user" />
        <AvatarFallback>PR</AvatarFallback>
      </Avatar>
    </div>
  );
}
