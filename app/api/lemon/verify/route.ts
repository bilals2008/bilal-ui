import { NextResponse } from "next/server";
import { verifyLicenseKey } from "@/lib/lemon";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { licenseKey } = body;

  if (!licenseKey || typeof licenseKey !== "string") {
    return NextResponse.json(
      { valid: false, error: "License key is required" },
      { status: 400 },
    );
  }

  const result = await verifyLicenseKey(licenseKey.trim());

  return NextResponse.json(result);
}
