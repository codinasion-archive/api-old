/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/api/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/contributor",
        destination: "/contributors",
        permanent: true,
      },
      {
        source: "/good1stissues",
        destination: "/good1stissue",
        permanent: true,
      },
      {
        source: "/programs/:slug*",
        destination: "/program/:slug*",
        permanent: true,
      },

      {
        source: "/tool/:slug*",
        destination: "/tools/:slug*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Content-Type",
            value: "application/json",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
