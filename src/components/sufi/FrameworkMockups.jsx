import React from 'react';

// Static color class map — Tailwind purges dynamic class names, so we use literal strings
const C = {
  green:   { bg: 'bg-green-50',   border: 'border-green-200',   text: 'text-green-700',   sub: 'text-green-600',   dot: 'text-green-500',   bg100: 'bg-green-100',   text800: 'text-green-800' },
  red:     { bg: 'bg-red-50',     border: 'border-red-200',     text: 'text-red-700',     sub: 'text-red-600',     dot: 'text-red-500',     bg100: 'bg-red-100',     text800: 'text-red-800' },
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-200',    text: 'text-blue-700',    sub: 'text-blue-600',    dot: 'text-blue-500',    bg100: 'bg-blue-100',    text800: 'text-blue-800' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   sub: 'text-amber-600',   dot: 'text-amber-500',   bg100: 'bg-amber-100',   text800: 'text-amber-800' },
  purple:  { bg: 'bg-purple-50',  border: 'border-purple-200',  text: 'text-purple-700',  sub: 'text-purple-600',  dot: 'text-purple-500',  bg100: 'bg-purple-100',  text800: 'text-purple-800' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', sub: 'text-emerald-600', dot: 'text-emerald-500', bg100: 'bg-emerald-100', text800: 'text-emerald-800' },
  pink:    { bg: 'bg-pink-50',    border: 'border-pink-200',    text: 'text-pink-700',    sub: 'text-pink-600',    dot: 'text-pink-500',    bg100: 'bg-pink-100',    text800: 'text-pink-800' },
  indigo:  { bg: 'bg-indigo-50',  border: 'border-indigo-200',  text: 'text-indigo-700',  sub: 'text-indigo-600',  dot: 'text-indigo-500',  bg100: 'bg-indigo-100',  text800: 'text-indigo-800' },
  gray:    { bg: 'bg-gray-50',    border: 'border-gray-200',    text: 'text-gray-700',    sub: 'text-gray-600',    dot: 'text-gray-500',    bg100: 'bg-gray-100',    text800: 'text-gray-800' },
};

function Pill({ children, className = '' }) {
  return <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-medium ${className}`}>{children}</span>;
}

function Section({ label, color, items }) {
  const c = C[color] || C.gray;
  return (
    <div className={`rounded-lg border p-2.5 ${c.bg} ${c.border}`}>
      <div className={`text-[11px] font-bold mb-1 ${c.text}`}>{label}</div>
      {items.map((it, i) => (
        <div key={i} className={`text-[11px] leading-snug mb-0.5 flex gap-1 ${c.sub}`}>
          <span className={c.dot}>•</span>{it}
        </div>
      ))}
    </div>
  );
}

// ── SWOT ───────────────────────────────────────────────
function SwotMockup({ data }) {
  return (
    <div className="grid grid-cols-2 gap-1.5">
      <Section label="Strengths" color="green" items={data.strengths} />
      <Section label="Weaknesses" color="red" items={data.weaknesses} />
      <Section label="Opportunities" color="blue" items={data.opportunities} />
      <Section label="Threats" color="amber" items={data.threats} />
    </div>
  );
}

// ── 5 WHYS ─────────────────────────────────────────────
function FiveWhysMockup({ data }) {
  return (
    <div className="space-y-1">
      <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-1.5">
        <span className="text-[10px] font-bold text-red-600">PROBLEM</span>
        <p className="text-xs font-medium text-red-700">{data.problem}</p>
      </div>
      {data.whys.map((w, i) => (
        <div key={i} className="flex gap-2 items-start pl-2">
          <span className="text-[10px] font-bold text-gray-400 mt-0.5 shrink-0">{i + 1}.</span>
          <div className="flex-1">
            <p className="text-[11px] text-gray-400 leading-tight">{w.q}</p>
            <p className="text-xs text-gray-700 font-medium leading-tight">→ {w.a}</p>
          </div>
        </div>
      ))}
      <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
        <span className="text-[10px] font-bold text-green-600">ROOT CAUSE</span>
        <p className="text-xs font-medium text-green-700">{data.rootCause}</p>
      </div>
    </div>
  );
}

// ── VALUE DISCIPLINES ──────────────────────────────────
function ValueDisciplinesMockup({ data }) {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {data.disciplines.map((d) => (
        <div key={d.name} className={`rounded-lg border p-2.5 ${d.selected ? 'border-purple-400 bg-purple-50 ring-1 ring-purple-300' : 'border-gray-200 bg-gray-50'}`}>
          {d.selected && <Pill className="bg-purple-600 text-white mb-1">SELECTED</Pill>}
          <div className={`text-[11px] font-bold mb-1 ${d.selected ? 'text-purple-700' : 'text-gray-600'}`}>{d.name}</div>
          <p className="text-[10px] text-gray-500 mb-1.5">{d.focus}</p>
          <p className="text-[10px] font-medium text-gray-700">{d.metric}</p>
        </div>
      ))}
    </div>
  );
}

// ── PROJECT TRIANGLE ───────────────────────────────────
function ProjectTriangleMockup({ data }) {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="relative w-44 h-32">
        <svg viewBox="0 0 200 160" className="w-full h-full">
          <polygon points="100,10 190,150 10,150" fill="none" stroke="#6366f1" strokeWidth="2" />
          <text x="100" y="32" textAnchor="middle" className="text-[9px] font-bold fill-indigo-600">SCOPE</text>
          <text x="100" y="44" textAnchor="middle" className="text-[7px] fill-gray-500">{data.scope.slice(0, 24)}</text>
          <text x="28" y="148" textAnchor="middle" className="text-[9px] font-bold fill-indigo-600">TIME</text>
          <text x="28" y="158" textAnchor="middle" className="text-[7px] fill-gray-500">{data.time.slice(0, 14)}</text>
          <text x="172" y="148" textAnchor="middle" className="text-[9px] font-bold fill-indigo-600">COST</text>
          <text x="172" y="158" textAnchor="middle" className="text-[7px] fill-gray-500">{data.cost.slice(0, 14)}</text>
        </svg>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded px-2 py-1 mt-1">
        <p className="text-[10px] font-medium text-amber-700">{data.constraint}</p>
      </div>
    </div>
  );
}

// ── 3C's ───────────────────────────────────────────────
function ThreeCsMockup({ data }) {
  const items = [
    { key: 'customer', label: 'Customer', color: 'blue', ...data.customer },
    { key: 'company', label: 'Company', color: 'purple', ...data.company },
    { key: 'competitor', label: 'Competitor', color: 'red', ...data.competitor },
  ];
  return (
    <div className="space-y-1.5">
      {items.map((it) => {
        const c = C[it.color];
        return (
          <div key={it.key} className={`rounded-lg border p-2 ${c.bg} ${c.border}`}>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className={`text-[10px] font-bold ${c.text}`}>{it.label}</span>
              <Pill className={`${c.bg100} ${c.sub}`}>{it.data}</Pill>
            </div>
            <p className="text-[11px] text-gray-700">{it.insight}</p>
          </div>
        );
      })}
    </div>
  );
}

// ── PESTLE ─────────────────────────────────────────────
function PestleMockup({ data }) {
  const items = [
    { key: 'P', label: 'Political', val: data.political, color: 'indigo' },
    { key: 'E', label: 'Economic', val: data.economic, color: 'emerald' },
    { key: 'S', label: 'Social', val: data.social, color: 'pink' },
    { key: 'T', label: 'Technological', val: data.technological, color: 'blue' },
    { key: 'L', label: 'Legal', val: data.legal, color: 'amber' },
    { key: 'E', label: 'Environmental', val: data.environmental, color: 'green' },
  ];
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {items.map((it, i) => {
        const c = C[it.color];
        return (
          <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-2">
            <div className="flex items-center gap-1 mb-0.5">
              <span className={`w-4 h-4 rounded flex items-center justify-center text-[9px] font-bold ${c.bg100} ${c.text}`}>{it.key}</span>
              <span className="text-[10px] font-bold text-gray-700">{it.label}</span>
            </div>
            <p className="text-[10px] text-gray-600 leading-tight">{it.val}</p>
          </div>
        );
      })}
    </div>
  );
}

// ── PORTER ─────────────────────────────────────────────
function PorterMockup({ data }) {
  const forces = [
    { label: 'Rivalry', val: data.rivalry, color: 'red', pos: 'top-0 left-1/2 -translate-x-1/2' },
    { label: 'New Entrants', val: data.newEntrants, color: 'amber', pos: 'top-1/3 left-0 -translate-y-1/2' },
    { label: 'Substitutes', val: data.substitutes, color: 'blue', pos: 'top-1/3 right-0 -translate-y-1/2' },
    { label: 'Supplier Power', val: data.supplierPower, color: 'purple', pos: 'bottom-0 left-1/4' },
    { label: 'Buyer Power', val: data.buyerPower, color: 'indigo', pos: 'bottom-0 right-1/4' },
  ];
  return (
    <div className="relative h-48">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
          <span className="text-[9px] font-bold text-white text-center leading-tight">5 Forces</span>
        </div>
      </div>
      {forces.map((f, i) => {
        const c = C[f.color];
        return (
          <div key={i} className={`absolute ${f.pos} w-28`}>
            <div className={`rounded-lg border p-1.5 ${c.bg} ${c.border}`}>
              <div className={`text-[10px] font-bold ${c.text}`}>{f.label}</div>
              <p className="text-[9px] text-gray-600 leading-tight">{f.val}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── OKRs ────────────────────────────────────────────────
function OkrsMockup({ data }) {
  return (
    <div className="space-y-2">
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-2.5">
        <span className="text-[10px] font-bold text-indigo-600">OBJECTIVE</span>
        <p className="text-xs font-semibold text-indigo-800">{data.objective}</p>
      </div>
      {data.keyResults.map((kr, i) => {
        const pct = Math.round((kr.current / kr.target) * 100);
        return (
          <div key={i} className="border border-gray-200 rounded-lg p-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-medium text-gray-700">{kr.kr}</span>
              <span className="text-[10px] text-gray-500">{kr.current}{kr.unit} → {kr.target}{kr.unit}</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${Math.min(pct, 100)}%` }} />
            </div>
            <span className="text-[9px] text-gray-400">{pct}%</span>
          </div>
        );
      })}
    </div>
  );
}

