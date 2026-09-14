import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import JsonLd, { breadcrumbSchema } from './JsonLd';

/**
 * Breadcrumb navigation with BreadcrumbList schema.
 * @param {Array} items - [{ name, path }]
 */
export default function Breadcrumbs({ items = [] }) {
  const fullItems = [{ name: 'Home', path: '/' }, ...items];

  return (
    <>
      <JsonLd schema={breadcrumbSchema(fullItems)} />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex items-center gap-1.5 flex-wrap text-gray-500">
          {fullItems.map((item, i) => {
            const isLast = i === fullItems.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {i === 0 && <Home className="w-3.5 h-3.5" />}
                {isLast ? (
                  <span className="font-medium text-gray-700" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link to={item.path} className="hover:text-purple-700 transition-colors">
                    {item.name}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-3.5 h-3.5 text-gray-400" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}