import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: isProduction ? 'export' : undefined,
  trailingSlash: isProduction,
};

export default nextConfig;