// File: next.config.mjs
import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

const withMDX = createMDX({
  // configPath: "source.config.ts" // agar config ka path change kiya ho
});

export default withMDX(config);