// ── VRIO ────────────────────────────────────────────────
function VrioMockup({ data }) {
  const cell = (val) => {
    if (val === true) return <span className="text-green-600 font-bold text-xs">✓</span>;
    if (val === false) return <span className="text-red-500 font-bold text-xs">✗</span>;
    return <span className="text-amber-600 font-bold text-[10px]">~</span>;
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[10px]">
        <thead>
          <tr className="text-gray-400 border-b border-gray-200">
            <th className="text-left py-1 font-medium">Resource</th>
            <th className="text-center font-medium">V</th>
            <th className="text-center font-medium">R</th>
            <th className="text-center font-medium">I</th>
            <th className="text-center font-medium">O</th>
            <th className="text-left pl-1 font-medium">Outcome</th>
          </tr>
        </thead>
        <tbody>
          {data.resources.map((r, i) => (
            <tr key={i} className="border-b border-gray-100">
              <td className="py-1 pr-1 font-medium text-gray-700">{r.name}</td>
              <td className="text-center">{cell(r.V)}</td>
              <td className="text-center">{cell(r.R)}</td>
              <td className="text-center">{cell(r.I)}</td>
              <td className="text-center">{cell(r.O)}</td>
              <td className="pl-1 text-gray-600">{r.outcome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── EISENHOWER ──────────────────────────────────────────
function EisenhowerMockup({ data }) {
  return (
    <div className="grid grid-cols-2 gap-1.5">
      <Section label="Do (Urgent + Important)" color="red" items={data.do} />
      <Section label="Schedule (Important)" color="blue" items={data.schedule} />
      <Section label="Delegate (Urgent)" color="amber" items={data.delegate} />
      <Section label="Eliminate" color="gray" items={data.eliminate} />
    </div>
  );
}

// ── MoSCoW ─────────────────────────────────────────────
function MoscowMockup({ data }) {
  return (
    <div className="space-y-1.5">
      <Section label="Must Have" color="red" items={data.must} />
      <Section label="Should Have" color="amber" items={data.should} />
      <Section label="Could Have" color="blue" items={data.could} />
      <Section label="Won't Have" color="gray" items={data.wont} />
    </div>
  );
}

// ── 12-WEEK YEAR ───────────────────────────────────────
function TwelveWeekMockup({ data }) {
  return (
    <div className="space-y-0.5">
      {data.weeks.map((w) => (
        <div key={w.week} className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
            <span className="text-[9px] font-bold text-indigo-700">W{w.week}</span>
          </div>
          <div className="flex-1 border-l-2 border-indigo-200 pl-2 py-0.5">
            <p className="text-[11px] text-gray-700 font-medium">{w.milestone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── TIME BLOCKING ───────────────────────────────────────
function TimeBlockingMockup({ data }) {
  const typeColors = {
    deep: 'bg-purple-100 text-purple-700',
    meeting: 'bg-blue-100 text-blue-700',
    review: 'bg-emerald-100 text-emerald-700',
    client: 'bg-amber-100 text-amber-700',
    admin: 'bg-gray-100 text-gray-600',
  };
  return (
    <div className="space-y-0.5">
      {data.blocks.map((b, i) => (
        <div key={i} className="flex items-stretch gap-1.5">
          <span className="text-[9px] text-gray-400 font-mono w-16 shrink-0 pt-0.5">{b.time}</span>
          <div className={`flex-1 rounded px-2 py-1 ${typeColors[b.type] || 'bg-gray-100'}`}>
            <span className="text-[11px] font-medium">{b.activity}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── PARETO ─────────────────────────────────────────────
function ParetoMockup({ data }) {
  const max = Math.max(...data.items.map((i) => i.value));
  return (
    <div className="space-y-1.5">
      <div className="flex items-end gap-1.5 h-24">
        {data.items.map((it, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-end">
            <span className="text-[9px] text-gray-500 mb-0.5">${it.value}M</span>
            <div className={`w-full rounded-t ${i < 2 ? 'bg-indigo-500' : 'bg-gray-300'}`} style={{ height: `${(it.value / max) * 80}px` }} />
            <span className="text-[8px] text-gray-400 mt-0.5 text-center leading-tight">{it.name}</span>
          </div>
        ))}
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded px-2 py-1">
        <p className="text-[10px] font-medium text-amber-700">{data.insight}</p>
      </div>
    </div>
  );
}

// ── GOLDEN TRIANGLE ────────────────────────────────────
function GoldenTriangleMockup({ data }) {
  const items = [
    { ...data.value, c: C.blue },
    { ...data.cost, c: C.emerald },
    { ...data.differentiation, c: C.purple },
  ];
  return (
    <div className="space-y-1.5">
      {items.map((it, i) => (
        <div key={i} className={`rounded-lg border p-2.5 ${it.c.bg} ${it.c.border}`}>
          <div className="flex items-center justify-between mb-0.5">
            <span className={`text-[11px] font-bold ${it.c.text}`}>{it.label}</span>
            <Pill className={`${it.c.bg100} ${it.c.text800}`}>{it.metric}</Pill>
          </div>
          <p className="text-[11px] text-gray-700">{it.detail}</p>
        </div>
      ))}
    </div>
  );
}

// ── MECE ────────────────────────────────────────────────
function MeceMockup({ data }) {
  return (
    <div className="space-y-1">
      <div className="bg-gray-800 text-white rounded-lg px-3 py-1.5 text-center">
        <span className="text-xs font-bold">{data.root}</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {data.branches.map((b, i) => (
          <div key={i} className="rounded-lg border border-indigo-200 bg-indigo-50 p-2">
            <div className="text-[10px] font-bold text-indigo-700 mb-0.5">{b.name}</div>
            <div className="text-[10px] font-medium text-indigo-600 mb-1">{b.value}</div>
            {b.children.map((c, j) => (
              <div key={j} className="text-[9px] text-gray-600 pl-1.5 border-l border-indigo-200 mb-0.5">{c}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const RENDERERS = {
  swot: SwotMockup,
  fiveWhys: FiveWhysMockup,
  valueDisciplines: ValueDisciplinesMockup,
  projectTriangle: ProjectTriangleMockup,
  threeCs: ThreeCsMockup,
  pestle: PestleMockup,
  porter: PorterMockup,
  okrs: OkrsMockup,
  vrio: VrioMockup,
  eisenhower: EisenhowerMockup,
  moscow: MoscowMockup,
  twelveWeek: TwelveWeekMockup,
  timeBlocking: TimeBlockingMockup,
  pareto: ParetoMockup,
  goldenTriangle: GoldenTriangleMockup,
  mece: MeceMockup,
};

export default function FrameworkMockup({ type, data }) {
  const Renderer = RENDERERS[type];
  if (!Renderer) return null;
  return <Renderer data={data} />;
}