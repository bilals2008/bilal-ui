"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastWithAction() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("File deleted", {
          description: "project-final.zip has been removed.",
          action: {
            label: "Undo",
            onClick: () => toast.success("Deletion undone."),
          },
        })
      }
    >
      With Action
    </Button>
  );
}

