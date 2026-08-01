import { lemonSqueezySetup, createCheckout } from "@lemonsqueezy/lemonsqueezy.js";
import { getLemonConfig } from "@/config/lemon";

export function setupLemon() {
  const { apiKey } = getLemonConfig();
  lemonSqueezySetup({ apiKey });
}

export async function createCheckoutUrl(opts?: {
  redirectUrl?: string;
  email?: string;
  name?: string;
}): Promise<string | null> {
  setupLemon();
  const { storeId, variantId } = getLemonConfig();

  const response = await createCheckout(storeId, variantId, {
    productOptions: opts?.redirectUrl
      ? {
          redirectUrl: opts.redirectUrl,
          enabledVariants: [variantId],
        }
      : { enabledVariants: [variantId] },
    checkoutData: {
      email: opts?.email,
      name: opts?.name,
    },
  });

  if (response.error) {
    console.error("LemonSqueezy checkout error:", response.error);
    return null;
  }

  return response.data.data.attributes.url;
}

export async function verifyLicenseKey(
  licenseKey: string,
): Promise<{ valid: boolean; error?: string }> {
  try {
    const res = await fetch(
      "https://api.lemonsqueezy.com/v1/licenses/validate",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ license_key: licenseKey }),
      },
    );

    const data = await res.json();

    if (data.valid && data.license_key?.status === "active") {
      return { valid: true };
    }

    return { valid: false, error: data.error ?? "License key is not valid" };
  } catch (err) {
    return { valid: false, error: "Failed to verify license key" };
  }
}
