import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export with next/image
  },
  // IMPORTANT: If you are deploying to https://<username>.github.io/<repo-name>/
  // uncomment the line below and replace <repo-name> with your repository name.
  basePath: '/thembh-demo',
};

export default nextConfig;
