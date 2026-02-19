// File: components/bilalUi/alert-dialog/type-to-confirm-alert-dialog.tsx
"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";

const PROJECT_NAME = "my-project";

export function TypeToConfirmAlertDialog() {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const isConfirmed = inputValue === PROJECT_NAME;

  const handleDelete = () => {
    if (!isConfirmed) return;
    setOpen(false);
    setInputValue("");
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setInputValue("");
      }}
    >
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="gap-2">
          <Trash2 className="size-4" />
          Delete Project
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-destructive">
            <Trash2 className="size-5" />
            Delete Project
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="space-y-3">
              <p>
                This action <strong>cannot be undone</strong>. This will
                permanently delete the{" "}
                <strong className="text-foreground">{PROJECT_NAME}</strong>{" "}
                project and all its data.
              </p>
              <div className="space-y-1.5">
                <Label className="text-sm text-foreground">
                  Type{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                    {PROJECT_NAME}
                  </code>{" "}
                  to confirm:
                </Label>
                <Input
                  placeholder={PROJECT_NAME}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className={
                    inputValue && !isConfirmed
                      ? "border-destructive focus-visible:ring-destructive"
                      : ""
                  }
                />
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            variant="destructive"
            disabled={!isConfirmed}
            onClick={handleDelete}
            className="gap-2"
          >
            <Trash2 className="size-4" />I understand, delete it
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
