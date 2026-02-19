import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function WithLabelTextarea() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
}
