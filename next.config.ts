import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isProjectPagesSite =
  process.env.GITHUB_ACTIONS === "true" &&
  repoName !== undefined &&
  !repoName.endsWith(".github.io");
const basePath = isProjectPagesSite ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default withBundleAnalyzer(nextConfig);
