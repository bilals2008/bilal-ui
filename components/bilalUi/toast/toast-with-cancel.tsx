"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastWithCancel() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Deploy to production?", {
          description: "This will push changes live immediately.",
          action: {
            label: "Deploy",
            onClick: () => toast.success("Deployed successfully."),
          },
          cancel: {
            label: "Cancel",
            onClick: () => {},
          },
        })
      }
    >
      With Cancel
    </Button>
  );
}

