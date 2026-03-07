"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function NotificationDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full gap-2">
          <Bell className="h-4 w-4" />
          Notifications
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
        </DrawerHeader>
        <div className="space-y-3 px-4 py-4">
          {[
            { title: "New Message", time: "2 mins ago" },
            { title: "Order Shipped", time: "1 hour ago" },
            { title: "Payment Received", time: "2 hours ago" },
          ].map((notif) => (
            <div
              key={`${notif.title}-${notif.time}`}
              className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-950"
            >
              <p className="text-sm font-medium">{notif.title}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {notif.time}
              </p>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
