/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig; // Use 'export default' for .mjs or .ts
// If your file is .js, use 'module.exports = nextConfig' instead.