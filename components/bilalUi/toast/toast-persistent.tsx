"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastPersistent() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.warning("Action required: verify your email.", {
          duration: Infinity,
          action: {
            label: "Dismiss",
            onClick: () => {},
          },
        })
      }
    >
      Persistent
    </Button>
  );
}

