import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false, // Use false so search engines don't permanently cache it
      },
    ];
  },
};

export default nextConfig;
