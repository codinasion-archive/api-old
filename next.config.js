/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/programs",
        destination: "/api/program",
      },
    ];
  },
};

module.exports = nextConfig;
