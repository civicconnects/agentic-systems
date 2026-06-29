/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    qualities: [75, 100],
  },
  async redirects() {
    return [
      { source: '/ai-services', destination: '/website-and-automation-builds', permanent: true },
      { source: '/factory', destination: '/website-and-automation-builds', permanent: true },
      { source: '/factory/commercial', destination: '/website-and-automation-builds', permanent: true },
      { source: '/factory/residential', destination: '/website-and-automation-builds', permanent: true },
      { source: '/portfolio', destination: '/who-we-help', permanent: true },
      { source: '/real-estate-audit', destination: '/hipaa-cyber-risk-pre-assessment', permanent: true },
      { source: '/request-pre-assessment', destination: '/hipaa-cyber-risk-pre-assessment', permanent: false },
      { source: '/rent-an-agent', destination: '/ai-receptionist', permanent: true },
      { source: '/tutorials', destination: '/resources', permanent: true },
      { source: '/user-guide', destination: '/resources', permanent: true },
      { source: '/video-tour', destination: '/ai-hub-sentinel', permanent: true },
    ];
  },
};

export default nextConfig;
