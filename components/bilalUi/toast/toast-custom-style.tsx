"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastCustomStyle() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Custom styled toast", {
          style: {
            background: "#1e1b4b",
            color: "#c7d2fe",
            border: "1px solid #4338ca",
          },
        })
      }
    >
      Custom Style
    </Button>
  );
}

