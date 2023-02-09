/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/program/:slug*",
        destination: "/api/programs/:slug*",
      },
      {
        source: "/api/programs/tag",
        destination: "/api/programs/tags",
      },
    ];
  },
};

module.exports = nextConfig;
