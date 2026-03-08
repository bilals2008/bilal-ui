"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastUpdate() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = toast.loading("Submitting form...");
        setTimeout(
          () =>
            toast.success("Form submitted!", {
              id,
              description: "We'll get back to you within 24 hours.",
            }),
          2000
        );
      }}
    >
      Update Toast
    </Button>
  );
}
