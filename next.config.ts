import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel deployment configuration
  trailingSlash: false,
  experimental: {
    serverComponentsExternalPackages: ['@anthropic-ai/sdk'],
  },
};

export default nextConfig;
