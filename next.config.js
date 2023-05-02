/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['img.shields.io', 'imgcloud.com.br'],
    dangerouslyAllowSVG: true
  }
}

module.exports = nextConfig
