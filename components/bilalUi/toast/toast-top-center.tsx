"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastTopCenter() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.info("Notification from the top!", {
          position: "top-center",
        })
      }
    >
      Top Center
    </Button>
  );
}

