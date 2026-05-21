export const PRO_FREE_MODE = true;

export const PRO_COMPONENTS: Record<string, { freeCount: number }> = {
  button: { freeCount: 5 },
  badge: { freeCount: 5 },
  accordion: { freeCount: 5 },
  avatar: { freeCount: 5 },
  breadcrumb: { freeCount: 5 },
  checkbox: { freeCount: 5 },
  dialog: { freeCount: 5 },
  drawer: { freeCount: 5 },
  "dropdown-menu": { freeCount: 5 },
  input: { freeCount: 5 },
  "input-otp": { freeCount: 5 },
  popover: { freeCount: 5 },
  progress: { freeCount: 5 },
  "radio-group": { freeCount: 5 },
  select: { freeCount: 5 },
  separator: { freeCount: 5 },
  sheet: { freeCount: 5 },
  skeleton: { freeCount: 5 },
  slider: { freeCount: 5 },
  switch: { freeCount: 5 },
  tabs: { freeCount: 5 },
  textarea: { freeCount: 5 },
  toast: { freeCount: 5 },
  "toggle-group": { freeCount: 5 },
  tooltip: { freeCount: 5 },
  card: { freeCount: 3 },
  "date-picker": { freeCount: 2 },
  alert: { freeCount: 4 },
};

export function isProComponent(
  componentName: string,
  variantIndex?: number,
): boolean {
  if (PRO_FREE_MODE) return false;

  if (!variantIndex !== undefined && variantIndex === undefined) {
    return false;
  }

  const config = PRO_COMPONENTS[componentName];
  if (!config) return false;

  if (variantIndex !== undefined) {
    return variantIndex >= config.freeCount;
  }

  return true;
}

export function getFreeCount(componentName: string): number {
  return PRO_COMPONENTS[componentName]?.freeCount ?? 5;
}
