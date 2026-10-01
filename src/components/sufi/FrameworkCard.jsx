import React from 'react';
import { ChevronRight } from 'lucide-react';
import FrameworkMockup from './FrameworkMockups';
import { CATEGORY_STYLES } from './frameworkData';

export default function FrameworkCard({ framework }) {
  const Icon = framework.icon;

  return (
    <article className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-3 p-4 border-b border-gray-100">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-bold text-gray-900">{framework.name}</h3>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium capitalize ${CATEGORY_STYLES[framework.category]}`}>
              {framework.category}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">{framework.tagline}</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="p-4 bg-gray-50/50 border-b border-gray-100">
        <FrameworkMockup type={framework.mockupType} data={framework.mockupData} />
      </div>

      {/* Write-up */}
      <div className="p-4 flex-1">
        <div className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="text-xs text-gray-600 leading-relaxed">{framework.writeup}</p>
            {framework.writeup2 && (
              <p className="text-xs text-gray-500 leading-relaxed">{framework.writeup2}</p>
            )}
            {framework.writeup3 && (
              <p className="text-xs text-gray-500 leading-relaxed">{framework.writeup3}</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}