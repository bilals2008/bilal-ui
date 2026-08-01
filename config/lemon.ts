export function getLemonConfig() {
  return {
    apiKey: process.env.LEMONSQUEEZY_API_KEY!,
    storeId: Number(process.env.LEMONSQUEEZY_STORE_ID!),
    productId: Number(process.env.LEMONSQUEEZY_PRODUCT_ID!),
    variantId: Number(process.env.LEMONSQUEEZY_VARIANT_ID!),
    webhookSecret: process.env.LEMONSQUEEZY_WEBHOOK_SECRET!,
  };
}

export function isLemonConfigured() {
  return (
    !!process.env.LEMONSQUEEZY_API_KEY &&
    !!process.env.LEMONSQUEEZY_STORE_ID &&
    !!process.env.LEMONSQUEEZY_PRODUCT_ID &&
    !!process.env.LEMONSQUEEZY_VARIANT_ID
  );
}
