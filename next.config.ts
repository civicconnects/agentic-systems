/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 Back to Static Mode (Fixes the Build Error)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;