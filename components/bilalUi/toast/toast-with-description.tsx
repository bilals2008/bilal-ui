"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastWithDescription() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event created", {
          description: "Monday, January 6th at 3:00 PM",
        })
      }
    >
      With Description
    </Button>
  );
}

