/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: "build",
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
};

const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();

module.exports = nextConfig;
