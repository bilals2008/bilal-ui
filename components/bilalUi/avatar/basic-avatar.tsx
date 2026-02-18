// File: components/bilalUi/avatar/basic-avatar.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function BasicAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/bilals2008.png" alt="@Bilal" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
