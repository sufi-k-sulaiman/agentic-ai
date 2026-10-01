import React, { useState } from 'react';
import FrameworkCard from './FrameworkCard';
import { CATEGORIES, FRAMEWORKS } from './frameworkData';

export default function ConsultingFrameworks() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? FRAMEWORKS
      : FRAMEWORKS.filter((f) => f.category === activeCategory);

  return (
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Consulting Frameworks in Action
        </h2>
        <p className="text-gray-500 text-sm text-center mb-8 max-w-2xl mx-auto">
          Sufi Khan Sulaiman applies 16 decision frameworks using live CRM, ERP, and Web data.
          Each framework below shows a data-driven mockup and a detailed write-up of how Sufi executes it
          with real business data — from retention rates and revenue figures to support tickets and market signals.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Framework grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((framework) => (
            <FrameworkCard key={framework.id} framework={framework} />
          ))}
        </div>
      </div>
    </section>
  );
}