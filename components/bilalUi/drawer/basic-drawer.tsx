// File: components/bilalUi/drawer/basic-drawer.tsx
"use client";

import { Bell, Filter, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function BasicDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Filter className="size-4 text-emerald-500" />
          Open drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent className="border-t-emerald-300 dark:border-t-emerald-800">
        <DrawerHeader>
          <DrawerTitle>Quick controls</DrawerTitle>
          <DrawerDescription>
            Tune important settings from this mobile-friendly bottom drawer.
          </DrawerDescription>
        </DrawerHeader>

        <div className="space-y-3 px-4 pb-2">
          <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-3 py-2">
            <div className="flex items-center gap-2">
              <Bell className="size-4 text-emerald-500" />
              <Label htmlFor="push-alerts">Push alerts</Label>
            </div>
            <Switch id="push-alerts" defaultChecked />
          </div>

          <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-3 py-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-sky-500" />
              <Label htmlFor="secure-mode">Secure mode</Label>
            </div>
            <Switch id="secure-mode" />
          </div>
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button>Apply changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
