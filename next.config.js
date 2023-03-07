/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/contributor",
        destination: "/api/contributors",
      },
      {
        source: "/good1stissues",
        destination: "/api/good1stissue",
      },
      {
        source: "/program/:slug*",
        destination: "/api/programs/:slug*",
      },
      {
        source: "/programs/tag",
        destination: "/api/programs/tags",
      },
      {
        source: "/tool/:slug*",
        destination: "/api/tools/:slug*",
      },
      {
        source: "/tools/tag",
        destination: "/api/tools/tags",
      },
      {
        source: "/:path*",
        destination: "/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
