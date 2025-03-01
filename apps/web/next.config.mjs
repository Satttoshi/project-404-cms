/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@repo/design-system",
    "@repo/ui",
  ],
};

export default nextConfig;
