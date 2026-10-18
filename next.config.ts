import type { NextConfig } from "next";

// GitHub Pages serves static files only, under /<repo> unless a custom domain is set.
// The Pages workflow sets these; Vercel builds leave them unset and keep image optimisation.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { unoptimized: true },
      env: { NEXT_PUBLIC_BASE_PATH: basePath },
    }
  : {};

export default nextConfig;
