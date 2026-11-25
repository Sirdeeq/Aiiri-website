import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { EmptyState } from '@/components/ui/EmptyState';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { PARTNERS } from '@/data/partners';
import { usePageMeta } from '@/hooks/usePageMeta';

const COLLABORATION_AREAS = [
  'Training delivery & curriculum co-development',
  'Technical mentorship & agricultural research',
  'Programme sponsorship & forum hosting',
  'Investor engagement & deal facilitation',
  'Cross-border trade & market access',
  'Technology transfer & media coverage',
];

export default function PartnersPage() {
  usePageMeta({
    title: 'Partners & Collaborators',
    description:
      'Explore AAIRI institutional partnership categories, collaboration opportunities, and partner governance standards.',
    canonicalPath: '/partners',
  });

  const approvedPartners = PARTNERS.filter((p) => p.publicationApproved);

  return (
    <>
      <PageHeader
        eyebrow="Institutional Collaboration"
        title="Partnering Across Governments, Academia, Capital, and Media."
        description="AAIRI brings together public institutions, academic bodies, international business networks, technical partners, and media organisations."
        breadcrumbs={[{ label: 'Partners' }]}
      />

      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Collaboration Pillars
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-fg">
                Partnership Opportunities
              </h2>
              <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                {COLLABORATION_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-3 py-3.5 text-sm text-fg">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button to="/contact?category=Strategic+partnership">
                  Become a Partner
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button to="/sponsorship" variant="outline">
                  Sponsorship Opportunities
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <EditorialImageFrame
                src="/images/events/partners-collaboration.jpg"
                alt="International institutional leaders collaborating on African agricultural transformation"
                label="Ecosystem Collaboration"
                caption="Public-private, academic, and capital partnerships across Africa and North America."
                aspect="4/3"
                tone="teal"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="max-w-2xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Governance &amp; Clearance
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-fg">
              Approved Partner Logo Wall
            </h2>
            <p className="mt-2 text-sm text-muted">
              Only organisations with confirmed publication clearance and official logo approvals are
              published below. Tentative and pending-endorsement collaborators are never presented
              as confirmed.
            </p>
          </div>

          <div className="mt-8">
            {approvedPartners.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {approvedPartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="flex flex-col justify-between rounded-lg border border-border bg-surface p-6"
                  >
                    <div className="flex h-28 items-center justify-center rounded-md border border-border/70 bg-logo-surface p-4">
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
                    <div className="mt-4">
                      <div className="flex items-center justify-between gap-2">
                        <Badge variant="primary">{partner.status}</Badge>
                        <span className="text-[11px] text-muted">{partner.category}</span>
                      </div>
                      <h3 className="mt-3 font-display text-base font-bold text-fg">
                        {partner.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted">{partner.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={Building2}
                title="Partner Publication Approvals in Progress"
                description="Collaborating organisations listed in the AAIRI concept note (including proposed, tentative, and pending-endorsement institutions) are awaiting formal logo and public-listing clearance."
                ctaLabel="Submit Partnership Enquiry"
                ctaTo="/contact?category=Strategic+partnership"
              />
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
