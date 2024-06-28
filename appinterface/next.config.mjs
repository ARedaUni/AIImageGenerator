/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['th.bing.com', "replicate.delivery", "replicate.com"], 
        remotePatterns: [
          {
            protocol: "https",
            hostname: "replicate.com",
          },
          {
            protocol: "https",
            hostname: "replicate.delivery",
          },
        ]
      },
};

export default nextConfig;
