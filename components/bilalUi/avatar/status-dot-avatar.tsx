"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const AVATAR_URL = "https://api.dicebear.com/9.x/adventurer/svg?seed=BilalUI";

export function AvatarStatusDot() {
  return (
    <div className="flex items-center gap-4">
      {[
        { color: "bg-emerald-500", label: "Online" },
        { color: "bg-amber-400", label: "Away" },
        { color: "bg-slate-400", label: "Offline" },
        { color: "bg-red-500", label: "Busy" },
      ].map(({ color, label }) => (
        <div key={label} className="flex flex-col items-center gap-1.5">
          <div className="relative w-fit">
            <Avatar className="size-10">
              <AvatarImage src={`${AVATAR_URL}&seed=${label}`} alt={label} />
              <AvatarFallback>{label[0]}</AvatarFallback>
            </Avatar>
            <span
              className={cn(
                "absolute bottom-0 right-0 size-3 rounded-full border-2 border-background",
                color,
              )}
            />
          </div>
          <span className="text-[10px] text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  );
}
