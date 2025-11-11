import type { NextConfig } from 'next';
import path from 'node:path';

const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: `/${cloudinaryCloudName}/**`,
      },
    ],
  },
  // Performance-Optimierungen
  compress: true,
  productionBrowserSourceMaps: false,
  // Compiler-Optimierungen
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  // Experimental Features für bessere Performance
  experimental: {
    optimizePackageImports: ['@salzpate/react-ui'],
  },
};

export default nextConfig;
