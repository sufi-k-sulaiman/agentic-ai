import React from 'react';
import { Lightbulb, Target, Sparkles, TrendingUp } from 'lucide-react';

const ICONS = [Lightbulb, Target, Sparkles, TrendingUp];
const ACCENTS = [
  { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', title: 'text-purple-900' },
  { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', title: 'text-blue-900' },
  { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-600', title: 'text-emerald-900' },
  { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-600', title: 'text-amber-900' },
];

export default function SeoContentBlocks({ blocks = [], author = 'Sufi Khan Sulaiman' }) {
  if (!blocks.length) return null;

  return (
    <section className="mt-12 mb-8" aria-label="Application use cases and SEO content">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            How to Use This Application
          </h2>
          <p className="text-gray-500 text-sm">
            Practical use cases and capabilities, authored by {author}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map((block, i) => {
            const Icon = ICONS[i % ICONS.length];
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <article
                key={i}
                className={`rounded-2xl border ${accent.border} ${accent.bg} p-6 shadow-sm`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center ${accent.icon}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-lg font-bold ${accent.title}`}>{block.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{block.content}</p>
              </article>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Content by {author} — {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}