import type { BootcampModule } from '@/types/programme';

export const BOOTCAMP_MODULES: BootcampModule[] = [
  {
    id: 'weeks-1-2',
    weeks: 'Weeks 1–2',
    title: 'Business Model Validation & Value Chain Optimisation',
    summary:
      'Diagnostic review of enterprise unit economics, supply-chain bottlenecks, and commercial scalability.',
    topics: [
      'Agribusiness business model validation and revenue-driver analysis',
      'Value chain mapping and post-harvest efficiency optimisation',
      'Governance and operational readiness for institutional growth',
    ],
  },
  {
    id: 'weeks-3-4',
    weeks: 'Weeks 3–4',
    title: 'Financial Modelling, Bankable Business Plans & Fundraising Structures',
    summary:
      'Building transparent financial projections, capital-allocation plans, and appropriate debt/equity structures.',
    topics: [
      'Multi-year agricultural financial modelling and cash-flow sensitivity',
      'Drafting bankable business plans aligned with DFI and impact-investor expectations',
      'Understanding equity, debt, blended finance, and fundraising instruments',
    ],
  },
  {
    id: 'weeks-5-6',
    weeks: 'Weeks 5–6',
    title: 'Investor Pitch Development, Due Diligence Preparation & Storytelling',
    summary:
      'Preparing investor-grade pitch decks, data-room checklists, and credible commercial narratives.',
    topics: [
      'Structuring compelling, data-backed investor pitch presentations',
      'Due diligence readiness: legal, financial, governance, and impact documentation',
      'Founder storytelling and Q&A preparation for institutional panels',
    ],
  },
  {
    id: 'weeks-7-8',
    weeks: 'Weeks 7–8',
    title: 'Market Access Strategies, AGOA, Regulatory Navigation & Digital Marketing',
    summary:
      'Navigating regional and transatlantic export corridors, compliance, and modern digital market channels.',
    topics: [
      'Cross-border market access strategies (including AfCFTA and AGOA-related training)',
      'Export standards, sanitary/phytosanitary compliance, and regulatory navigation',
      'Digital marketing and B2B buyer acquisition for agribusinesses',
    ],
  },
];

export const BOOTCAMP_CONTENT = {
  eyebrow: 'Phase 2 — Capacity Building',
  title: 'Develop the Skills to Become Investment-Ready.',
  description:
    'A planned eight-week structured virtual bootcamp equipping 400 selected African agribusiness SMEs with commercial, financial, and export readiness.',
  formatDetails: [
    {
      label: 'Duration & Format',
      value: '8 weeks, fully virtual structured cohorts',
    },
    {
      label: 'Target Cohort',
      value: '400 selected African agribusiness SMEs',
    },
    {
      label: 'Participation Fee',
      value: 'Paid programme — fee, schedule, and payment provider to be announced',
    },
    {
      label: 'Mentorship & Co-Development',
      value:
        'Planned co-development with Morrison Group and tentative academic partners (Penn State University, SoongHill University)',
    },
  ],
} as const;
