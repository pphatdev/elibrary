import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['github.com', 'images.unsplash.com', 'cdn.pixabay.com', 'kxptt4m9j4.ufs.sh'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/pphatdev.png',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'kxptt4m9j4.ufs.sh',
        pathname: '**',
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
