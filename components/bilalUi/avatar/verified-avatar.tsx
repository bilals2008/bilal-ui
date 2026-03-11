"use client";

import { VerifiedIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarVerified() {
  return (
    <div className="relative w-fit">
      <Avatar className="size-10">
        <AvatarImage src={AVATAR_URL} alt="Verified user" />
        <AvatarFallback>VU</AvatarFallback>
      </Avatar>
      <span className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full bg-background">
        <VerifiedIcon className="size-full fill-sky-500 text-white" />
      </span>
    </div>
  );
}
