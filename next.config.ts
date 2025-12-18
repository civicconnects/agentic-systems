/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // THIS FIXES THE 404
  images: {
    unoptimized: true,
  },
};

export default nextConfig;