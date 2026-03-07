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
import { ChevronDown, CreditCard, Heart, Settings } from "lucide-react";

export function PremiumGlassDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 rounded-lg border-white/20 bg-white/10 text-slate-900 shadow-lg backdrop-blur-xl hover:bg-white/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          <span className="text-sm font-medium">Premium</span>
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-white/20 bg-white/80 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/80">
        <DropdownMenuLabel className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Premium Features</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/20" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="group focus:bg-white/50 dark:focus:bg-white/10">
            <CreditCard className="mr-2 size-4 text-blue-600 dark:text-blue-400" />
            <span>Upgrade Plan</span>
            <DropdownMenuShortcut>Cmd+U</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="group focus:bg-white/50 dark:focus:bg-white/10">
            <Heart className="mr-2 size-4 text-pink-600 dark:text-pink-400" />
            <span>Premium Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="group focus:bg-white/50 dark:focus:bg-white/10">
            <Settings className="mr-2 size-4 text-purple-600 dark:text-purple-400" />
            <span>Advanced Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
