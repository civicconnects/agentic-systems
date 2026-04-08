/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed to enable backend API routes on Cloudflare
  images: {
    unoptimized: true,
    qualities: [75, 100],
  },
};

export default nextConfig;