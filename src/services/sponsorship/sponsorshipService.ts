import { apiRequest } from '@/services/api/client';

export interface SponsorshipEnquiryPayload {
  fullName: string;
  organisation: string;
  email: string;
  focusArea: string;
  requestProspectus?: boolean;
  message: string;
  captchaToken?: string;
}

export interface SponsorshipEnquiryResult {
  sponsorshipId: string;
  receivedAt: string;
}

export async function submitSponsorshipEnquiry(payload: SponsorshipEnquiryPayload) {
  return apiRequest<SponsorshipEnquiryResult, SponsorshipEnquiryPayload>('/api/v1/sponsorship', {
    method: 'POST',
    body: payload,
  });
}
