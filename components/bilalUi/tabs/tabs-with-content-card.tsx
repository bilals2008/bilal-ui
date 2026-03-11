"use client";

import { Activity, Lock, User } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsWithContentCard() {
  return (
    <Tabs defaultValue="profile" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile" className="gap-1.5">
          <User className="h-4 w-4" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="activity" className="gap-1.5">
          <Activity className="h-4 w-4" />
          Activity
        </TabsTrigger>
        <TabsTrigger value="security" className="gap-1.5">
          <Lock className="h-4 w-4" />
          Security
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div className="mt-2 flex flex-col gap-3 rounded-xl border bg-card p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <User className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold">Alex Johnson</p>
              <p className="text-xs text-muted-foreground">alex@example.com</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Member since Jan 2023 · Pro plan</p>
        </div>
      </TabsContent>
      <TabsContent value="activity">
        <div className="mt-2 rounded-xl border bg-card p-5 text-sm text-muted-foreground">
          Recent activity log.
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div className="mt-2 rounded-xl border bg-card p-5 text-sm text-muted-foreground">
          2FA and session settings.
        </div>
      </TabsContent>
    </Tabs>
  );
}
