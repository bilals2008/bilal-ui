"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastErrorWithRetry() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.error("Failed to sync data.", {
          description: "Check your connection and try again.",
          action: {
            label: "Retry",
            onClick: () =>
              toast.promise(new Promise((res) => setTimeout(res, 1500)), {
                loading: "Retrying...",
                success: "Sync successful!",
                error: "Still failing.",
              }),
          },
        })
      }
    >
      Error + Retry
    </Button>
  );
}

