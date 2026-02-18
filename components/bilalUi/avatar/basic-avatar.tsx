import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function BasicAvatar() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/bilals2008.png" alt="@Bilal" />
        <AvatarFallback>BL</AvatarFallback>
      </Avatar>
    </div>
  );
}
