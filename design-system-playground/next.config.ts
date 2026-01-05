import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure storybook files are served correctly
  async rewrites() {
    return [
      // Rewrite /storybook to serve index.html
      {
        source: '/storybook',
        destination: '/storybook/index.html',
      },
      // Rewrite /storybook/ to serve index.html
      {
        source: '/storybook/',
        destination: '/storybook/index.html',
      },
    ];
  },
  // Headers for caching static storybook assets
  async headers() {
    return [
      {
        source: '/storybook/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
