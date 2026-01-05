import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect /storybook to /storybook/ to fix relative path resolution
  async redirects() {
    return [
      {
        source: '/storybook',
        destination: '/storybook/',
        permanent: true,
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
