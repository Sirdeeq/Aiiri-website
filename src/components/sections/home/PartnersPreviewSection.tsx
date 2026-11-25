import { ArrowRight, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EmptyState } from '@/components/ui/EmptyState';
import { Section } from '@/components/ui/Section';
import { PARTNERS } from '@/data/partners';
import type { PartnerCategory } from '@/types/partner';

const DISPLAY_CATEGORIES: PartnerCategory[] = [
  'Government institutions',
  'Academic and research institutions',
  'International networks',
  'Technical collaborators',
  'Media partners',
];

export function PartnersPreviewSection() {
  const approvedPartners = PARTNERS.filter((partner) => partner.publicationApproved);

  return (
    <Section tone="surface">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-6">
          <div className="max-w-2xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Partners &amp; Collaborators
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
              Multi-Stakeholder Institutional Ecosystem.
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Only organisations that have granted formal publication clearance are displayed with
              official logos. Proposed and tentative collaborators are tracked separately.
            </p>
          </div>
          <Button to="/partners" variant="outline" size="sm">
            View Partner Directory
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        {/* Hairline-divided institutional category strip (no cards) */}
        <div className="grid divide-y divide-hairline border-b border-hairline sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
          {DISPLAY_CATEGORIES.map((category, index) => (
            <div key={category} className="py-5 sm:px-5 lg:first:pl-0 lg:last:pr-0">
              <span className="font-display text-xs font-bold text-primary">0{index + 1}</span>
              <p className="mt-1 font-display text-sm font-bold text-fg">{category}</p>
              <p className="mt-1 text-xs text-muted">
                {PARTNERS.filter((p) => p.category === category).length} in concept note
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          {approvedPartners.length > 0 ? (
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {approvedPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex h-28 items-center justify-center rounded-lg border border-border bg-logo-surface p-4 text-center shadow-sm"
                >
                  {partner.logoPath ? (
                    <img
                      src={partner.logoPath}
                      alt={partner.name}
                      loading="lazy"
                      className="max-h-20 w-auto object-contain"
                    />
                  ) : (
                    <span className="font-display text-sm font-bold text-[#17251d]">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={Building2}
              title="Confirmed Partner Logos Pending Publication Clearance"
              description="Official partner logos will be published in this institutional logo wall once formal endorsement and brand-use approvals are received from each collaborating organisation."
              ctaLabel="Explore Partner & Sponsorship Opportunities"
              ctaTo="/partners"
            />
          )}
        </div>
      </Container>
    </Section>
  );
}
