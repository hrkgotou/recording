/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  basePath: process.env.GITHUB_ACTIONS && '/recording',
  trailingSlash: true,
};

module.exports = nextConfig;
