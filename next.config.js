const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.weserv.nl'],
    minimumCacheTTL: 604800,
  },
  i18n,
}

module.exports = nextConfig
