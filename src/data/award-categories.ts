import type { AwardCategory } from '@/types/programme';

export const AWARD_CATEGORIES: AwardCategory[] = [
  {
    id: 'policy-champion',
    title: 'Agricultural Policy Champion of the Year',
    description:
      'Recognising federal and state government officials who have enacted transformative policies, committed public resources, or strengthened institutional frameworks for agribusiness growth.',
    targetGroup: 'Federal & State Government Officials',
  },
  {
    id: 'impact-investment-leader',
    title: 'Impact Investment Leader of the Year',
    description:
      'Honouring leaders of development finance institutions, impact funds, and capital providers advancing patient, structured financing into African agricultural value chains.',
    targetGroup: 'DFIs & Impact Investment Leaders',
  },
  {
    id: 'innovation-leader',
    title: 'Agricultural Innovation Leader',
    description:
      'Celebrating pioneers deploying technology, research, post-harvest engineering, or climate-smart solutions that measurably elevate agricultural productivity.',
    targetGroup: 'Academic, Research & Private-Sector Innovators',
  },
  {
    id: 'women-champion',
    title: 'Women in Agribusiness Champion',
    description:
      'Recognising leaders and institutions expanding capital access, land rights, market linkages, and enterprise leadership for women across African agriculture.',
    targetGroup: 'Public, Civil Society & Private-Sector Leaders',
  },
  {
    id: 'youth-champion',
    title: 'Youth in Agribusiness Champion',
    description:
      'Honouring champions building pathways for young African entrepreneurs, agri-tech founders, and skilled agribusiness professionals.',
    targetGroup: 'Ecosystem Builders & Youth Advocates',
  },
];
