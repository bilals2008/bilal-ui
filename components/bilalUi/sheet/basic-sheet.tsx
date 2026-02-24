"use client";

import { Bell, ShieldCheck, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";

export function BasicSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="size-4 text-fuchsia-500" />
          Open sheet
        </Button>
      </SheetTrigger>

      <SheetContent className="border-l-fuchsia-300 dark:border-l-fuchsia-800">
        <SheetHeader>
          <SheetTitle>Quick Settings</SheetTitle>
          <SheetDescription>
            Update notification and security preferences without leaving the page.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-4 px-4 pb-2">
          <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-3 py-2">
            <div className="flex items-center gap-2">
              <Bell className="size-4 text-fuchsia-500" />
              <Label htmlFor="email-alerts">Email alerts</Label>
            </div>
            <Switch id="email-alerts" defaultChecked />
          </div>

          <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-3 py-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-sky-500" />
              <Label htmlFor="two-factor">Two-factor auth</Label>
            </div>
            <Switch id="two-factor" />
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
