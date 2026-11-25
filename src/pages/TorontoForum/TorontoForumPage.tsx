import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { usePageMeta } from '@/hooks/usePageMeta';

const TORONTO_OBJECTIVES = [
  'Expand AAIRI’s international and North American investor network',
  'Strengthen North American investment relationships for African agribusiness',
  'Showcase programme progress and Botswana Forum outcomes',
  'Facilitate bilateral trade relationships through Pennsylvania and U.S. Commercial Services linkages',
  'Support continued investor engagement and capital deployment tracking',
];

const INTENDED_PARTICIPANTS = [
  'North American institutional investors and agricultural impact funds',
  'Development finance institutions and bilateral trade agencies',
  'Diaspora capital networks and international business chambers',
  'Showcased AAIRI enterprises and programme leadership',
];

export default function TorontoForumPage() {
  usePageMeta({
    title: 'Toronto Investors Forum',
    description:
      'Explore Phase 4: the proposed Toronto Follow-Up Investors Forum expanding North American capital connections for African agribusinesses.',
    canonicalPath: '/investors/toronto',
  });

  return (
    <>
      <PageHeader
        eyebrow="Phase 04 — Toronto, Canada"
        title="Expanding African Agribusiness Opportunities Across Global Markets."
        description="Toronto is the proposed North American host city for AAIRI’s follow-up investor engagement forum (proposed June / Q3 2027, subject to confirmation)."
        breadcrumbs={[
          { label: 'Investors', to: '/investors' },
          { label: 'Toronto Forum' },
        ]}
        statusLabel="Proposed Event — Dates & Venue TBA"
        tone="teal"
      />

      <Section>
        <Container>
          <div className="mb-10 flex items-start gap-3 border-l-2 border-primary pl-4 text-xs text-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <p>
              Confirmed venue details, exact dates, speaker lineups, and attendance figures will be
              published only once formally finalised.
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Forum Objectives
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-fg">
                Deepening Transatlantic Capital Connections
              </h2>
              <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                {TORONTO_OBJECTIVES.map((obj) => (
                  <li key={obj} className="flex items-start gap-3 py-3.5 text-sm text-fg">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <EditorialImageFrame
                src="/images/events/toronto-forum.jpg"
                alt="Toronto international financial district and North American investor conference setting"
                label="North American Capital Hub"
                caption="Proposed follow-up forum expanding North American investor and trade linkages."
                aspect="4/3"
                tone="teal"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Intended Participants
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-fg sm:text-3xl">
                Who Will Convene in Toronto
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/contact?category=Investor+enquiry">
                  Register Investor Interest
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button to="/partners" variant="outline">
                  Partnership Opportunities
                </Button>
              </div>
            </div>

            <ul className="divide-y divide-hairline border-y border-hairline lg:col-span-7">
              {INTENDED_PARTICIPANTS.map((participant, index) => (
                <li key={participant} className="flex items-baseline gap-4 py-4 text-sm text-fg">
                  <span className="font-display text-xs font-bold text-secondary">
                    0{index + 1}
                  </span>
                  <span>{participant}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
