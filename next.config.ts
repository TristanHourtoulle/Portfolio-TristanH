import type { NextConfig } from "next";

/**
 * Whether the current build is the production deployment.
 */
const isProductionDeployment = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    minimumCacheTTL: 2678400,
  },

  /**
   * Keeps non-production deployments out of the search index.
   * @returns the header rules to apply, empty in production
   */
  async headers() {
    if (isProductionDeployment) {
      return [];
    }

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
