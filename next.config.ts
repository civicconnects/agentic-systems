/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Restored for reliable Cloudflare Pages deployment
  images: {
    unoptimized: true,
    qualities: [75, 100],
  },
};

export default nextConfig;