/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/programs/:path*",
        destination: "/api/program/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
