/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Apenas se estiver usando styled-components
  },
};

module.exports = nextConfig;
