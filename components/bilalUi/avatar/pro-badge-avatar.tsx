"use client";

import { Crown } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarProBadge() {
  return (
    <div className="relative w-fit">
      <Avatar className="size-12">
        <AvatarImage src={AVATAR_URL} alt="Pro user" />
        <AvatarFallback>PR</AvatarFallback>
      </Avatar>
      <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full border-2 border-background bg-amber-400">
        <Crown className="size-3 text-white" />
      </span>
    </div>
  );
}
