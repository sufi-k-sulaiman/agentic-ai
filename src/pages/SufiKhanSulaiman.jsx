import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Brain, Radio, Newspaper, GraduationCap, Lightbulb, Gamepad2, Smartphone, ListTodo, ArrowRight } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import SeoContentBlocks from '@/components/seo/SeoContentBlocks';
import { seoContent } from '@/components/seo/seoContent';

const APP_LINKS = [
  { name: 'Qwirey', icon: Sparkles, path: '/Qwirey', color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: 'MindMap', icon: Brain, path: '/MindMap', color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'SearchPods', icon: Radio, path: '/SearchPods', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'News', icon: Newspaper, path: '/News', color: 'text-red-600', bg: 'bg-red-50' },
  { name: 'Learning', icon: GraduationCap, path: '/Learning', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'Intelligence', icon: Lightbulb, path: '/Intelligence', color: 'text-amber-600', bg: 'bg-amber-50' },
  { name: 'Games', icon: Gamepad2, path: '/Games', color: 'text-pink-600', bg: 'bg-pink-50' },
  { name: 'Appstore', icon: Smartphone, path: '/Appstore', color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { name: 'Tasks', icon: ListTodo, path: '/Tasks', color: 'text-orange-600', bg: 'bg-orange-50' },
];

const ALL_BLOCKS = [
  ...seoContent.Qwirey,
  ...seoContent.MindMap,
  ...seoContent.SearchPods,
  ...seoContent.News,
  ...seoContent.Learning,
  ...seoContent.Geospatial,
  ...seoContent.Intelligence,
  ...seoContent.Games,
  ...seoContent.Appstore,
  ...seoContent.Tasks,
];

export default function SufiKhanSulaiman() {
  return (
    <>
      <PageMeta
        title="Sufi Khan Sulaiman — AI Platform Author & SEO Content"
        description="Sufi Khan Sulaiman is the author and developer behind the 1cPlatform AI application suite. Explore his SEO content across Qwirey, MindMap, SearchPods, Games, and more."
        keywords="Sufi Khan Sulaiman, 1cPlatform, AI applications, SEO content author, educational games, AI research tools, knowledge platform"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero / Bio */}
        <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-6 text-4xl font-bold">
                SK
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Sufi Khan Sulaiman</h1>
              <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
                Author, developer, and SEO content strategist behind the 1cPlatform AI application suite.
                With 20+ years building scalable e-commerce solutions, Sufi creates educational and
                productivity tools that make AI accessible to everyone.
              </p>
              <a
                href="https://sufikhan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors"
              >
                Visit sufikhan.com
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* App Links Grid */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Applications on This Platform</h2>
          <p className="text-gray-500 text-sm text-center mb-8">
            Each tool features SEO content authored by Sufi Khan Sulaiman
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {APP_LINKS.map((app) => {
              const Icon = app.icon;
              return (
                <Link
                  key={app.name}
                  to={app.path}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl ${app.bg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${app.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{app.name}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* All SEO Content Blocks */}
        <SeoContentBlocks blocks={ALL_BLOCKS} />
      </div>
    </>
  );
}