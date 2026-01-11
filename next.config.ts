import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   mdxRs: true,
  // },
  transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
