"use client";

import { LogOut, MessageSquare, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function ProfileDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full gap-2">
          <Shield className="h-4 w-4" />
          Profile
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-72">
        <DrawerHeader className="border-b">
          <DrawerTitle>John Doe</DrawerTitle>
          <DrawerDescription>john@example.com</DrawerDescription>
        </DrawerHeader>
        <div className="space-y-3 px-4 py-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="mb-2 text-sm font-medium">Account Status</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Premium Member Since 2023
            </p>
          </div>
          <div className="space-y-2">
            <button className="flex w-full items-center rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
              <Settings className="mr-3 h-4 w-4" />
              Account Settings
            </button>
            <button className="flex w-full items-center rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
              <MessageSquare className="mr-3 h-4 w-4" />
              Messages
            </button>
            <button className="flex w-full items-center rounded-lg px-4 py-3 text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950">
              <LogOut className="mr-3 h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
