"use client";

import { ShieldCheck } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarAdminBadge() {
  return (
    <div className="relative w-fit">
      <Avatar className="size-12">
        <AvatarImage src={AVATAR_URL} alt="Admin" />
        <AvatarFallback>AD</AvatarFallback>
      </Avatar>
      <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full border-2 border-background bg-violet-600">
        <ShieldCheck className="size-3 text-white" />
      </span>
    </div>
  );
}
