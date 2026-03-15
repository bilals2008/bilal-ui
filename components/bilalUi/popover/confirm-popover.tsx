"use client";

import { Shield, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function ConfirmPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="destructive" className="gap-2">
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="flex gap-3">
          <Shield className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-sm font-semibold">Delete this item?</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                This action cannot be undone.
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="destructive" className="flex-1">
                Delete
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
