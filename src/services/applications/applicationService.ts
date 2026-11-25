import { apiRequest } from '@/services/api/client';

export type ApplicationDocumentType =
  | 'pitch_deck'
  | 'business_registration'
  | 'financial_summary'
  | 'supporting_document';

export interface UploadUrlRequest {
  fileName: string;
  contentType: string;
  fileSizeBytes: number;
  documentType: ApplicationDocumentType;
}

export interface UploadUrlResult {
  uploadUrl: string;
  fileKey: string;
  expiresInSeconds: number;
}

export interface Phase1ApplicationPayload {
  personalInfo: {
    fullName: string;
    roleTitle: string;
    email: string;
    phone: string;
    countryOfResidence: string;
    inclusiveGroupFlags: string[];
  };
  businessInfo: {
    enterpriseName: string;
    countryOfOperation: string;
    yearsInOperation: number;
    isLegallyRegistered: boolean;
    registrationNumber?: string;
    websiteOrSocial?: string;
  };
  valueChain: {
    primaryValueChain: string;
    secondaryValueChains: string[];
  };
  developmentAndInvestment: {
    businessStage: string;
    annualRevenueBand: string;
    scalabilitySummary: string;
    marketPotentialSummary: string;
    capitalNeededUsd?: number;
    readinessNeeds: string[];
  };
  socialAndEnvironmentalImpact: {
    womenYouthPwdRetireeImpact: string;
    environmentalSustainability: string;
  };
  supportingDocuments: {
    documentType: ApplicationDocumentType;
    fileKey: string;
    fileName: string;
  }[];
  consent: {
    accurateInformationDeclared: true;
    privacyPolicyAccepted: true;
    bootcampFeeAcknowledged: true;
  };
  captchaToken?: string;
}

export interface Phase1ApplicationResult {
  referenceNumber: string;
  status: 'received';
  submittedAt: string;
}

export interface ApplicationStatusResult {
  referenceNumber: string;
  status: 'received' | 'under_review' | 'shortlisted' | 'not_selected';
  updatedAt: string;
}

export async function requestApplicationUploadUrl(payload: UploadUrlRequest) {
  return apiRequest<UploadUrlResult, UploadUrlRequest>('/api/v1/applications/upload-url', {
    method: 'POST',
    body: payload,
  });
}

export async function submitPhase1Application(payload: Phase1ApplicationPayload) {
  return apiRequest<Phase1ApplicationResult, Phase1ApplicationPayload>('/api/v1/applications', {
    method: 'POST',
    body: payload,
  });
}

export async function getApplicationStatus(referenceNumber: string, email: string) {
  const params = new URLSearchParams({ email });
  return apiRequest<ApplicationStatusResult>(
    `/api/v1/applications/${encodeURIComponent(referenceNumber)}/status?${params.toString()}`,
  );
}
