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

export function DarkSleekDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2 border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800">
          More
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-zinc-700 bg-zinc-900">
        <DropdownMenuLabel className="text-zinc-300">Menu</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-zinc-700" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-zinc-200 focus:bg-zinc-800 focus:text-zinc-100">
            <Settings className="mr-2 size-4 text-cyan-400" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="text-zinc-200 focus:bg-zinc-800 focus:text-zinc-100">
            <Bell className="mr-2 size-4 text-orange-400" />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
