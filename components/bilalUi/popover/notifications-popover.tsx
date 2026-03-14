"use client";

import { Bell } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const NOTES = [
  { title: "New comment", time: "2m ago", read: false },
  { title: "You were mentioned", time: "1h ago", read: false },
  { title: "Deploy succeeded", time: "3h ago", read: true },
];

export function NotificationsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
            2
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <p className="text-sm font-semibold">Notifications</p>
          <Badge variant="secondary" className="text-xs">
            2 new
          </Badge>
        </div>
        <div className="divide-y">
          {NOTES.map((note) => (
            <div
              key={note.title}
              className={cn("flex items-start gap-3 px-4 py-3", !note.read && "bg-muted/40")}
            >
              {note.read ? (
                <span className="mt-1.5 h-2 w-2 shrink-0" />
              ) : (
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{note.title}</p>
                <p className="text-xs text-muted-foreground">{note.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t p-2">
          <Button variant="ghost" size="sm" className="w-full text-xs">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
