"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastRichContent() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("New message from Alex", {
          description: (
            <span className="flex items-center gap-1 text-xs">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              Online · Sent just now
            </span>
          ),
          action: {
            label: "Reply",
            onClick: () => toast.info("Opening chat..."),
          },
        })
      }
    >
      Rich Content
    </Button>
  );
}

