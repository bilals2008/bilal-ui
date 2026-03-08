"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithSubmit() {
  const [value, setValue] = useState("");

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Textarea
        placeholder="Write your comment..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={3}
      />
      <Button disabled={!value.trim()} className="self-end">
        Post Comment
      </Button>
    </div>
  );
}

