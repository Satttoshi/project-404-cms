/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@repo/design-system",
    "@repo/ui",
    "@repo/db",
    "@repo/auth"
  ],
};

export default nextConfig;
