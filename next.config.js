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
        source: "/programs/tag/:slug*",
        destination: "/program/tags/:slug*",
        permanent: true,
      },
      {
        source: "/program/tag/:slug*",
        destination: "/program/tags/:slug*",
        permanent: true,
      },
      {
        source: "/tool/:slug*",
        destination: "/tools/:slug*",
        permanent: true,
      },
      {
        source: "/tool/tag/:slug*",
        destination: "/tools/tags/:slug*",
        permanent: true,
      },
      {
        source: "/tools/tag/:slug*",
        destination: "/tools/tags/:slug*",
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
        ],
      },
    ];
  },
};

module.exports = nextConfig;
