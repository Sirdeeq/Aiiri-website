import { apiRequest } from '@/services/api/client';

export interface ContactEnquiryPayload {
  fullName: string;
  organisation?: string;
  email: string;
  category: string;
  message: string;
  captchaToken?: string;
}

export interface ContactEnquiryResult {
  enquiryId: string;
  receivedAt: string;
}

export async function submitContactEnquiry(payload: ContactEnquiryPayload) {
  return apiRequest<ContactEnquiryResult, ContactEnquiryPayload>('/api/v1/contact', {
    method: 'POST',
    body: payload,
  });
}
