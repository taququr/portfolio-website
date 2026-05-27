import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    viewTransition: true,
    serverActions: {
      // bodySizeLimit: "2mb",
      allowedOrigins: ["taququr.com", "www.taququr.com"],
    },
  },
};

export default nextConfig;
