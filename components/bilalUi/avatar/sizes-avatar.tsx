"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarSizes() {
  return (
    <div className="flex items-center gap-4">
      {[
        { size: "size-6", text: "text-[9px]" },
        { size: "size-8", text: "text-xs" },
        { size: "size-10", text: "text-sm" },
        { size: "size-14", text: "text-base" },
        { size: "size-20", text: "text-lg" },
      ].map(({ size, text }) => (
        <Avatar key={size} className={size}>
          <AvatarImage src={AVATAR_URL} alt="User" />
          <AvatarFallback className={text}>BU</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
