import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SearchInput() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="search-input">Search docs</Label>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input id="search-input" placeholder="Find components..." className="pl-9" />
      </div>
    </div>
  );
}
