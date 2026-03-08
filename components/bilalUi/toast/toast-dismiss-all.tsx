"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastDismissAll() {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={() => {
          toast("Toast 1");
          toast("Toast 2");
          toast("Toast 3");
        }}
      >
        Spawn 3
      </Button>
      <Button variant="destructive" onClick={() => toast.dismiss()}>
        Dismiss All
      </Button>
    </div>
  );
}

