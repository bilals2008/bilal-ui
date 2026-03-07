import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, ChevronDown, Settings } from "lucide-react";

export function SoftRoundedDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 rounded-full border-indigo-200 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 hover:from-indigo-200 hover:to-purple-200 dark:from-indigo-900/40 dark:to-purple-900/40 dark:border-indigo-700/40 dark:text-indigo-300"
        >
          Menu
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-2xl border-indigo-200 bg-indigo-50 dark:border-indigo-800/50 dark:bg-indigo-950/50">
        <DropdownMenuLabel className="text-indigo-700 dark:text-indigo-300">Soft Menu</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-indigo-200 dark:bg-indigo-800/30" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="group text-indigo-900 dark:text-indigo-100">
            <Settings className="mr-2 size-4 text-indigo-500 group-hover:text-indigo-600" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="group text-indigo-900 dark:text-indigo-100">
            <Bell className="mr-2 size-4 text-purple-500 group-hover:text-purple-600" />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
