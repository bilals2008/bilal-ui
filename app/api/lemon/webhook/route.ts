import { NextResponse } from "next/server";
import { getLemonConfig } from "@/config/lemon";

export async function POST(req: Request) {
  const { webhookSecret } = getLemonConfig();

  const signature = req.headers.get("x-signature");
  const body = await req.text();

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 401 });
  }

  const expected = await crypto.subtle
    .digest("SHA-256", new TextEncoder().encode(body + webhookSecret))
    .then((h) =>
      Array.from(new Uint8Array(h))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join(""),
    );

  if (signature !== expected) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(body);
  const eventName = event.meta?.event_name;

  if (eventName === "order_created") {
    const licenseKey = event.data?.attributes?.first_order_item?.license_key;
    const email = event.data?.attributes?.user_email;

    if (licenseKey && email) {
      console.log(`[LemonSqueezy] Order from ${email}, license: ${licenseKey}`);
    }
  }

  return NextResponse.json({ received: true });
}
