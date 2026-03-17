/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
  // Ensure Three.js and R3F are transpiled correctly
  transpilePackages: ["three"],
};

export default nextConfig;
