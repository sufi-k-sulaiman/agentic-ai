import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, Brain, Radio, Newspaper, GraduationCap, Lightbulb, Gamepad2,
  Smartphone, ListTodo, ArrowRight, Award, Users, Server, ShoppingBag,
  Bot, Cloud, GraduationCap as Mentor, CheckCircle2,
} from 'lucide-react';
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

const ACCOMPLISHMENTS = [
  {
    icon: Award,
    title: 'Executive Leadership',
    description: 'Served as Vice President (VP) of Technology and Chief Technology Officer (CTO) for several enterprise brands, guiding technology strategy and digital transformation at the highest level.',
  },
  {
    icon: ShoppingBag,
    title: 'Major Project Deliveries',
    description: 'Successfully managed the complete redesign and relaunch of the major e-commerce platform Lorex as the VP of eCommerce & Digital, delivering a modern storefront experience at scale.',
  },
  {
    icon: Server,
    title: 'Massive Scale Architecture',
    description: 'Designs distributed computer systems using database sharding, caching, and cloud-native methods to support huge amounts of traffic across millions of users.',
  },
  {
    icon: Users,
    title: 'Cross-Functional Team Management',
    description: 'Directed cross-functional teams of over 100 people across technical engineering, marketing, and operations — aligning diverse disciplines toward shared delivery goals.',
  },
];

const EXPERTISE = [
  {
    icon: ShoppingBag,
    title: 'E-Commerce & UX',
    description: 'Building digital storefronts focused on user experience to turn casual visitors into shoppers.',
    link: { label: 'Explore the Appstore', path: '/Appstore' },
  },
  {
    icon: Bot,
    title: 'Artificial Intelligence',
    description: 'Creating autonomous software agents and AI systems to automate complex business workflows and reduce corporate costs.',
    link: { label: 'Try Qwirey AI Research', path: '/Qwirey' },
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Navigating complex software setups using programming tools like Java, PHP, and TypeScript to build resilient, scalable platforms.',
    link: { label: 'See Intelligence Platform', path: '/Intelligence' },
  },
  {
    icon: Mentor,
    title: 'Mentorship & Education',
    description: 'Developing guidebooks, workshops, and educational programs to train the next generation of online business leaders.',
    link: { label: 'Visit Learning Hub', path: '/Learning' },
  },
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
        title="Sufi Khan Sulaiman — Technology Executive, E-Commerce Strategist & AI Developer"
        description="Sufi Khan Sulaiman is an experienced technology executive, e-commerce strategist, and digital automation specialist with 20+ years building large-scale software systems. Explore his AI platform suite including Qwirey, MindMap, SearchPods, Games, and more."
        keywords="Sufi Khan Sulaiman, technology executive, e-commerce strategist, CTO, VP of Technology, AI developer, digital automation, 1cPlatform, Lorex, distributed systems, software engineering leader"
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
              <p className="text-white/70 text-base font-medium mb-4">
                Technology Executive · E-Commerce Strategist · Digital Automation Specialist
              </p>
              <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
                Sufi Khan Sulaiman is an experienced technology executive, e-commerce strategist, and
                digital automation specialist with more than 20 years of experience. He is known for
                managing global engineering teams and building large-scale software systems that serve
                millions of people across North America and the Middle East.
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

        {/* Key Roles and Accomplishments */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Key Roles & Accomplishments</h2>
          <p className="text-gray-500 text-sm text-center mb-8">
            Two decades of leadership in enterprise technology and e-commerce
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {ACCOMPLISHMENTS.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Core Areas of Expertise — with cross-links */}
        <section className="bg-white border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Core Areas of Expertise</h2>
            <p className="text-gray-500 text-sm text-center mb-8">
              Specialized skills applied across the 1cPlatform application suite
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {EXPERTISE.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-2xl border border-purple-100 bg-purple-50/50 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-purple-600 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-purple-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4">{item.description}</p>
                    <Link
                      to={item.link.path}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-700 hover:text-purple-900 transition-colors"
                    >
                      {item.link.label}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </article>
                );
              })}
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