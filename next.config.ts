import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.freepik.com', // Allow Freepik images
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com', // Allow Unsplash images (if needed)
      },
      {
        protocol: 'https',
        hostname: '**.pexels.com', // Allow Pexels images (if needed)
      }
    ],
  },
};

export default nextConfig;
