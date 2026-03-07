"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { VerifiedIcon } from "lucide-react";

export function BadgeAvatar() {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="flex items-center justify-center gap-3">
        <div className="relative w-fit">
          <Avatar>
            <AvatarImage
              alt="verified user"
              src="https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI"
            />
            <AvatarFallback>VU</AvatarFallback>
          </Avatar>
          <span className="absolute -right-1 -bottom-1 flex size-3 items-center justify-center rounded-full bg-background">
            <VerifiedIcon className="size-full fill-sky-500 text-white" />
          </span>
        </div>
      </div>
    </div>
  );
}
