// File: components/bilalUi/demo/alert/notification-alert-demo.tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertAction,
} from "@/components/bilalUi/alert/alert-variants";
import { Bell, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotificationAlertDemo() {
  return (
    <Alert variant="notification">
      <Bell className="size-4 text-primary" />
      <AlertTitle>New System Update</AlertTitle>
      <AlertDescription>
        A new version of the dashboard is available with improved performance.
      </AlertDescription>
      <AlertAction>
        <Button variant="ghost" size="icon" className="size-8">
          <X className="size-4" />
        </Button>
      </AlertAction>
    </Alert>
  );
}
