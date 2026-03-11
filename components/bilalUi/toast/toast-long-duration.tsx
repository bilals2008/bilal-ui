"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastLongDuration() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.info("This message will stay for 10 seconds.", { duration: 10000 })
      }
    >
      Long Duration
    </Button>
  );
}

