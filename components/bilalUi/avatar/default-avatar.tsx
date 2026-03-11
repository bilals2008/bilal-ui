"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarDefault() {
  return (
    <Avatar>
      <AvatarImage src={AVATAR_URL} alt="User" />
      <AvatarFallback>BU</AvatarFallback>
    </Avatar>
  );
}
