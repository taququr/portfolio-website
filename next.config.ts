import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  experimental: {
    viewTransition: true,
    serverActions: {
      // bodySizeLimit: "2mb",
      allowedOrigins: ["taququr.com", "www.taququr.com"],
    },
  },
};

export default nextConfig;
