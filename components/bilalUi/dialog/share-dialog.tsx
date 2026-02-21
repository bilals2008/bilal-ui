// File: components/bilalUi/dialog/share-dialog.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Check, Share2 } from "lucide-react";

export function ShareDialog() {
  const [copied, setCopied] = useState(false);

  const link = "https://bilal-ui.vercel.app/docs/components/dialog";

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 border-sky-500/50 text-sky-500 hover:bg-sky-500/10 hover:text-sky-600 dark:text-sky-400"
        >
          <Share2 className="size-4 text-sky-500 dark:text-sky-400" />
          Share
        </Button>
      </DialogTrigger>
        <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-500/20">
              <Share2 className="size-4 text-sky-600 dark:text-sky-300" />
            </span>
            Share Link
          </DialogTitle>
          <DialogDescription>
            Anyone with this link will be able to view this page.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 pt-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={link}
              readOnly
              className="text-muted-foreground text-sm"
            />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3 gap-1.5 shrink-0 bg-sky-500 hover:bg-sky-600 text-white"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check className="size-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="size-4" />
                Copy
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
