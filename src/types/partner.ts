export type PartnerCategory =
  | 'Government institutions'
  | 'Academic and research institutions'
  | 'International networks'
  | 'Technical collaborators'
  | 'Media partners'
  | 'Country stakeholders';

export type PartnershipStatus =
  | 'Confirmed'
  | 'Proposed'
  | 'Tentative'
  | 'Pending endorsement';

export interface PartnerItem {
  id: string;
  name: string;
  role: string;
  category: PartnerCategory;
  description: string;
  website?: string;
  logoPath?: string;
  status: PartnershipStatus;
  publicationApproved: boolean;
}
