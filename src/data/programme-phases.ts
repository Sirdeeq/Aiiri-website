import type { ProgrammePhase } from '@/types/programme';

export const PROGRAMME_PHASES: ProgrammePhase[] = [
  {
    id: 'phase-1',
    phaseLabel: 'Phase 1',
    title: 'Call for Applications',
    shortTitle: 'Applications',
    route: '/applications',
    timelineLabel: 'Proposed: Dec 2026 – Jan 2027 (to be confirmed)',
    timelineNote:
      'Concept note lists Dec – Jan 2026 in the summary table; final confirmed dates will be published upon official launch.',
    status: 'planned',
    overview:
      'An open, continent-wide call targeting 400 qualified African agribusiness SMEs across agricultural value chains, assessed on bankability, market potential, scalability, and leadership quality.',
    objectives: [
      'Identify 400 high-potential agribusiness SMEs across Africa.',
      'Ensure inclusive representation of women, youth, persons with disabilities (PWDs), and retirees.',
      'Establish a structured pipeline for the eight-week online capacity-building bootcamp.',
    ],
    targetParticipants: '400 African agribusiness SMEs across 10+ agricultural value chains.',
    activities: [
      'Continent-wide digital outreach and partner-network mobilisation',
      'Structured application intake and document screening',
      'Multi-criteria evaluation of business model, revenue trajectory, and impact',
    ],
    expectedOutcomes: [
      '400 selected SMEs onboarded into the AAIRI cohort.',
      'Baseline investment-readiness diagnostic completed for each participant.',
    ],
    ctaLabel: 'View Application Criteria',
    ctaRoute: '/applications',
  },
  {
    id: 'phase-2',
    phaseLabel: 'Phase 2',
    title: 'Eight-Week Paid Online Bootcamp',
    shortTitle: 'Online Bootcamp',
    route: '/bootcamp',
    timelineLabel: 'Proposed: Feb – March 2027 (to be confirmed)',
    status: 'planned',
    overview:
      'A structured virtual capacity-building programme equipping the 400 selected SMEs with business model validation, financial modelling, investor pitch preparation, and export/AGOA readiness.',
    objectives: [
      'Build lasting founder capacity in financial modelling and bankable business planning.',
      'Prepare enterprises for investor due diligence and cross-border trade.',
      'Assess and shortlist the most investment-ready enterprises for Botswana.',
    ],
    targetParticipants: 'All 400 SMEs selected in Phase 1 (paid participation; fee to be announced).',
    activities: [
      'Four two-week structured curriculum modules',
      'Technical mentorship with academic and industry collaborators',
      'Formal end-of-bootcamp investment-readiness assessment',
    ],
    expectedOutcomes: [
      '400 SMEs trained with investor-ready documentation.',
      'Top 10–30 enterprises (10–20 in summary table; subject to confirmation) shortlisted for Botswana.',
    ],
    ctaLabel: 'Explore Curriculum',
    ctaRoute: '/bootcamp',
  },
  {
    id: 'phase-3a',
    phaseLabel: 'Phase 3A',
    title: 'Awards & Recognition Conference',
    shortTitle: 'Awards Conference',
    route: '/awards',
    timelineLabel: 'Proposed: April 2027 / Q2 2027 (to be confirmed)',
    status: 'planned',
    overview:
      'A flagship one-to-two-day conference honouring federal and state government officials, impact leaders, and private-sector champions driving African agricultural transformation.',
    objectives: [
      'Formally recognise policy and advocacy leadership across African agriculture.',
      'Convene high-level policy dialogue on investment climate and trade facilitation.',
      'Connect public-sector champions with private-sector investment ecosystems.',
    ],
    targetParticipants:
      'Government ministers and officials, DFI leaders, impact investors, academic leaders, civil society, and private-sector champions (50+ leaders targeted).',
    activities: [
      'High-level keynote and policy dialogue panels',
      'Agribusiness exhibition and bilateral meetings',
      'Formal Awards & Recognition ceremony',
    ],
    expectedOutcomes: [
      '50+ government officials and impact leaders formally recognised (target).',
      'Strengthened public-private alignment for agribusiness investment.',
    ],
    ctaLabel: 'Discover the Awards',
    ctaRoute: '/awards',
  },
  {
    id: 'phase-3b',
    phaseLabel: 'Phase 3B',
    title: 'Botswana Onsite Bootcamp & Pre-Investors Forum',
    shortTitle: 'Botswana Forum',
    route: '/investors/botswana',
    timelineLabel: 'Proposed: April 2027 (note: cover page also cites Dec 2026; pending confirmation)',
    status: 'planned',
    overview:
      'An intensive one-week onsite programme in Botswana for the top selected SMEs, combining pitch refinement and enterprise exposure visits with structured investor matchmaking.',
    objectives: [
      'Refine investor pitches and due-diligence readiness through intensive onsite coaching.',
      'Facilitate direct matchmaking between bankable African SMEs and global impact investors.',
      'Leverage Botswana as a strategic, business-friendly gateway to Southern African markets.',
    ],
    targetParticipants:
      'Top 10–30 investment-ready SMEs (10–20 in summary table; target to be confirmed), impact investors, DFIs, and high-net-worth agricultural investors.',
    activities: [
      'Days 1–4: Intensive onsite coaching, pitch refinement, peer learning, and Botswana enterprise visits',
      'Day 5: Formal Pre-Investors Forum structured pitch sessions',
      'Days 6–7: Investor matchmaking, 1-on-1 deal facilitation, and follow-up discussions',
    ],
    expectedOutcomes: [
      '10–30 enterprises directly matched with assembled investors (target).',
      'Progress towards the provisional USD 5M investment commitment target (subject to refinement).',
    ],
    ctaLabel: 'Explore Botswana Forum',
    ctaRoute: '/investors/botswana',
  },
  {
    id: 'phase-4',
    phaseLabel: 'Phase 4',
    title: 'Toronto Follow-Up Investors Forum',
    shortTitle: 'Toronto Forum',
    route: '/investors/toronto',
    timelineLabel: 'Proposed: June / Q3 2027 (to be confirmed)',
    status: 'planned',
    overview:
      'An international follow-up investor engagement forum in Toronto, Canada designed to expand the North American investor network, showcase programme progress, and support bilateral trade.',
    objectives: [
      'Expand AAIRI’s North American and international investor pipeline.',
      'Showcase Botswana Forum outcomes and investment-ready African agribusinesses.',
      'Deepen cross-border trade facilitation with Pennsylvania, Canadian, and international partners.',
    ],
    targetParticipants:
      'North American institutional and impact investors, DFIs, trade bodies, diaspora capital networks, and showcased AAIRI enterprises.',
    activities: [
      'Investor roundtable and programme progress showcase',
      'Cross-border trade and market-access facilitation sessions',
      'Continued deal-closure tracking and multi-year partnership formalisation',
    ],
    expectedOutcomes: [
      'Expanded North American investor network for African agricultural value chains.',
      'Documented framework for multi-year pan-African programme replication.',
    ],
    ctaLabel: 'Explore Toronto Forum',
    ctaRoute: '/investors/toronto',
  },
];
