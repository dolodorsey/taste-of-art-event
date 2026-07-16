/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  output: 'export',
  turbopack: { root: __dirname },
}
module.exports = nextConfig
