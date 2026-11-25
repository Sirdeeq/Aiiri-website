export type ProgrammeStatus = 'planned' | 'proposed' | 'tentative' | 'pending-confirmation';

export interface ProgrammePhase {
  id: string;
  phaseLabel: string;
  title: string;
  shortTitle: string;
  route: string;
  timelineLabel: string;
  timelineNote?: string;
  status: ProgrammeStatus;
  overview: string;
  objectives: string[];
  targetParticipants: string;
  activities: string[];
  expectedOutcomes: string[];
  ctaLabel: string;
  ctaRoute: string;
}

export interface ValueChain {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AwardCategory {
  id: string;
  title: string;
  description: string;
  targetGroup: string;
}

export interface BootcampModule {
  id: string;
  weeks: string;
  title: string;
  summary: string;
  topics: string[];
}

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export type FaqCategory =
  | 'General information'
  | 'Applications'
  | 'Eligibility'
  | 'Online bootcamp'
  | 'Fees and payments'
  | 'Awards and recognition'
  | 'Botswana forum'
  | 'Toronto forum'
  | 'Investors'
  | 'Sponsorship and partnerships';
