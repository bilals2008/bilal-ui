"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function AvatarGroup() {
  const seeds = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

  return (
    <div className="flex items-center">
      {seeds.slice(0, 4).map((seed, index) => (
        <Avatar
          key={seed}
          className={cn("size-9 border-2 border-background", index > 0 && "-ml-3")}
        >
          <AvatarImage
            src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`}
            alt={seed}
          />
          <AvatarFallback>{seed[0]}</AvatarFallback>
        </Avatar>
      ))}
      <Avatar className="-ml-3 size-9 border-2 border-background">
        <AvatarFallback className="bg-muted text-xs font-medium text-muted-foreground">
          +8
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
