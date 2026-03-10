"use client";

import { Camera } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarEditable() {
  return (
    <div className="group relative w-fit cursor-pointer">
      <Avatar className="size-16">
        <AvatarImage src={AVATAR_URL} alt="User" />
        <AvatarFallback>BU</AvatarFallback>
      </Avatar>
      <span className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
        <Camera className="size-5 text-white" />
      </span>
      <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-primary">
        <Camera className="size-3 text-primary-foreground" />
      </span>
    </div>
  );
}
