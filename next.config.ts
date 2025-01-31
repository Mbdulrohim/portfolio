import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['imgur.com'],
  },
  eslint: { ignoreDuringBuilds: true }
};

export default nextConfig;
