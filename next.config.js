/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      destination: "/recent",
      permanent: false,
      source: "/",
    },
  ],
};

const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();

module.exports = nextConfig;
