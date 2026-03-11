"use client";

import { Wifi, WifiOff } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarConnectionStatus() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col items-center gap-1.5">
        <div className="relative w-fit">
          <Avatar className="size-11">
            <AvatarImage src={AVATAR_URL} alt="Online" />
            <AvatarFallback>ON</AvatarFallback>
          </Avatar>
          <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-emerald-500">
            <Wifi className="size-3 text-white" />
          </span>
        </div>
        <span className="text-[10px] text-muted-foreground">Connected</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <div className="relative w-fit">
          <Avatar className="size-11">
            <AvatarImage src={`${AVATAR_URL}&seed=offline`} alt="Offline" />
            <AvatarFallback>OF</AvatarFallback>
          </Avatar>
          <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-slate-400">
            <WifiOff className="size-3 text-white" />
          </span>
        </div>
        <span className="text-[10px] text-muted-foreground">Offline</span>
      </div>
    </div>
  );
}
