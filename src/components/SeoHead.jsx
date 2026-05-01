import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * SeoHead — Reusable SEO meta component
 * Usage: <SeoHead title="Rooms" description="..." canonical="/rooms" />
 */
const SITE_NAME = "Ocean Paradise Hotel & Resort";
const BASE_URL = "https://www.oceanparadisehotel.us";
const DEFAULT_IMAGE = `${BASE_URL}/static/media/og-image.jpg`;

function SeoHead({
  title,
  description,
  canonical = "/",
  image = DEFAULT_IMAGE,
  imageAlt = "Ocean Paradise Hotel & Resort beachfront view",
  type = "website",
  noIndex = false,
  jsonLd = null,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Beachfront Hotel in Ocean Shores, WA`;
  const fullCanonical = `${BASE_URL}${canonical}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* JSON-LD (page-specific) */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

export default SeoHead;
