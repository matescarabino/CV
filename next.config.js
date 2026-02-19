/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/CV",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/CV",
  },
};

module.exports = nextConfig;
