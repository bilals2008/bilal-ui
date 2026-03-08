"use client";

import { CreditCard, User } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsWithDescription() {
  return (
    <Tabs defaultValue="personal" className="w-full max-w-md">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="personal" className="h-auto flex-col gap-0.5 py-2">
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            Personal
          </div>
          <span className="text-[10px] font-normal text-muted-foreground">Your info</span>
        </TabsTrigger>
        <TabsTrigger value="billing" className="h-auto flex-col gap-0.5 py-2">
          <div className="flex items-center gap-1.5">
            <CreditCard className="h-4 w-4" />
            Billing
          </div>
          <span className="text-[10px] font-normal text-muted-foreground">Plans & invoices</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="personal" className="p-4 text-sm text-muted-foreground">
        Personal details form.
      </TabsContent>
      <TabsContent value="billing" className="p-4 text-sm text-muted-foreground">
        Billing info and history.
      </TabsContent>
    </Tabs>
  );
}
