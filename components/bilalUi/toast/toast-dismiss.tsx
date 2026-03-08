"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastDismiss() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = toast.loading("This will auto-close in 1.5s...");
        setTimeout(() => toast.dismiss(id), 1500);
      }}
    >
      Auto Dismiss
    </Button>
  );
}

