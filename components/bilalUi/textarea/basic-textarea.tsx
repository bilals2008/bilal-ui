"use client";

import { Textarea } from "@/components/ui/textarea";

export function BasicTextarea() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Textarea placeholder="Type your message here." />
    </div>
  );
}

