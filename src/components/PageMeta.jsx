import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '@/components/seo/siteConfig';

/**
 * Enhanced page meta with:
 * - Canonical URLs (auto-generated from path or explicit)
 * - Robots meta tags (index/follow control)
 * - JSON-LD structured data injection
 * - Open Graph + Twitter Card tags
 */
export default function PageMeta({
  title,
  description,
  keywords,
  canonicalPath,
  robots = 'index, follow',
  ogImage = SITE_CONFIG.logo,
  ogType = 'website',
  jsonLd,
}) {
  const fullTitle = title ? `${title} - ${SITE_CONFIG.name}` : `${SITE_CONFIG.fullName} - AI-Powered Platform`;
  const canonicalUrl = canonicalPath
    ? `${SITE_CONFIG.baseUrl}${canonicalPath}`
    : SITE_CONFIG.baseUrl;

  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robots} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}