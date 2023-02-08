/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['res.cloudinary.com', 'i.ibb.co'],
  },
};

module.exports = nextConfig;
