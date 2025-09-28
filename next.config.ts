import type { NextConfig } from "next";
import { join } from "path";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Handle UTF-8 encoding for file names
    config.resolve.modules = [".", ...config.resolve.modules];
    return config;
  },
  // Set Turbopack root to resolve multiple lockfile warning
  turbopack: {
    root: join(__dirname)
  }
};

export default nextConfig;