import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ArrowRight, Sparkles } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { ROUTES, SITE_CONFIG } from '@/components/seo/siteConfig';
import { breadcrumbSchema } from '@/components/seo/JsonLd';

const GROUP_ORDER = ['Platform', 'Analysis', 'Learning', 'Productivity', 'About', 'Legal'];

const GROUP_BLURB = {
  Platform: 'AI assistants and content tools for research, news and discovery.',
  Analysis: 'Data and market intelligence workspaces.',
  Learning: 'Gamified education and practice tools.',
  Productivity: 'Planning, writing and career utilities.',
  About: 'Background, contact and site navigation.',
  Legal: 'Policies and terms governing use of the platform.',
};

export default function SiteMap() {
  const groups = GROUP_ORDER.map((group) => ({
    group,
    routes: ROUTES.filter((r) => r.group === group),
  })).filter((g) => g.routes.length > 0);

  return (
    <>
      <PageMeta
        title="Sitemap - All Pages and Applications"
        description="Complete index of every page on the 1cPublishing AI platform: research assistant, news aggregator, learning, games, market analysis, productivity tools and author profile."
        keywords="sitemap, all pages, 1cPublishing index, AI platform pages, site navigation"
        canonicalPath="/SiteMap"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: '1cPublishing Sitemap',
            url: `${SITE_CONFIG.baseUrl}/SiteMap`,
            description: 'Index of all public pages on the 1cPublishing AI platform.',
            isPartOf: { '@type': 'WebSite', name: SITE_CONFIG.name, url: SITE_CONFIG.baseUrl },
          },
          breadcrumbSchema([{ name: 'Sitemap', path: '/SiteMap' }]),
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 pt-4">
          <Breadcrumbs items={[{ name: 'Sitemap', path: '/SiteMap' }]} />
        </div>

        <section className="max-w-5xl mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
              <Map className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sitemap</h1>
              <p className="text-gray-500 text-sm">
                Every public page on the {SITE_CONFIG.name} platform, in one place.
              </p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed max-w-3xl mb-10">
            This index lists all {ROUTES.length} public pages so visitors and search engines can
            reach every application directly. New tools are added here as they launch, and each
            entry links to the page&rsquo;s full description and documentation.
          </p>

          <div className="space-y-10">
            {groups.map(({ group, routes }) => (
              <div key={group}>
                <div className="flex items-baseline gap-3 mb-1">
                  <h2 className="text-lg font-bold text-gray-900">{group}</h2>
                  <span className="text-xs font-medium text-gray-400">
                    {routes.length} {routes.length === 1 ? 'page' : 'pages'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{GROUP_BLURB[group]}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      to={route.path}
                      className="group flex items-start justify-between gap-3 rounded-xl border border-gray-200 bg-white p-4 hover:border-purple-300 hover:shadow-sm transition-all"
                    >
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                          {route.name}
                        </p>
                        <p className="text-xs text-gray-500 leading-relaxed mt-1">
                          {route.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-purple-600 shrink-0 mt-0.5 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-purple-100 bg-purple-50/60 p-6">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h2 className="text-base font-bold text-purple-900">Start with the AI research assistant</h2>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Qwirey combines large language models with live web search to return sourced,
              structured answers. It is the fastest way to explore what the platform can do.
            </p>
            <Link
              to="/Qwirey"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 hover:text-purple-900"
            >
              Open Qwirey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}