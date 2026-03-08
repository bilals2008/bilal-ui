"use client";

import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
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

export function ModalStyleSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="gap-2">
          <CheckCircle className="size-4" />
          Confirm Action
        </Button>
      </SheetTrigger>

      <SheetContent className="border-l border-border/50">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-lg">Confirm Changes</SheetTitle>
          <SheetDescription>
            This action will update your settings across all devices.
          </SheetDescription>
        </SheetHeader>

        <div className="rounded-lg border border-amber-200/30 bg-amber-50/50 px-4 py-3 dark:border-amber-800/30 dark:bg-amber-950/20">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            Review all changes before confirming.
          </p>
        </div>

        <SheetFooter className="mt-6">
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Confirm</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
