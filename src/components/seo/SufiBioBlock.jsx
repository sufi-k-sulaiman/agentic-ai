import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award, Users, Server, ShoppingBag, Bot, Cloud, GraduationCap, ArrowRight,
} from 'lucide-react';

/**
 * Reusable bio block for Sufi Khan Sulaiman.
 * Renders a rewritten professional bio with cross-links to the author page
 * and to relevant platform apps. Drop on any page to add SEO cross-linking.
 */
export default function SufiBioBlock() {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            About the Author —{' '}
            <Link to="/SufiKhanSulaiman" className="text-purple-700 hover:text-purple-900 underline-offset-2 hover:underline">
              Sufi Khan Sulaiman
            </Link>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Sufi Khan Sulaiman is an experienced technology executive, e-commerce strategist, and
            digital automation specialist with more than 20 years of experience. He is known for
            managing global engineering teams and building large-scale software systems that serve
            millions of people across North America and the Middle East. As the author and developer
            behind the 1cPlatform AI application suite, Sufi brings enterprise-grade engineering
            discipline to accessible, everyday AI tools.
          </p>
        </div>

        {/* Key Roles & Accomplishments */}
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          {[
            {
              icon: Award,
              title: 'Executive Leadership',
              text: 'Served as Vice President (VP) of Technology and Chief Technology Officer (CTO) for several enterprise brands, setting technology strategy and leading digital transformation.',
            },
            {
              icon: ShoppingBag,
              title: 'Major Project Delivery',
              text: 'Managed the complete redesign and relaunch of the major e-commerce platform Lorex as VP of eCommerce & Digital, delivering a modern storefront at scale.',
            },
            {
              icon: Server,
              title: 'Massive-Scale Systems',
              text: 'Designs distributed computer systems using database sharding, caching, and cloud-native patterns to support huge amounts of traffic for millions of users.',
            },
            {
              icon: Users,
              title: 'Cross-Functional Team Management',
              text: 'Directed cross-functional teams of over 100 people across technical engineering, marketing, and operations, aligning diverse disciplines toward shared delivery goals.',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
              </article>
            );
          })}
        </div>

        {/* Core Areas of Expertise — cross-linked */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 p-6 md:p-8">
          <h3 className="text-lg font-bold text-purple-900 mb-6 text-center">Core Areas of Expertise</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: ShoppingBag,
                title: 'E-Commerce & UX',
                text: 'Building digital storefronts focused on user experience to turn casual visitors into shoppers.',
                link: { label: 'Explore the Appstore', path: '/Appstore' },
              },
              {
                icon: Bot,
                title: 'Artificial Intelligence',
                text: 'Creating autonomous software agents and AI systems to automate complex business workflows and reduce corporate costs.',
                link: { label: 'Try Qwirey AI Research', path: '/Qwirey' },
              },
              {
                icon: Cloud,
                title: 'Cloud Architecture',
                text: 'Navigating complex software setups using programming tools like Java, PHP, and TypeScript to build resilient, scalable platforms.',
                link: { label: 'See Intelligence Platform', path: '/Intelligence' },
              },
              {
                icon: GraduationCap,
                title: 'Mentorship & Education',
                text: 'Developing guidebooks, workshops, and educational programs to train the next generation of online business leaders.',
                link: { label: 'Visit Learning Hub', path: '/Learning' },
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white/70 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-purple-600 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-purple-900">{item.title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{item.text}</p>
                  <Link
                    to={item.link.path}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    {item.link.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/SufiKhanSulaiman"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-700 text-white text-sm font-medium hover:bg-purple-800 transition-colors"
            >
              Read the full author profile
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}