import React from 'react';
import {
  BrainCircuit, Building2, Cog, Target, Globe2, CheckCircle2,
} from 'lucide-react';

const LEADERSHIP_BLOCKS = [
  {
    icon: BrainCircuit,
    title: 'Executive Technology & AI Leadership',
    accent: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    points: [
      'Establish and execute a comprehensive, AI-first technology roadmap that transforms enterprise data assets into distinct market advantages and sustainable corporate growth.',
      'Advance generative AI frameworks and intelligent, multi-agent systems out of isolated experimental labs and securely into high-volume, commercial-grade production.',
      'Oversee AI architecture, foundational model selection strategies, and automated MLOps pipelines to ensure continuous optimization, high model accuracy, and minimal drift.',
      'Establish disciplined approaches to AI evaluation, data governance, scalable infrastructure design, and strict computational cost management across complex cloud environments.',
    ],
  },
  {
    icon: Building2,
    title: 'Enterprise Architecture & Modernization',
    accent: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    points: [
      'Define enterprise architecture frameworks and long-term platform modernization roadmaps that systematically eliminate legacy technical debt and future-proof the core technology stack.',
      'Guide modernization of highly complex, legacy technology platforms and core IT infrastructure by transitioning business logic seamlessly to cloud-native microservices.',
      'Establish technology standards, engineering best practices, and definitive architectural direction to unify technical output across disparate, multi-disciplinary divisions.',
    ],
  },
  {
    icon: Cog,
    title: 'Engineering Excellence & Scalability',
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    points: [
      'Strengthen engineering productivity, platform scalability, system reliability, and overall technical quality by deploying advanced automated CI/CD and AI-assisted development tools.',
      'Balance cutting-edge innovation with strict security guardrails, high-availability reliability targets, and immediate commercial product priorities.',
    ],
  },
  {
    icon: Target,
    title: 'Corporate Alignment & Strategic Impact',
    accent: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    points: [
      'Serve as the senior technology authority across the entire organization, acting as the ultimate custodian of technical vision, infrastructure choices, and execution.',
      'Partner directly with the CEO and the executive leadership team to tightly align technical development with overarching corporate strategies and board-level initiatives.',
      'Connect technology investments directly to top-line revenue growth, bottom-line profitability, and measurable increases in operational efficiency.',
      'Measure technology performance strictly through tangible business outcomes, customer retention metrics, and capital efficiency rather than isolated technical KPIs.',
    ],
  },
  {
    icon: Globe2,
    title: 'Global Talent & Organizational Scale',
    accent: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    points: [
      'Build organizational structures, leadership capabilities, and agile technical workforces required to seamlessly support the enterprise\u2019s next phase of hyper-growth.',
      'Lead globally distributed engineering and technology organizations, fostering a unified, high-collaboration culture across multiple international regions.',
      'Develop technology workforce upskilling initiatives and robust succession planning strategies to guarantee long-term technical continuity and top-tier talent retention.',
    ],
  },
];

export default function LeadershipContext() {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Executive Leadership Context
        </h2>
        <p className="text-gray-500 text-sm text-center mb-8 max-w-2xl mx-auto">
          The full scope of Sufi Khan Sulaiman&rsquo;s executive technology leadership across AI strategy,
          enterprise architecture, engineering excellence, corporate alignment, and global organizational scale.
        </p>
        <div className="space-y-6">
          {LEADERSHIP_BLOCKS.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.title}
                className={`rounded-2xl border ${block.border} bg-white p-6 shadow-sm`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${block.bg} flex items-center justify-center ${block.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{block.title}</h3>
                </div>
                <ul className="space-y-3">
                  {block.points.map((point, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-gray-600 leading-relaxed">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${block.accent}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}