// File: components/bilalUi/dialog/basic-dialog.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";

export function BasicDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
          <Sparkles className="size-4 text-yellow-300" />
          Open Dialog
        </Button>
      </DialogTrigger>
        <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-500/20">
              <Sparkles className="size-4 text-amber-600 dark:text-amber-300" />
            </span>
            Welcome Back
          </DialogTitle>
          <DialogDescription>
            This is a basic dialog. Use it to display important information or
            ask the user to confirm an action.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Got it</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
