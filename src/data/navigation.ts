export interface NavChildItem {
  label: string;
  to: string;
  description?: string;
}

export interface NavItem {
  label: string;
  to?: string;
  children?: NavChildItem[];
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programme', to: '/programme' },
  { label: 'Investors', to: '/investors' },
  { label: 'Awards', to: '/awards' },
  {
    label: 'Partners',
    children: [
      {
        label: 'Institutional Partners',
        to: '/partners',
        description: 'Government, academic, international, and technical collaborators',
      },
      {
        label: 'Sponsorship Opportunities',
        to: '/sponsorship',
        description: 'Support African agribusiness SMEs and global deal flow',
      },
      {
        label: 'Become a Partner',
        to: '/contact?category=Strategic+partnership',
        description: 'Submit an institutional collaboration enquiry',
      },
    ],
  },
  { label: 'Media', to: '/media' },
];
