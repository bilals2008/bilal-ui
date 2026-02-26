"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function BasicToast() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button variant="outline" onClick={() => toast("Event has been created.")}>
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("Changes saved successfully.")}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("Something went wrong.")}
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning("Your session is about to expire.")}
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("A new update is available.")}
      >
        Info
      </Button>
    </div>
  );
}
