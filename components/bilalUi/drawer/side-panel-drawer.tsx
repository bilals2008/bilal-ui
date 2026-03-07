"use client";

import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SidePanelDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full gap-2">
          <Settings className="h-4 w-4" />
          Side Panel
        </Button>
      </DrawerTrigger>
      <DrawerContent className="border-l border-l-blue-500 dark:border-l-blue-600">
        <DrawerHeader>
          <DrawerTitle>Settings Panel</DrawerTitle>
          <DrawerDescription>Customize your preferences</DrawerDescription>
        </DrawerHeader>
        <div className="space-y-4 px-4 py-4">
          <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Label>Notifications</Label>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Label>Dark Mode</Label>
            <Switch />
          </div>
          <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Label>Private Mode</Label>
            <Switch />
          </div>
        </div>
        <DrawerFooter>
          <Button className="w-full">Save Changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
