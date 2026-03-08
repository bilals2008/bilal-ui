"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastLoading() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = toast.loading("Processing your request...");
        setTimeout(() => toast.success("Done!", { id }), 2500);
      }}
    >
      Loading {"->"} Success
    </Button>
  );
}
