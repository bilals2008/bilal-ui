"use client";

import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function GradientAccentDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="w-full gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <Zap className="h-4 w-4" />
          Premium
        </Button>
      </DrawerTrigger>
      <DrawerContent className="border-t-2 border-t-purple-500">
        <DrawerHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
          <DrawerTitle className="text-purple-900 dark:text-purple-100">
            Premium Features
          </DrawerTitle>
          <DrawerDescription className="text-purple-700 dark:text-purple-300">
            Unlock exclusive features
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-3 px-4 py-4">
          {["Unlimited Projects", "Priority Support", "Advanced Analytics"].map(
            (feature) => (
              <div
                key={feature}
                className="rounded-lg border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-3 dark:border-purple-700 dark:from-purple-900 dark:to-pink-900"
              >
                <p className="font-medium text-purple-900 dark:text-purple-100">
                  {feature}
                </p>
              </div>
            ),
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
