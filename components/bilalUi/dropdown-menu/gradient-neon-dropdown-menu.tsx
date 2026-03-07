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
import { ChevronDown, Heart, Share2 } from "lucide-react";

export function GradientNeonDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-lg shadow-purple-500/50 hover:opacity-90">
          Neon Menu
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-purple-500/30 bg-slate-950 shadow-xl shadow-purple-500/20">
        <DropdownMenuLabel className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Neon Options</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-purple-500/20" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-slate-200 focus:bg-purple-950/50">
            <Heart className="mr-2 size-4 text-pink-400" />
            Favorite
          </DropdownMenuItem>
          <DropdownMenuItem className="text-slate-200 focus:bg-purple-950/50">
            <Share2 className="mr-2 size-4 text-cyan-400" />
            Share
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
