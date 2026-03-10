"use client";

import { Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function AvatarAddMember() {
  const seeds = ["Alice", "Bob", "Charlie"];

  return (
    <div className="flex items-center">
      {seeds.map((seed, index) => (
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
      <button className="-ml-3 flex size-9 items-center justify-center rounded-full border-2 border-dashed border-border bg-background transition-colors hover:bg-muted">
        <Plus className="size-4 text-muted-foreground" />
      </button>
    </div>
  );
}
