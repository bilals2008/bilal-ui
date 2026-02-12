// File: components/bilalUi/demo/alert/info-alert-demo.tsx
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/bilalUi/alert/alert-variants";
import { Info } from "lucide-react";

export default function InfoAlertDemo() {
  return (
    <Alert variant="info">
      <Info className="size-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informative message for the user to stay updated.
      </AlertDescription>
    </Alert>
  );
}
