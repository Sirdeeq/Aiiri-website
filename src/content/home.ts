export const HOME_CONTENT = {
  hero: {
    eyebrow: 'AFRICAN AGRIBUSINESS INVESTMENT-READINESS & RECOGNITION INITIATIVE',
    headline: 'Connecting Capital. Recognising Leadership. Transforming Agriculture.',
    supporting:
      'AAIRI is a multi-phase initiative designed to strengthen African agribusiness SMEs, prepare enterprises for investment, connect them with relevant global investors and recognise leaders championing agricultural transformation.',
    primaryCta: { label: 'Explore the Programme', to: '/programme' },
    secondaryCta: { label: 'Register Your Interest', to: '/applications' },
  },
  glanceStats: [
    {
      value: '400',
      label: 'Target African Agribusiness SMEs',
      note: 'Planned continent-wide intake',
    },
    {
      value: '8 Weeks',
      label: 'Online Capacity-Building Bootcamp',
      note: 'Planned structured virtual training',
    },
    {
      value: '2 Forums',
      label: 'International Investor Forums',
      note: 'Planned in Botswana & Toronto',
    },
    {
      value: '1 Week',
      label: 'Intensive Onsite Bootcamp',
      note: 'Planned in Botswana for shortlisted SMEs',
    },
  ],
  about: {
    eyebrow: 'About AAIRI',
    headline: 'Building the Bridge Between African Agribusiness and Global Capital.',
    paragraphs: [
      'Agriculture employs upwards of 60% of Africa’s population and remains central to continental GDP. Yet high-potential agribusiness SMEs face persistent barriers in accessing growth capital, upgrading processing technology, and navigating complex export and regulatory frameworks.',
      'Simultaneously, global impact capital seeks structured, bankable agricultural deal flow across Africa, while public-sector policy champions often lack connection to private investment ecosystems. AAIRI bridges both gaps through enterprise readiness, international investor matchmaking, and leadership recognition.',
    ],
    cta: { label: 'Discover AAIRI', to: '/about' },
  },
  audiencePathways: [
    {
      id: 'smes',
      title: 'Agribusiness SMEs',
      description:
        'Explore structured capacity building, investment-readiness diagnostics, and application interest pathways.',
      ctaLabel: 'Explore Applications',
      to: '/applications',
    },
    {
      id: 'investors',
      title: 'Global Investors & DFIs',
      description:
        'Discover opportunities to engage with assessed, investment-ready African agribusiness enterprises.',
      ctaLabel: 'Investor Engagement',
      to: '/investors',
    },
    {
      id: 'government',
      title: 'Government & Impact Leaders',
      description:
        'Explore policy dialogue, institutional recognition, and agricultural transformation advocacy.',
      ctaLabel: 'Awards & Recognition',
      to: '/awards',
    },
    {
      id: 'partners',
      title: 'Partners & Sponsors',
      description:
        'Explore institutional collaboration, technical mentorship, and programme sponsorship opportunities.',
      ctaLabel: 'Partner With AAIRI',
      to: '/partners',
    },
  ],
  bootcampTopics: [
    'Business model validation',
    'Financial modelling',
    'Bankable business plans',
    'Fundraising structures',
    'Investor pitch preparation',
    'Due diligence readiness',
    'Market access strategies',
    'AGOA-related export training',
    'Regulatory navigation',
    'Digital marketing for agribusiness',
  ],
  impactTargets: [
    {
      metric: '400 SMEs',
      label: 'Trained & Investment-Ready',
      caveat: 'Planned cohort target',
    },
    {
      metric: '10–30',
      label: 'Enterprises Matched With Investors',
      caveat: 'Target (10–20 also cited; subject to confirmation)',
    },
    {
      metric: '50+ Leaders',
      label: 'Government Officials & Impact Leaders Recognised',
      caveat: 'Planned conference target',
    },
    {
      metric: 'USD 5M',
      label: 'Proposed Investment Commitment Target',
      caveat: 'Provisional target — subject to refinement, not secured capital',
    },
  ],
} as const;
