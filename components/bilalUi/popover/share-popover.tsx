"use client";

import { useState } from "react";
import { Check, Copy, Link, Mail, Share2, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

const CHANNELS = [
  { icon: Mail, label: "Email" },
  { icon: Link, label: "Copy" },
  { icon: UserPlus, label: "Invite" },
];

export function SharePopover() {
  const [copied, setCopied] = useState(false);
  const url = "https://example.com/doc/abc123";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <p className="mb-3 text-sm font-semibold">Share this document</p>
        <div className="flex gap-2">
          <Input readOnly value={url} className="h-8 text-xs" />
          <Button
            size="sm"
            variant="outline"
            className="shrink-0 gap-1"
            onClick={() => {
              navigator.clipboard.writeText(url);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>
        <Separator className="my-3" />
        <div className="flex gap-2">
          {CHANNELS.map(({ icon: Icon, label }) => (
            <Button key={label} variant="outline" size="sm" className="flex-1 gap-1.5 text-xs">
              <Icon className="h-3.5 w-3.5" />
              {label}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
