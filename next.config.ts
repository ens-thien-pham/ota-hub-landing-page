import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPage = repo.endsWith(".github.io");

const basePath = isGitHubActions && repo && !isUserOrOrgPage ? `/${repo}` : "";

const nextConfig: NextConfig = {
	output: "export",
	trailingSlash: true,
	basePath,
	assetPrefix: basePath,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
