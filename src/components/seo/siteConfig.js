// Site-wide SEO configuration
// Used across all schema generators, meta tags, and technical SEO files.
export const SITE_CONFIG = {
  name: '1cPublishing',
  fullName: '1cPublishing AI Platform',
  description:
    'AI-powered platform with smart agents for research, news, learning, games, and productivity — built by technology executive Sufi Khan Sulaiman.',
  baseUrl: 'https://agentic-ai.base44.app',
  logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692729a5f5180fbd43f297e9/a1a505225_1cPublishing-logo.png',
  author: {
    name: 'Sufi Khan Sulaiman',
    url: 'https://agentic-ai.base44.app/SufiKhanSulaiman',
    externalUrl: 'https://sufikhan.com/',
    jobTitle: 'Technology Executive, E-Commerce Strategist & Digital Automation Specialist',
    description:
      'Experienced technology executive, e-commerce strategist, and digital automation specialist with more than 20 years of experience building large-scale software systems serving millions of users across North America and the Middle East.',
  },
  organization: {
    name: '1cPublishing',
    url: 'https://agentic-ai.base44.app',
    logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692729a5f5180fbd43f297e9/a1a505225_1cPublishing-logo.png',
    sameAs: [
      'https://1cplatform.com/',
      'https://sufikhan.com/',
    ],
  },
};

// All public routes for sitemap and internal linking
export const ROUTES = [
  { path: '/', name: 'Home', priority: '1.0', changefreq: 'daily' },
  { path: '/Qwirey', name: 'Qwirey — AI Research Assistant', priority: '0.9', changefreq: 'weekly' },
  { path: '/MindMap', name: 'MindMap — AI Knowledge Visualization', priority: '0.8', changefreq: 'weekly' },
  { path: '/SearchPods', name: 'SearchPods — AI Podcast Search', priority: '0.8', changefreq: 'weekly' },
  { path: '/News', name: 'News — AI News Aggregator', priority: '0.9', changefreq: 'daily' },
  { path: '/Learning', name: 'Learning — AI Education Platform', priority: '0.8', changefreq: 'weekly' },
  { path: '/Intelligence', name: 'Intelligence — AI Predictive Analytics', priority: '0.8', changefreq: 'weekly' },
  { path: '/Games', name: 'Games — Educational Arcade', priority: '0.8', changefreq: 'weekly' },
  { path: '/Appstore', name: 'Appstore — AI App Collection', priority: '0.7', changefreq: 'monthly' },
  { path: '/Tasks', name: 'Tasks — Kanban Task Manager', priority: '0.7', changefreq: 'weekly' },
  { path: '/Notes', name: 'Notes — AI Note-Taking', priority: '0.7', changefreq: 'weekly' },
  { path: '/SufiKhanSulaiman', name: 'Sufi Khan Sulaiman — Author Profile', priority: '0.9', changefreq: 'monthly' },
  { path: '/Privacy', name: 'Privacy Policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/TermsOfUse', name: 'Terms of Use', priority: '0.3', changefreq: 'yearly' },
  { path: '/ContactUs', name: 'Contact Us', priority: '0.5', changefreq: 'monthly' },
];