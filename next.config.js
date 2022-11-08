/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.weserv.nl'],
    minimumCacheTTL: 604800,
  },
}

module.exports = nextConfig
