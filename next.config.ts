import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/secteurs/pme-tpe',
        destination: '/gestion-flotte-pme',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
