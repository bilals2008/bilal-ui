"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastTopRight() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Saved to cloud.", {
          position: "top-right",
        })
      }
    >
      Top Right
    </Button>
  );
}
