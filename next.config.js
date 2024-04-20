/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/jdecked/twemoji@15.1.0/assets/svg/**'
      },
    ],
  },
}

module.exports = nextConfig
