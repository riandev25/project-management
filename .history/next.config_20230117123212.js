/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/u/:email/boards',
        destination: '/u/[email].tsx/boards',
        as: '/u/:email/boards',
      },
    ];
  },
};

module.exports = nextConfig;
