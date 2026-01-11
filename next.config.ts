import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Force Next.js to handle the MDX library properly
  transpilePackages: ['next-mdx-remote'],
  
  experimental: {
    // 2. Remove or set mdxRs to false. 
    // It is incompatible with next-mdx-remote and rehype-highlight
    mdxRs: false,
  },
};

export default nextConfig;