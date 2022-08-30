const withLinaria = require("next-linaria");

module.exports = withLinaria({
  /**
   * Setup for enabling fetching of images from a specific domain.
   * https://nextjs.org/docs/api-reference/next/image#domains
   */
  images: {
    domains: ["picsum.photos", "cdn.sanity.io"],
  },
});
