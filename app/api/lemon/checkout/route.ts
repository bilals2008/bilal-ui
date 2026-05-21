import { NextResponse, NextRequest } from "next/server";
import { createCheckoutUrl, setupLemon } from "@/lib/lemon";
import { isLemonConfigured } from "@/config/lemon";

export async function GET() {
  if (!isLemonConfigured()) {
    return NextResponse.json(
      { error: "Payment not configured" },
      { status: 503 },
    );
  }

  setupLemon();

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const url = await createCheckoutUrl({
    redirectUrl: `${appUrl}/pricing?checkout=success`,
  });

  if (!url) {
    return NextResponse.json(
      { error: "Failed to create checkout" },
      { status: 500 },
    );
  }

  return NextResponse.redirect(url);
}

export async function POST(req: Request) {
  if (!isLemonConfigured()) {
    return NextResponse.json(
      { error: "Payment not configured" },
      { status: 503 },
    );
  }

  setupLemon();

  const body = await req.json().catch(() => ({}));
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const url = await createCheckoutUrl({
    redirectUrl: `${appUrl}/pricing?checkout=success`,
    email: body.email,
    name: body.name,
  });

  if (!url) {
    return NextResponse.json(
      { error: "Failed to create checkout" },
      { status: 500 },
    );
  }

  return NextResponse.json({ url });
}
