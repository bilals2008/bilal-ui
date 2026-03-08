"use client";

import { AlertCircle, Bell, CheckCircle, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const notifications = [
  {
    icon: CheckCircle,
    color: "text-green-500",
    title: "Completed",
    desc: "Task finished",
  },
  {
    icon: AlertCircle,
    color: "text-yellow-500",
    title: "Warning",
    desc: "Check required",
  },
  { icon: Clock, color: "text-blue-500", title: "Scheduled", desc: "Coming soon" },
];

export function NotificationCenterSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="relative gap-2 transition-all duration-200 hover:border-orange-400/50"
        >
          <Bell className="size-4" />
          <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
            3
          </span>
        </Button>
      </SheetTrigger>

      <SheetContent className="border-l border-border sm:w-96">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Bell className="size-5" />
            Notifications
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-3 py-4">
          {notifications.map((notif, i) => {
            const Icon = notif.icon;
            return (
              <div
                key={i}
                className="rounded-lg border border-border/50 bg-muted/30 px-3 py-2 transition-all duration-200 hover:border-border hover:bg-muted/50 hover:shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <Icon className={`mt-0.5 size-4 flex-shrink-0 ${notif.color}`} />
                  <div>
                    <p className="text-sm font-medium">{notif.title}</p>
                    <p className="text-xs text-muted-foreground">{notif.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline" size="sm">
              Dismiss
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
