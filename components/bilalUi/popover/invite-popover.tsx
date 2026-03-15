"use client";

import { Link, Mail, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export function InvitePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <UserPlus className="h-4 w-4" />
          Invite
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <p className="mb-1 text-sm font-semibold">Invite teammates</p>
        <p className="mb-3 text-xs text-muted-foreground">Send an invite link via email.</p>
        <div className="flex gap-2">
          <Input placeholder="email@company.com" className="h-8 flex-1 text-sm" />
          <Button size="sm" className="shrink-0">
            <Mail className="mr-1 h-3.5 w-3.5" />
            Send
          </Button>
        </div>
        <Separator className="my-3" />
        <p className="mb-2 text-xs text-muted-foreground">Or share invite link</p>
        <Button variant="outline" size="sm" className="w-full gap-2 text-xs">
          <Link className="h-3.5 w-3.5" />
          Copy invite link
        </Button>
      </PopoverContent>
    </Popover>
  );
}
