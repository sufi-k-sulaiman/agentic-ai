import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import JsonLd, { faqSchema } from './JsonLd';
import { faqContent } from './faqContent';

/**
 * Renders an on-page FAQ section with FAQPage schema for Google rich results.
 * @param {string} pageKey - key in faqContent (e.g. 'Qwirey', 'News')
 */
export default function FaqSection({ pageKey }) {
  const faqs = faqContent[pageKey];
  if (!faqs || !faqs.length) return null;

  return (
    <>
      <JsonLd schema={faqSchema(faqs)} />
      <section className="max-w-4xl mx-auto px-4 py-12" aria-label="Frequently Asked Questions">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <HelpCircle className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-gray-500 text-sm">
            Common questions about this application
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-base font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Have more questions?{' '}
          <Link to="/ContactUs" className="text-purple-700 hover:text-purple-900 font-medium">
            Contact us
          </Link>
        </p>
      </section>
    </>
  );
}