import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from './siteConfig';

/**
 * Injects JSON-LD structured data into the page <head>.
 * Pass a single schema object or an array of schema objects.
 *
 * Usage:
 * <JsonLd schema={personSchema} />
 * <JsonLd schema={[orgSchema, webAppSchema, faqSchema]} />
 */
export default function JsonLd({ schema }) {
  if (!schema) return null;
  const schemas = Array.isArray(schema) ? schema : [schema];
  return (
    <Helmet>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

// ─── Schema generators ───────────────────────────────────────────────

/** Organization / WebSite schema — site-wide publisher info */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.organization.name,
    url: SITE_CONFIG.organization.url,
    logo: SITE_CONFIG.organization.logo,
    sameAs: SITE_CONFIG.organization.sameAs,
    founder: {
      '@type': 'Person',
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.author.url,
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.fullName,
    url: SITE_CONFIG.baseUrl,
    description: SITE_CONFIG.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.organization.name,
      url: SITE_CONFIG.organization.url,
    },
  };
}

/** Person schema for the author page */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.author.name,
    url: SITE_CONFIG.author.url,
    image: SITE_CONFIG.logo,
    jobTitle: SITE_CONFIG.author.jobTitle,
    description: SITE_CONFIG.author.description,
    worksFor: {
      '@type': 'Organization',
      name: SITE_CONFIG.organization.name,
      url: SITE_CONFIG.organization.url,
    },
    sameAs: [SITE_CONFIG.author.externalUrl],
    knowsAbout: [
      'E-Commerce',
      'User Experience Design',
      'Artificial Intelligence',
      'Autonomous AI Agents',
      'Cloud Architecture',
      'Distributed Systems',
      'Database Sharding',
      'Java',
      'PHP',
      'TypeScript',
      'Digital Automation',
      'Team Management',
      'Mentorship',
    ],
  };
}

/**
 * WebApplication schema for app pages.
 * @param {object} opts - { name, description, url, category, offers }
 */
export function webApplicationSchema({ name, description, url, category = 'BusinessApplication', offers = 'Free' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: `${SITE_CONFIG.baseUrl}${url}`,
    applicationCategory: category,
    operatingSystem: 'Web Browser',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: offers === 'Free' ? 'Free to use' : offers,
    },
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.organization.name,
      url: SITE_CONFIG.organization.url,
    },
  };
}

/**
 * BreadcrumbList schema for navigation hierarchy.
 * @param {Array} items - [{ name, path }]
 */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_CONFIG.baseUrl}${item.path}`,
    })),
  };
}

/**
 * FAQPage schema for rich FAQ results.
 * @param {Array} faqs - [{ question, answer }]
 */
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

/**
 * Article schema for news/blog content.
 * @param {object} opts - { headline, description, image, datePublished, authorName }
 */
export function articleSchema({ headline, description, image, datePublished, authorName }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image || SITE_CONFIG.logo,
    datePublished: datePublished || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: authorName || SITE_CONFIG.author.name,
      url: SITE_CONFIG.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.organization.logo,
      },
    },
  };
}

/**
 * Course schema for the Learning platform.
 * @param {Array} courses - [{ name, description, provider }]
 */
export function courseSchema(courses) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: courses.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Course',
        name: c.name,
        description: c.description,
        provider: {
          '@type': 'Organization',
          name: c.provider || SITE_CONFIG.organization.name,
          url: SITE_CONFIG.baseUrl,
        },
      },
    })),
  };
}

/**
 * Review / AggregateRating schema.
 * @param {object} opts - { itemName, ratingValue, bestRating, ratingCount, url }
 */
export function aggregateRatingSchema({ itemName, ratingValue, bestRating = '5', ratingCount, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: itemName,
    applicationCategory: 'BusinessApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      bestRating,
      ratingCount,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    url: `${SITE_CONFIG.baseUrl}${url}`,
  };
}