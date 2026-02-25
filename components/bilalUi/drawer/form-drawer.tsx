"use client";

import * as React from "react";
import { CheckCircle2, Edit3, Save } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function FormDrawer() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [saved, setSaved] = React.useState(false);

  const canSave = Boolean(name.trim() && email.trim());

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Edit3 className="size-4 text-sky-500" />
          Edit profile drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent className="border-l-sky-300 dark:border-l-sky-800">
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Update your public details without leaving the current page.
          </DrawerDescription>
        </DrawerHeader>

        <div className="space-y-4 px-4 pb-2">
          <div className="space-y-2">
            <Label htmlFor="drawer-name">Name</Label>
            <Input
              id="drawer-name"
              placeholder="Bilal Khan"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                if (saved) setSaved(false);
              }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="drawer-email">Email</Label>
            <Input
              id="drawer-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (saved) setSaved(false);
              }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="drawer-bio">Bio</Label>
            <Textarea
              id="drawer-bio"
              rows={4}
              placeholder="Write a short bio..."
              value={bio}
              onChange={(event) => {
                setBio(event.target.value);
                if (saved) setSaved(false);
              }}
            />
          </div>

          {saved && (
            <div className="rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5" />
                Profile saved. Next step: add social links.
              </span>
            </div>
          )}
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
          <Button onClick={() => setSaved(true)} disabled={!canSave} className="gap-2">
            <Save className="size-4" />
            Save profile
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
