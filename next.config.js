/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Apenas se estiver usando styled-components
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/uc*", // Padrão para o link do Google Drive
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com", // Adicionando o domínio
        pathname: "/demos/*", // Ajuste conforme necessário para corresponder ao caminho da sua imagem
      },
    ],
  },
};

module.exports = nextConfig;
