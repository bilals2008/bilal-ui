"use client";

import { User, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function PreviewCardPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="text-sm text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
        >
          @alexjohnson
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" align="start">
        <div className="h-14 rounded-t-md bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
        <div className="-mt-7 px-4 pb-4">
          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-muted">
            <User className="h-7 w-7 text-muted-foreground" />
          </div>
          <p className="text-sm font-semibold">Alex Johnson</p>
          <p className="mb-2 text-xs text-muted-foreground">@alexjohnson · Product Designer</p>
          <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
            Designing products that people love. Based in NYC.
          </p>
          <div className="mb-3 flex gap-4 text-xs text-muted-foreground">
            <span>
              <strong className="text-foreground">248</strong> Following
            </span>
            <span>
              <strong className="text-foreground">14.2k</strong> Followers
            </span>
          </div>
          <Button size="sm" className="w-full gap-2">
            <UserPlus className="h-3.5 w-3.5" />
            Follow
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
