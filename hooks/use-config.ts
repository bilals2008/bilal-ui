// File: hooks/use-config.ts
"use client"

import { useState, useEffect } from "react"

type Config = {
  packageManager: "npm" | "yarn" | "pnpm" | "bun"
}

const DEFAULT_CONFIG: Config = {
  packageManager: "pnpm",
}

export function useConfig() {
  const [config, setConfig] = useState<Config>(() => {
    if (typeof window === "undefined") return DEFAULT_CONFIG
    const savedConfig = localStorage.getItem("docs-config")
    if (savedConfig) {
      try {
        return JSON.parse(savedConfig)
      } catch (e) {
        console.error("Failed to parse config", e)
      }
    }
    return DEFAULT_CONFIG
  })

  useEffect(() => {
    localStorage.setItem("docs-config", JSON.stringify(config))
  }, [config])

  const updateConfig = (newConfig: Partial<Config>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }))
  }

  return [config, updateConfig] as const
}
