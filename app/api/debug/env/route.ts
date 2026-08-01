import { NextResponse } from "next/server";
import { isLemonConfigured, getLemonConfig } from "@/config/lemon";

export async function GET() {
  const configured = isLemonConfigured();
  let config: Record<string, string> = {};

  if (configured) {
    const c = getLemonConfig();
    config = {
      storeId: String(c.storeId),
      productId: String(c.productId),
      variantId: String(c.variantId),
      apiKeyLength: String(c.apiKey.length),
    };
  }

  return NextResponse.json({
    configured,
    env: {
      hasApiKey: !!process.env.LEMONSQUEEZY_API_KEY,
      hasStoreId: !!process.env.LEMONSQUEEZY_STORE_ID,
      hasProductId: !!process.env.LEMONSQUEEZY_PRODUCT_ID,
      hasVariantId: !!process.env.LEMONSQUEEZY_VARIANT_ID,
    },
    config,
  });
}
