/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  async redirects() {
    return [];
  },
};

export default nextConfig;
