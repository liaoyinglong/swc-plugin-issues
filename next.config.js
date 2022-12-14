/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcPlugins: [
      //
      ["@swc/plugin-emotion", {}]
    ],
  },
};

module.exports = nextConfig;
