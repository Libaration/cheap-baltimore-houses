/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["res.cloudinary.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "res.cloudinary.com",
    //   },
    // ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**",
    //   },
    // ],
  },
  // rewrites: async () => {
  //   return [
  //     {
  //       source: "/:path*",
  //       has: [
  //         {
  //           type: "host",
  //           value: "api.cheapbaltimorehouses.com",
  //         },
  //       ],
  //       destination: "http://localhost:1337/:path*",
  //     },
  //   ];
  // },
  staticPageGenerationTimeout: 1000,
  // experimental: { appDir: true },
};

module.exports = nextConfig;
