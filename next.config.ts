import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    ".space-z.ai",
    "0.0.0.0",
    "localhost",
    "21.0.3.85",
    "127.0.0.1",
  ],
};

export default nextConfig;
