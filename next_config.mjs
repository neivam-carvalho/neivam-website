/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tess-cdn.pareto.io',
        pathname: '/assets/uploads/**'
      }
    ]
  }
};
export default nextConfig;