"use client";

import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SettingsPanelDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>User Settings</DrawerTitle>
          <DrawerDescription>Manage your account preferences</DrawerDescription>
        </DrawerHeader>
        <div className="space-y-6 px-4 py-4">
          <div>
            <h3 className="mb-3 text-sm font-semibold">Notifications</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Email Alerts</Label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label>Push Notifications</Label>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
          <div className="border-t pt-6">
            <h3 className="mb-3 text-sm font-semibold">Privacy</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Public Profile</Label>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <Label>Share Activity</Label>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
