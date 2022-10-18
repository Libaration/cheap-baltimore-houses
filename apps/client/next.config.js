/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    domains: ["localhost", "wallpaper.dog", "wallpaperaccess.com"],
  },
};

module.exports = nextConfig;
