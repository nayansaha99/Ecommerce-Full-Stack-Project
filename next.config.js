/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // ✅ Move here — top level

  experimental: {
    scrollRestoration: true, // ✅ This stays in experimental
  },
};

module.exports = nextConfig;