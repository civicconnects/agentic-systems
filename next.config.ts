/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ DELETED: output: 'export',  <-- This was the cause of the error
  
  // ✅ ADDED: This allows images to load from anywhere (optional but helpful)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;