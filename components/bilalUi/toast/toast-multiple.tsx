"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastMultiple() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.success("Step 1 complete.");
        setTimeout(() => toast.info("Step 2 in progress..."), 300);
        setTimeout(() => toast.success("All steps done!"), 600);
      }}
    >
      Multiple
    </Button>
  );
}

