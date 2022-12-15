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

  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/static",
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
  },
  serverRuntimeConfig: {
    NEXT_SHARP_PATH: "/tmp/node_modules/sharp",
  },
};

module.exports = nextConfig;
