import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',
        pathname: '/**',
      },{
        protocol:"https",
        hostname:"res.cloudinary.com",
        port:"",
        pathname:"/**"
      }
    ],
  },
};

export default nextConfig;