"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastCustomIcon() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Rocket launched! 🚀", {
          icon: "🚀",
          description: "Your deployment is on its way.",
        })
      }
    >
      Custom Icon
    </Button>
  );
}

