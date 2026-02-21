// File: components/bilalUi/dropdown-menu/basic-dropdown-menu.tsx
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  UserRound,
  CreditCard,
  Settings,
  Keyboard,
  LogOut,
  ChevronDown,
} from "lucide-react";

export function BasicDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 rounded-sm border-zinc-200/80 bg-white/80 text-zinc-700 shadow-sm shadow-zinc-900/5 backdrop-blur-md hover:bg-white dark:border-zinc-700/70 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:bg-zinc-900"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-500 dark:from-emerald-400 dark:to-green-300">
            Open Menu
          </span>
          <ChevronDown className="size-4 text-emerald-500 dark:text-emerald-300" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-zinc-200/80 bg-white/90 shadow-xl shadow-zinc-900/10 backdrop-blur-md dark:border-zinc-700/70 dark:bg-zinc-900/90">
        <DropdownMenuLabel className="text-emerald-600 dark:text-emerald-300">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="group">
            <UserRound className="size-4 text-sky-500 group-hover:text-sky-600 dark:text-sky-300 dark:group-hover:text-sky-200" />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="group">
            <CreditCard className="size-4 text-violet-500 group-hover:text-violet-600 dark:text-violet-300 dark:group-hover:text-violet-200" />
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="group">
            <Settings className="size-4 text-amber-500 group-hover:text-amber-600 dark:text-amber-300 dark:group-hover:text-amber-200" />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="group">
            <Keyboard className="size-4 text-fuchsia-500 group-hover:text-fuchsia-600 dark:text-fuchsia-300 dark:group-hover:text-fuchsia-200" />
            Keyboard Shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut className="size-4" />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
