"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastCustomClass() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.success("Subscribed to newsletter!", {
          classNames: {
            toast: "!bg-emerald-950 !border-emerald-700",
            title: "!text-emerald-300",
            description: "!text-emerald-400",
            icon: "!text-emerald-400",
          },
          description: "You'll receive weekly updates.",
        })
      }
    >
      Custom Classes
    </Button>
  );
}

