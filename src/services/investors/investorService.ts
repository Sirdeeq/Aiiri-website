import { apiRequest } from '@/services/api/client';

export type InvestorType =
  | 'Impact Investor'
  | 'Development Finance Institution (DFI)'
  | 'Financial Institution'
  | 'Agricultural Investment Fund'
  | 'Institutional Investor'
  | 'Private / HNW Investor'
  | 'International Business Network';

export type ForumInterestOption = 'Botswana Forum' | 'Toronto Forum' | 'Virtual Deal Pipeline';

export interface InvestorInterestPayload {
  fullName: string;
  organisation: string;
  role?: string;
  email: string;
  phone?: string;
  investorType: InvestorType;
  forumInterest: ForumInterestOption[];
  focusValueChains?: string[];
  ticketSizeRange?: string;
  notes?: string;
  consentToContact: true;
  captchaToken?: string;
}

export interface InvestorInterestResult {
  investorRegistrationId: string;
  receivedAt: string;
}

export async function submitInvestorInterest(payload: InvestorInterestPayload) {
  return apiRequest<InvestorInterestResult, InvestorInterestPayload>(
    '/api/v1/investors/interest',
    {
      method: 'POST',
      body: payload,
    },
  );
}
