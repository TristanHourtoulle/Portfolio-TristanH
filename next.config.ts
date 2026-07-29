import type { NextConfig } from "next";

/**
 * Vercel exposes VERCEL_ENV both at build time and at runtime, and its value is
 * limited to "production", "preview" or "development" (custom environment names
 * are reported through VERCEL_TARGET_ENV, not through this one, so a custom
 * environment still reads as "preview" here).
 *
 * next.config is evaluated during `next build`, which is the right moment for
 * this decision: every Vercel path that puts a build in front of the production
 * domain either rebuilds it from scratch (Promote to Production) or promotes a
 * deployment that was already built as production (Instant Rollback, staged
 * production builds). A deployment can therefore never end up serving
 * production traffic with preview headers baked into it.
 *
 * The test is deliberately an allowlist rather than a denylist: anything that is
 * not explicitly a production deployment gets the noindex header. A local build,
 * a CI build, or an unrecognised value all fail safe towards "not indexable"
 * instead of silently publishing a crawlable duplicate of the site.
 */
const isProductionDeployment = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    /**
     * AVIF is offered ahead of WebP. The order of this array is what decides
     * the output: Next.js serves the first entry the browser advertises in its
     * Accept header, so AVIF-capable browsers get AVIF and every other browser
     * falls back to WebP, which is the default behaviour we had before. AVIF
     * costs roughly 50% more encoding time for around 20% smaller files, a
     * trade worth taking on screenshots that are encoded once and then cached
     * for a long time.
     *
     * This is independent of `qualities` below: `formats` selects the container,
     * `qualities` gates the allowed `q` values, and both apply to every variant.
     */
    formats: ["image/avif", "image/webp"],

    /**
     * The case-study screenshots are already WebP at quality 82, so letting
     * next/image re-encode them at its default 75 would stack a second lossy
     * pass on top of the first and soften the fine interface text they are
     * made of. 90 is opted in here so `<Image quality={90}>` is allowed.
     */
    qualities: [75, 90],

    /**
     * 31 days. The Next.js 16 default is 14400 seconds (4 hours), which makes
     * the optimizer re-encode the exact same unchanged screenshots several
     * times a day for no benefit.
     *
     * A long TTL is safe here specifically because every image on this site is
     * a local one served from /public: on Vercel the cache key of a local image
     * is built from the content hash of the source file rather than from its
     * path, so replacing a screenshot yields a new key and a stale image can
     * never be pinned server side.
     *
     * 31 days is also exactly the ceiling Vercel documents for local image
     * retention on its CDN, so a larger number would buy nothing there while
     * still stretching the browser-facing max-age. That max-age is the one real
     * staleness window, because the browser-visible URL (/_next/image?url=...)
     * is not content-hashed, and a month is a sane bound for screenshots that
     * change a couple of times a year.
     */
    minimumCacheTTL: 2678400,
  },

  /**
   * Keeps non-production deployments out of the search index. Preview URLs are
   * otherwise fully crawlable copies of the site competing with production for
   * the same queries, and there is no robots.txt or canonical protection at the
   * hosting layer to fall back on.
   *
   * This is sent as a header rather than a meta tag on purpose, so that it also
   * covers responses that cannot carry a meta tag: images, the sitemap, and any
   * other non-HTML route.
   */
  async headers() {
    if (isProductionDeployment) {
      return [];
    }

    return [
      {
        // The `*` modifier means zero or more segments, so "/:path*" matches
        // every route including the root "/".
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
