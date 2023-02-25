/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['res.cloudinary.com', 'i.ibb.co'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth/login',
      },
    ];
  },
};

module.exports = nextConfig;
