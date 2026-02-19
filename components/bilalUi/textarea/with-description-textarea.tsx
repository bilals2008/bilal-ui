import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function WithDescriptionTextarea() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message-desc">Your message</Label>
      <Textarea placeholder="Type your message here." id="message-desc" />
      <p className="text-sm text-muted-foreground">
        Your message will be sent to the support team.
      </p>
    </div>
  );
}
