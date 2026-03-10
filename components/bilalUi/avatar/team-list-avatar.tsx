"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function AvatarTeamList() {
  const members = [
    { name: "Alex Johnson", role: "Engineering", seed: "Alex", status: "bg-emerald-500" },
    { name: "Sara Malik", role: "Design", seed: "Sara", status: "bg-amber-400" },
    { name: "Kevin Torres", role: "Product", seed: "Kevin", status: "bg-slate-400" },
  ];

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      {members.map(({ name, role, seed, status }) => (
        <div key={name} className="flex items-center gap-3 rounded-lg border bg-card px-3 py-2.5">
          <div className="relative w-fit shrink-0">
            <Avatar className="size-9">
              <AvatarImage
                src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`}
                alt={name}
              />
              <AvatarFallback>
                {name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span
              className={cn(
                "absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-background",
                status,
              )}
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
