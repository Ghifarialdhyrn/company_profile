import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        // Optional: You can use a pattern to include subdomains, if necessary
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
