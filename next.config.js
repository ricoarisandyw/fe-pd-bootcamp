/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
