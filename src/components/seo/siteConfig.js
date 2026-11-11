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

// All public, indexable routes — used by the XML sitemap, the HTML sitemap
// page, and internal linking. Private/utility routes are deliberately excluded.
export const ROUTES = [
  { path: '/Home', name: 'Home', description: 'The 1cPublishing AI platform: research, news, learning, analytics and productivity tools in one workspace.', priority: '1.0', changefreq: 'weekly', group: 'Platform' },
  { path: '/Qwirey', name: 'Qwirey — AI Research Assistant', description: 'Sourced, structured AI research with live web search, document analysis and voice input.', priority: '0.9', changefreq: 'weekly', group: 'Platform' },
  { path: '/MindMap', name: 'Neural MindMap — AI Knowledge Visualization', description: 'Generate interactive knowledge trees for study, planning and brainstorming.', priority: '0.8', changefreq: 'weekly', group: 'Platform' },
  { path: '/SearchPods', name: 'SearchPods — AI Podcast and Topic Search', description: 'Topic-driven search that groups live web results into thematic pods.', priority: '0.8', changefreq: 'weekly', group: 'Platform' },
  { path: '/News', name: 'News — AI News Aggregator', description: 'Headlines from trusted sources, summarised and organised by category.', priority: '0.9', changefreq: 'daily', group: 'Platform' },
  { path: '/Learning', name: 'Learning Archipelago — AI Education Platform', description: 'Gamified, AI-generated courses across subjects with progress tracking.', priority: '0.8', changefreq: 'weekly', group: 'Platform' },
  { path: '/Intelligence', name: 'Intelligence — AI Predictive Analytics', description: 'Multi-source analysis frameworks, scenario modeling and collaborative reports.', priority: '0.8', changefreq: 'weekly', group: 'Platform' },
  { path: '/Geospatial', name: 'Geospatial Intelligence — Spatial Analytics', description: 'Interactive maps, country comparisons and spatial models for regional analysis.', priority: '0.8', changefreq: 'weekly', group: 'Analysis' },
  { path: '/Markets', name: 'MarketsPro — AI Stock Analysis', description: 'Fundamentals, technicals and valuation for thousands of listed companies.', priority: '0.8', changefreq: 'daily', group: 'Analysis' },
  { path: '/StockComparison', name: 'Stock Comparison — Side-by-Side Analysis', description: 'Compare companies on quality, value, growth and momentum frameworks.', priority: '0.7', changefreq: 'weekly', group: 'Analysis' },
  { path: '/Games', name: 'Games — Educational Arcade', description: 'Word Shooter, Space Battle, Cosmic Tank and Tetris Galaxy learning games.', priority: '0.8', changefreq: 'weekly', group: 'Learning' },
  { path: '/Tasks', name: 'Tasks — Kanban Task Manager', description: 'Visual Kanban boards with priorities, due dates and attachments.', priority: '0.7', changefreq: 'weekly', group: 'Productivity' },
  { path: '/Notes', name: 'Notes — AI Writing and Note-Taking', description: 'AI-assisted notes with tags, pinning and in-editor image generation.', priority: '0.7', changefreq: 'weekly', group: 'Productivity' },
  { path: '/ResumeBuilder', name: 'Resume Builder — AI Resume and ATS Analysis', description: 'Draft an ATS-optimised resume with keyword analysis and clean templates.', priority: '0.7', changefreq: 'monthly', group: 'Productivity' },
  { path: '/Appstore', name: 'Appstore — AI Application Collection', description: 'Curated AI apps for research, productivity, learning and business.', priority: '0.6', changefreq: 'monthly', group: 'Productivity' },
  { path: '/SufiKhanSulaiman', name: 'Sufi Khan Sulaiman — Author and Technology Executive', description: 'Profile, leadership experience and consulting frameworks of the platform author.', priority: '0.9', changefreq: 'monthly', group: 'About' },
  { path: '/SiteMap', name: 'Sitemap — All Pages', description: 'Complete index of every public page on the 1cPublishing platform.', priority: '0.5', changefreq: 'weekly', group: 'About' },
  { path: '/ContactUs', name: 'Contact Us', description: 'Support, sales and feedback for the 1cPublishing platform.', priority: '0.5', changefreq: 'monthly', group: 'About' },
  { path: '/Privacy', name: 'Privacy Policy', description: 'How 1cPublishing collects, uses and protects personal information.', priority: '0.3', changefreq: 'yearly', group: 'Legal' },
  { path: '/TermsOfUse', name: 'Terms of Use', description: 'Terms and conditions for using 1cPublishing applications.', priority: '0.3', changefreq: 'yearly', group: 'Legal' },
];

// Routes that must never be indexed (private tools, search results, utility pages)
export const PRIVATE_ROUTES = [
  '/Settings',
  '/SearchResults',
  '/Search',
  '/Comms',
  '/Template',
  '/DashboardComponents',
  '/TestFunctions',
  '/OAuthConsent',
];