/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

export default nextConfig;
