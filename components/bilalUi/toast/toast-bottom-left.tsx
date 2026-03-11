"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastBottomLeft() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.success("Profile updated.", {
          position: "bottom-left",
        })
      }
    >
      Bottom Left
    </Button>
  );
}

