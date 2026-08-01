"use client";

import { useState, useEffect, useCallback } from "react";

const LICENSE_KEY = "bilal-ui-license-key";
const LICENSE_STATUS = "bilal-ui-license-status";

export function useProAccess() {
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(LICENSE_STATUS);
    setHasAccess(stored === "verified");
    setLoading(false);
  }, []);

  const verifyAndStore = useCallback(async (key: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/lemon/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ licenseKey: key }),
      });
      const data = await res.json();

      if (data.valid) {
        localStorage.setItem(LICENSE_KEY, key);
        localStorage.setItem(LICENSE_STATUS, "verified");
        setHasAccess(true);
        return { success: true };
      }
      return { success: false, error: data.error ?? "Invalid license key" };
    } catch {
      return { success: false, error: "Failed to verify license key" };
    } finally {
      setLoading(false);
    }
  }, []);

  const clearAccess = useCallback(() => {
    localStorage.removeItem(LICENSE_KEY);
    localStorage.removeItem(LICENSE_STATUS);
    setHasAccess(false);
  }, []);

  return { hasAccess, loading, verifyAndStore, clearAccess };
}
