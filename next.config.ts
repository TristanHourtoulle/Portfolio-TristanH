import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * The case-study screenshots are already WebP at quality 82, so letting
     * next/image re-encode them at its default 75 would stack a second lossy
     * pass on top of the first and soften the fine interface text they are
     * made of. 90 is opted in here so `<Image quality={90}>` is allowed.
     */
    qualities: [75, 90],
  },
};

export default nextConfig;
