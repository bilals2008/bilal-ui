"use client";

import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ActionToast() {
  return (
    <Button
      variant="outline"
      className="gap-2"
      onClick={() =>
        toast("File deleted", {
          description: "profile-photo.jpg has been removed.",
          action: {
            label: "Undo",
            onClick: () => toast.success("File restored."),
          },
        })
      }
    >
      <Trash2 className="size-4 text-red-500" />
      Delete File
    </Button>
  );
}
