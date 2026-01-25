import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'humble-space-dollop-7x4v6x6rg6x2p67g-3000.app.github.dev', 
        'localhost:3000'
      ],
    },
  },
  /* config options here */
};

export default nextConfig;
