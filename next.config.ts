import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['github.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/pphatdev.png',
      },
    ],
  }
};

export default nextConfig;
