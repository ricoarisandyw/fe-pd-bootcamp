/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com', 'picsum.photos']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
