"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ToastPromise() {
  const fakeUpload = () =>
    new Promise<{ name: string }>((resolve) =>
      setTimeout(() => resolve({ name: "avatar.png" }), 2000)
    );

  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.promise(fakeUpload(), {
          loading: "Uploading file...",
          success: (data) => `${data.name} uploaded successfully!`,
          error: "Upload failed. Please try again.",
        })
      }
    >
      Promise
    </Button>
  );
}

