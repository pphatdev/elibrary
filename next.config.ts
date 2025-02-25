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
  },
  // webpack: (config) => {
  //   // Allow importing pdf files
  //   config.module.rules.push({
  //     test: /\.pdf$/,
  //     use: 'file-loader',
  //   });
  //   return config;
  // },
};

export default nextConfig;
