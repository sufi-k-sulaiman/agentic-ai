import {
  Grid3x3, GitBranch, Trophy, Triangle, Circle, Globe, Layers,
  Target, Gem, ListChecks, Filter, CalendarDays, Clock, BarChart3,
  Star, Workflow,
} from 'lucide-react';

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'reviewing', label: 'Reviewing' },
  { id: 'building', label: 'Building' },
  { id: 'designing', label: 'Designing' },
  { id: 'analysing', label: 'Analysing' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'solutions', label: 'Solutions' },
];

export const CATEGORY_STYLES = {
  reviewing: 'bg-blue-100 text-blue-700',
  building: 'bg-orange-100 text-orange-700',
  designing: 'bg-purple-100 text-purple-700',
  analysing: 'bg-emerald-100 text-emerald-700',
  architecture: 'bg-indigo-100 text-indigo-700',
  solutions: 'bg-amber-100 text-amber-700',
};

export const FRAMEWORKS = [
  // ── REVIEWING ──────────────────────────────────────────────
  {
    id: 'swot',
    name: 'SWOT Analysis',
    category: 'reviewing',
    tagline: 'Strategic position review from CRM + ERP data',
    icon: Grid3x3,
    mockupType: 'swot',
    mockupData: {
      strengths: ['94% customer retention', '$4.2M ARR · 31% YoY', 'NPS score: 67', '20yr domain expertise'],
      weaknesses: ['23% SMB churn rate', 'Legacy ERP migration debt', 'Single-region deployment'],
      opportunities: ['APAC market +31% growth', 'AI agent automation demand', 'Mid-market expansion'],
      threats: ['2 new competitors funded', 'Supplier costs +8%', 'Data-privacy regulation tightening'],
    },
    actions: [
      {
        label: 'Run SWOT Review',
        steps: [
          { title: 'Pulling CRM retention data', detail: '94% overall · 23% SMB churn · NPS 67' },
          { title: 'Pulling ERP financials', detail: '$4.2M ARR · 31% YoY · 72% gross margin' },
          { title: 'Scanning Web market signals', detail: 'APAC +31% · 2 new competitors · supplier costs +8%' },
          { title: 'Cross-referencing support tickets', detail: '67% of tickets are "how to export"' },
          { title: 'Synthesizing 2×2', detail: '4 strengths · 3 weaknesses · 4 opportunities · 3 threats' },
        ],
      },
    ],
    writeup:
      'Sufi pulls CRM retention rates and ERP margin data to build a live SWOT each quarter. The 2×2 maps where 94% retention and $4.2M ARR collide with a 23% SMB churn rate and two new market entrants — turning a static slide into a decision tool.',
  },
  {
    id: 'vrio',
    name: 'VRIO Framework',
    category: 'reviewing',
    tagline: 'Resource & capability assessment from ERP register',
    icon: Gem,
    mockupType: 'vrio',
    mockupData: {
      resources: [
        { name: 'AI Agent Platform', V: true, R: true, I: 'partial', O: true, outcome: 'Competitive Advantage' },
        { name: '20yr Domain Expertise', V: true, R: true, I: true, O: true, outcome: 'Sustained Advantage' },
        { name: 'Cloud Infrastructure', V: true, R: false, I: false, O: true, outcome: 'Competitive Parity' },
        { name: 'CRM Data (1.2M records)', V: true, R: true, I: 'partial', O: true, outcome: 'Temporary Advantage' },
      ],
    },
    actions: [
      {
        label: 'Run VRIO Assessment',
        steps: [
          { title: 'Loading ERP resource register', detail: '4 strategic resources identified' },
          { title: 'Testing Valuable', detail: 'All 4 pass — each generates revenue' },
          { title: 'Testing Rare', detail: 'AI platform + expertise pass · cloud infra fails' },
          { title: 'Testing Inimitable', detail: 'Expertise is inimitable · AI platform partial' },
          { title: 'Testing Organized', detail: 'All 4 supported by existing processes' },
          { title: 'Result', detail: '1 sustained · 1 competitive · 1 temporary · 1 parity' },
        ],
      },
    ],
    writeup:
      'Each quarter Sufi runs VRIO against the ERP resource register and CRM capability inventory to test whether the AI agent suite, the data platform, and the engineering bench create sustained advantage. Resources that fail the Rare or Inimitable test get re-architected before competitors close the gap.',
  },
  {
    id: 'okrs',
    name: 'OKRs',
    category: 'reviewing',
    tagline: 'Objective & key results from CRM pipeline + ERP revenue',
    icon: Target,
    mockupType: 'okrs',
    mockupData: {
      objective: 'Grow enterprise revenue from $4.2M to $6M ARR',
      keyResults: [
        { kr: 'Net new enterprise accounts', current: 120, target: 200, unit: '' },
        { kr: 'Gross retention rate', current: 94, target: 97, unit: '%' },
        { kr: 'Average contract value', current: 35, target: 50, unit: 'K/yr' },
      ],
    },
    actions: [
      {
        label: 'Run OKR Review',
        steps: [
          { title: 'Loading board objective', detail: 'Grow enterprise revenue to $6M ARR' },
          { title: 'Pulling CRM pipeline', detail: '120 accounts → target 200 (+80 needed)' },
          { title: 'Pulling ERP retention', detail: '94% → target 97% (+3 points)' },
          { title: 'Pulling ACV data', detail: '$35K → target $50K (+$15K)' },
          { title: 'Scoring progress', detail: 'KR1: 43% · KR2: 50% · KR3: 30% — behind on ACV' },
        ],
      },
    ],
    writeup:
      'Sufi cascades OKRs from board objectives to weekly engineering tasks, connecting CRM pipeline targets and ERP revenue figures to individual key results. Every key result carries a live data feed — $4.2M → $6M ARR, 120 → 200 accounts — so progress is never a guess.',
  },

  // ── BUILDING ──────────────────────────────────────────────
  {
    id: 'projectTriangle',
    name: 'Project Triangle',
    category: 'building',
    tagline: 'Scope · Time · Cost trade-off from ERP budget data',
    icon: Triangle,
    mockupType: 'projectTriangle',
    mockupData: {
      scope: 'Full platform redesign — 47 features',
      time: '6 months (Sept 15 — fixed)',
      cost: '$1.2M budget',
      constraint: 'Time is fixed. Scope and cost must flex.',
    },
    actions: [
      {
        label: 'Run Trade-off Analysis',
        steps: [
          { title: 'Loading ERP budget', detail: '$1.2M allocated for redesign' },
          { title: 'Loading CRM launch commitment', detail: 'Sept 15 — marketing locked, non-negotiable' },
          { title: 'Loading scope estimate', detail: '47 features requested → 8 months needed' },
          { title: 'Conflict detected', detail: '47 features need 8 months, only 6 available' },
          { title: 'Trade-off decision', detail: 'Cut scope to 28 features · add $200K for 2 contractors' },
        ],
      },
    ],
    writeup:
      'When scoping a platform redesign like Lorex, Sufi uses the Project Triangle to make the scope-time-cost trade-off explicit with ERP budget data and CRM launch-date commitments. Picking one fixed side forces the other two to flex, preventing the "all three are non-negotiable" failure mode.',
  },
  {
    id: 'moscow',
    name: 'MoSCoW Method',
    category: 'building',
    tagline: 'Feature backlog prioritization from CRM + ERP impact',
    icon: Filter,
    mockupType: 'moscow',
    mockupData: {
      must: ['SSO integration', 'API v2 migration', 'GDPR compliance layer'],
      should: ['Dashboard redesign', 'Mobile responsive', 'Bulk export'],
      could: ['AI-powered insights', 'Dark mode', 'Webhooks'],
      wont: ['Blockchain ledger', 'VR onboarding', 'Crypto payments'],
    },
    actions: [
      {
        label: 'Prioritize Backlog',
        steps: [
          { title: 'Loading CRM feature requests', detail: '47 items from 120 accounts' },
          { title: 'Scoring ERP revenue impact', detail: 'Per-feature revenue-attribution analysis' },
          { title: 'Scoring Web conversion impact', detail: 'A/B test data + funnel analysis' },
          { title: 'Sorting into buckets', detail: '6 Must · 9 Should · 14 Could · 18 Won\'t' },
          { title: 'Sprint scope locked', detail: '6 Must + 4 Should = 10 features this sprint' },
        ],
      },
    ],
    writeup:
      'Sufi prioritizes the CRM-backed feature backlog into Must / Should / Could / Won\'t using ERP revenue impact and Web conversion data. Features that don\'t move a CRM metric or an ERP line item get deferred — keeping the sprint focused on what the data says matters.',
  },
  {
    id: 'eisenhower',
    name: 'Eisenhower Matrix',
    category: 'building',
    tagline: 'Daily task sorting from Tasks module + CRM SLAs',
    icon: ListChecks,
    mockupType: 'eisenhower',
    mockupData: {
      do: ['Production outage — checkout down', 'Enterprise client demo in 2h', 'Security patch (CVE-2026)'],
      schedule: ['Architecture review for v2', 'Q4 OKR planning session', 'Hire senior engineer'],
      delegate: ['Weekly status meeting', 'Sprint demo prep', 'Invoice approval'],
      eliminate: ['Email backlog cleanup', 'Legacy doc review', 'Non-essential Slack threads'],
    },
    actions: [
      {
        label: 'Sort Today\'s Queue',
        steps: [
          { title: 'Loading Tasks module', detail: '23 open items across 4 projects' },
          { title: 'Tagging urgency', detail: 'CRM SLA deadlines applied — 7 urgent' },
          { title: 'Tagging importance', detail: 'ERP revenue impact scored — 9 important' },
          { title: 'Quadrant 1 (Do Now)', detail: '3 items: outage, demo, security patch' },
          { title: 'Quadrant 2 (Schedule)', detail: '5 items: architecture, OKRs, hiring' },
          { title: 'Quadrant 3 (Delegate)', detail: '3 items: meetings, demos, invoices' },
        ],
      },
    ],
    writeup:
      'Sufi maps the daily task queue from the Tasks module onto the Eisenhower matrix, sorting by ERP revenue impact (important) and CRM SLA deadlines (urgent). Production outages land in Do-Now; architecture reviews sit in Schedule; status meetings get delegated; email cleanup gets dropped.',
  },
  {
    id: 'timeBlocking',
    name: 'Time Blocking',
    category: 'building',
    tagline: 'Calendar built from ERP deadlines + CRM meetings',
    icon: Clock,
    mockupType: 'timeBlocking',
    mockupData: {
      blocks: [
        { time: '8:00–10:00', activity: 'Deep work: Architecture design', type: 'deep' },
        { time: '10:00–10:30', activity: 'Engineering standup', type: 'meeting' },
        { time: '10:30–11:00', activity: 'Code review batch', type: 'review' },
        { time: '11:00–12:00', activity: 'Enterprise client calls', type: 'client' },
        { time: '13:00–14:00', activity: '1:1s with team leads', type: 'meeting' },
        { time: '14:00–16:00', activity: 'Deep work: Feature build', type: 'deep' },
        { time: '16:00–17:00', activity: 'Inbox + admin (time-boxed)', type: 'admin' },
      ],
    },
    actions: [
      {
        label: 'Build Today\'s Blocks',
        steps: [
          { title: 'Loading calendar + ERP deadlines', detail: '2 hard deadlines today: API spec, vendor review' },
          { title: 'Loading CRM meeting requests', detail: '3 client calls — 2 accepted, 1 deferred' },
          { title: 'Allocating deep-work blocks', detail: '8–10 and 14–16 reserved for architecture' },
          { title: 'Allocating meeting blocks', detail: '10–11 standup + reviews · 11–12 client calls' },
          { title: 'Time-boxing admin', detail: '16–17 inbox capped at 1 hour — no overflow' },
        ],
      },
    ],
    writeup:
      'Sufi blocks his calendar using ERP project deadlines and CRM client meeting schedules — deep-work architecture from 8–10, standups and reviews 10–11, client calls 11–12. Every block ties to a deliverable, not a time-filler, turning the calendar into an execution engine.',
  },

  // ── DESIGNING ─────────────────────────────────────────────
  {
    id: 'mece',
    name: 'MECE Principle',
    category: 'designing',
    tagline: 'Mutually Exclusive, Collectively Exhaustive structuring',
    icon: Workflow,
    mockupType: 'mece',
    mockupData: {
      root: 'Total Revenue: $4.2M',
      branches: [
        { name: 'Enterprise (120 accts)', value: '$3.4M · 81%', children: ['SaaS: $2.8M', 'Services: $0.6M'] },
        { name: 'SMB (80 accts)', value: '$0.5M · 12%', children: ['SaaS: $0.4M', 'Services: $0.1M'] },
        { name: 'Startup (140 accts)', value: '$0.3M · 7%', children: ['SaaS: $0.3M', 'Services: $0.0M'] },
      ],
    },
    actions: [
      {
        label: 'Structure Revenue Analysis',
        steps: [
          { title: 'Loading ERP revenue', detail: '$4.2M total across 340 accounts' },
          { title: 'Segmenting by CRM account tier', detail: 'Enterprise / SMB / Startup' },
          { title: 'Checking mutual exclusivity', detail: 'No account in 2 tiers ✓' },
          { title: 'Checking collective exhaustion', detail: '340 accounts = 100% of revenue ✓' },
          { title: 'Sub-segmenting each tier', detail: 'SaaS vs Services (MECE again within each)' },
        ],
      },
    ],
    writeup:
      'Sufi structures every new analysis MECE — mutually exclusive, collectively exhaustive — using CRM account segments and ERP revenue lines. Enterprise, SMB, and Startup tiers never overlap and cover 100% of revenue, so no customer falls through the cracks and no dollar gets double-counted.',
  },
  {
    id: 'valueDisciplines',
    name: 'Value Disciplines',
    category: 'designing',
    tagline: 'Positioning audit from ERP cost + CRM NPS data',
    icon: Trophy,
    mockupType: 'valueDisciplines',
    mockupData: {
      disciplines: [
        { name: 'Operational Excellence', focus: 'Low cost, high reliability', metric: '99.9% uptime · $0.03/txn', selected: false },
        { name: 'Product Leadership', focus: 'Innovation, speed-to-market', metric: '14-day release cycle', selected: true },
        { name: 'Customer Intimacy', focus: 'Deep relationships, service', metric: 'NPS 67 · 94% retention', selected: false },
      ],
    },
    actions: [
      {
        label: 'Run Positioning Audit',
        steps: [
          { title: 'Loading ERP cost-per-transaction', detail: '$0.03/txn — top quartile in industry' },
          { title: 'Loading CRM NPS', detail: '67 — above industry average of 41' },
          { title: 'Loading release cadence', detail: '14-day cycle — fastest in market' },
          { title: 'Scoring disciplines', detail: 'Ops: 7/10 · Product: 9/10 · Customer: 6/10' },
          { title: 'Recommendation', detail: 'Double down on Product Leadership — already winning' },
        ],
      },
    ],
    writeup:
      'Sufi positions each product against the three value disciplines using ERP cost-per-transaction data and CRM NPS scores. Picking one discipline to excel at — Product Leadership in this case — focuses engineering investment where the data says the company already wins.',
  },

  // ── ANALYSING ─────────────────────────────────────────────
  {
    id: 'fiveWhys',
    name: '5 Whys',
    category: 'analysing',
    tagline: 'Root cause analysis from ERP logs + CRM tickets',
    icon: GitBranch,
    mockupType: 'fiveWhys',
    mockupData: {
      problem: 'Checkout conversion dropped 12% last sprint',
      whys: [
        { q: 'Why did conversion drop?', a: 'Cart page load time increased from 1.2s to 3.8s' },
        { q: 'Why did load time increase?', a: 'Product image API payload doubled in size' },
        { q: 'Why did payload double?', a: 'ERP started sending uncompressed 4K images' },
        { q: 'Why uncompressed images?', a: 'Image optimization pipeline was skipped in CI' },
        { q: 'Why was it skipped?', a: 'CI step had no test gate for image size' },
      ],
      rootCause: 'Missing CI image-size test gate — add automated check to block PRs',
    },
    actions: [
      {
        label: 'Run Root Cause Analysis',
        steps: [
          { title: 'Loading Web analytics', detail: 'Checkout conversion -12% vs last sprint' },
          { title: 'Why 1: Page load time', detail: 'Cart page 1.2s → 3.8s (ERP log data)' },
          { title: 'Why 2: Image API payload', detail: 'Payload doubled — 2.1MB → 4.4MB per call' },
          { title: 'Why 3: Uncompressed images', detail: 'ERP config sending raw 4K images' },
          { title: 'Why 4: Optimization skipped', detail: 'CI pipeline step disabled by bad merge' },
          { title: 'Root cause found', detail: 'No CI test gate for image size → add automated check' },
        ],
      },
    ],
    writeup:
      'When checkout conversion drops on the Web platform, Sufi runs the 5 Whys against ERP log data and CRM ticket trails to move past symptoms to root cause. Each "why" pulls a different data source — Web analytics, ERP inventory, CRM complaints — until the chain lands on an actionable fix.',
  },
  {
    id: 'pareto',
    name: 'Pareto Principle',
    category: 'analysing',
    tagline: '80/20 revenue & ticket analysis from ERP + CRM',
    icon: BarChart3,
    mockupType: 'pareto',
    mockupData: {
      items: [
        { name: 'Top 5', value: 3.4 },
        { name: 'Next 15', value: 0.5 },
        { name: 'Mid-tier (40)', value: 0.2 },
        { name: 'SMB (80)', value: 0.1 },
        { name: 'Startup (140)', value: 0.05 },
      ],
      total: 4.2,
      insight: '20% of accounts = 81% of revenue ($3.4M of $4.2M)',
    },
    actions: [
      {
        label: 'Run 80/20 Analysis',
        steps: [
          { title: 'Loading ERP revenue by account', detail: '340 accounts, $4.2M total' },
          { title: 'Sorting descending', detail: 'Top 5 accounts = $3.4M' },
          { title: 'Cumulative percentage', detail: 'Top 5 = 81% of total revenue' },
          { title: 'Loading CRM tickets by module', detail: '12 modules, 2,840 tickets' },
          { title: 'Ticket Pareto', detail: 'Top 3 modules = 78% of tickets → focus there' },
        ],
      },
    ],
    writeup:
      'Sufi applies the 80/20 rule to ERP revenue data and CRM support tickets: 80% of $4.2M ARR comes from 20% of accounts, and 80% of tickets come from 20% of modules. Concentrating engineering effort on that 20% doubles impact without doubling cost.',
  },
  {
    id: 'threeCs',
    name: "3C's Model",
    category: 'analysing',
    tagline: 'Customer · Company · Competitor from CRM + Web',
    icon: Circle,
    mockupType: 'threeCs',
    mockupData: {
      customer: { insight: '67% of tickets ask for self-serve export', data: 'CRM: 120 enterprise accounts' },
      company: { insight: 'AI analytics engine + 8 engineers available', data: 'ERP: $1.2M budget allocated' },
      competitor: { insight: 'Incumbent lacks AI, charges $50K/yr, NPS 41', data: 'Web: no API, no self-serve' },
    },
    actions: [
      {
        label: 'Run Market Analysis',
        steps: [
          { title: 'Loading CRM customer profiles', detail: '120 enterprise accounts analyzed' },
          { title: 'Customer insight', detail: '67% of support tickets ask for self-serve export' },
          { title: 'Loading ERP internal capability', detail: '8 engineers · AI platform ready · $1.2M budget' },
          { title: 'Loading Web competitor analysis', detail: 'Incumbent NPS 41 · no API · $50K/yr' },
          { title: 'Strategy', detail: 'Build self-serve analytics — customer wants, we can, competitor lacks' },
        ],
      },
    ],
    writeup:
      'Sufi frames every market entry with the 3C\'s — Customer, Company, Competitor — pulling CRM customer profiles, ERP internal capability data, and Web competitor analysis. The triangle ensures strategy isn\'t just "what we want" but what the customer needs, what we can deliver, and what competitors allow.',
  },

  // ── ARCHITECTURE ──────────────────────────────────────────
  {
    id: 'pestle',
    name: 'PESTLE Analysis',
    category: 'architecture',
    tagline: 'Macro environment scan for platform architecture',
    icon: Globe,
    mockupType: 'pestle',
    mockupData: {
      political: 'GDPR + CCPA compliance required for EU/CA expansion',
      economic: '18% of revenue exposed to CAD/EUR FX volatility',
      social: 'Remote-first adoption up 240% since 2023',
      technological: 'LLM costs down 90% — AI agents viable at scale',
      legal: 'SOC 2 Type II audit due Q3',
      environmental: 'Carbon-neutral hosting target by 2026',
    },
    actions: [
      {
        label: 'Run Macro Scan',
        steps: [
          { title: 'Political', detail: 'GDPR + CCPA required for EU/CA expansion' },
          { title: 'Economic', detail: '18% revenue exposed to CAD/EUR FX' },
          { title: 'Social', detail: 'Remote-first adoption up 240% since 2023' },
          { title: 'Technological', detail: 'LLM costs -90% — AI agents viable at scale' },
          { title: 'Legal', detail: 'SOC 2 Type II audit due Q3' },
          { title: 'Environmental', detail: 'Carbon-neutral hosting target by 2026' },
        ],
      },
    ],
    writeup:
      'Sufi architects multi-region platform strategy through a PESTLE scan — Political data-privacy laws, Economic FX exposure, Social adoption trends, Technological AI shifts, Legal compliance, Environmental carbon targets. Each dimension pulls from a different data feed, ensuring the architecture is future-proofed against macro forces.',
  },
  {
    id: 'porter',
    name: "Porter's Five Forces",
    category: 'architecture',
    tagline: 'Industry structure from CRM buyer + ERP supplier data',
    icon: Layers,
    mockupType: 'porter',
    mockupData: {
      rivalry: 'High — 4 direct competitors, 2 well-funded',
      newEntrants: 'Medium — high capital barrier, but AI lowers it',
      substitutes: 'Low — no open-source equivalent at this depth',
      supplierPower: 'Medium — cloud provider lock-in risk',
      buyerPower: 'High — enterprise buyers negotiate hard',
    },
    actions: [
      {
        label: 'Run Industry Analysis',
        steps: [
          { title: 'Rivalry', detail: 'High — 4 competitors, 2 well-funded' },
          { title: 'New Entrants', detail: 'Medium — capital barrier high, AI lowers it' },
          { title: 'Substitutes', detail: 'Low — no open-source equivalent' },
          { title: 'Supplier Power', detail: 'Medium — cloud provider lock-in risk' },
          { title: 'Buyer Power', detail: 'High — enterprise buyers negotiate hard' },
          { title: 'Architecture strategy', detail: 'Differentiate — high rivalry + high buyer power demands unique value' },
        ],
      },
    ],
    writeup:
      'Before committing to a platform architecture, Sufi maps Porter\'s Five Forces using CRM buyer-power data, ERP supplier-cost trends, and Web competitor analysis. The force diagram dictates whether to build for differentiation (high rivalry) or for cost efficiency (high buyer power).',
  },

  // ── SOLUTIONS ─────────────────────────────────────────────
  {
    id: 'twelveWeek',
    name: '12-Week Year',
    category: 'solutions',
    tagline: 'Compressed execution cycle from ERP milestones + CRM pipeline',
    icon: CalendarDays,
    mockupType: 'twelveWeek',
    mockupData: {
      weeks: [
        { week: 1, milestone: 'Architecture spec finalized' },
        { week: 2, milestone: 'API v2 schema + auth layer' },
        { week: 4, milestone: 'API v2 in staging' },
        { week: 6, milestone: 'Beta with 5 enterprise accounts' },
        { week: 8, milestone: 'Dashboard redesign shipped' },
        { week: 10, milestone: 'Load test + security audit' },
        { week: 12, milestone: 'GA launch — 200 accounts migrated' },
      ],
    },
    actions: [
      {
        label: 'Build 12-Week Plan',
        steps: [
          { title: 'Loading annual goal', detail: '$6M ARR by year-end (from $4.2M)' },
          { title: 'Compressing to 12-week cycle', detail: 'Target: +$1.8M in 12 weeks' },
          { title: 'Week 1–2', detail: 'API v2 schema + auth layer' },
          { title: 'Week 4–8', detail: 'Staging → beta with 5 accounts → dashboard redesign' },
          { title: 'Week 10–12', detail: 'Load test, security audit, GA launch (200 accounts)' },
        ],
      },
    ],
    writeup:
      'Sufi compresses annual goals into 12-week execution cycles, pulling ERP milestone data and CRM pipeline targets into weekly scorecards. Each week has a tangible deliverable tied to a CRM or ERP metric, so "Q3 launch" becomes "Week 4: API v2 in staging, Week 8: beta with 5 accounts, Week 12: GA."',
  },
  {
    id: 'goldenTriangle',
    name: 'Golden Triangle',
    category: 'solutions',
    tagline: 'Value · Cost · Differentiation balance from ERP + CRM',
    icon: Star,
    mockupType: 'goldenTriangle',
    mockupData: {
      value: { label: 'Customer Value', detail: 'AI insights save 12h/week per analyst', metric: 'NPS 67' },
      cost: { label: 'Sustainable Cost', detail: 'LLM inference at $0.003/query', metric: '72% margin' },
      differentiation: { label: 'Defensible Edge', detail: 'Proprietary agent framework + 20yr data', metric: 'No equivalent' },
    },
    actions: [
      {
        label: 'Balance Solution',
        steps: [
          { title: 'Loading ERP unit economics', detail: '$0.003/query · 72% gross margin' },
          { title: 'Loading CRM customer value', detail: 'AI saves 12h/week per analyst — NPS 67' },
          { title: 'Loading differentiation audit', detail: 'Proprietary agent framework · no market equivalent' },
          { title: 'Checking balance', detail: 'Value ✓ · Cost ✓ · Differentiation ✓' },
          { title: 'Solution locked', detail: 'Ship AI insights at $0.003/query with proprietary framework' },
        ],
      },
    ],
    writeup:
      'Sufi balances the Golden Triangle — Value, Cost, Differentiation — using ERP unit economics and CRM customer-value scores. The triangle ensures every solution delivers customer value at a sustainable cost with a defensible differentiator — not just "cheap" or just "feature-rich" but the right balance of all three.',
  },
];