/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
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
};

module.exports = nextConfig;
