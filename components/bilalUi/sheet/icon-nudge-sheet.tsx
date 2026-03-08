"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function IconNudgeSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="group gap-2">
          <Search className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          Advanced Search
        </Button>
      </SheetTrigger>

      <SheetContent className="border-l border-border">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Search className="size-5" />
            Advanced Search
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-4 py-4">
          <Input
            placeholder="Search by name..."
            className="transition-all duration-200 focus:ring-offset-0"
          />
          <Input placeholder="Search by email..." />
          <Input placeholder="Search by tag..." />
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Clear</Button>
          </SheetClose>
          <Button>Search</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

