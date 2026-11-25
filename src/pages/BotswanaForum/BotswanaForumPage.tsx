import { ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { usePageMeta } from '@/hooks/usePageMeta';

const BOTSWANA_ITINERARY = [
  {
    days: 'Days 01–04',
    title: 'Intensive Onsite Coaching & Exposure Visits',
    points: [
      'Intensive onsite business and investment coaching',
      'Investor pitch refinement and dry-run feedback',
      'Peer learning across shortlisted African SME founders',
      'Exposure visits to Botswana agricultural enterprises',
    ],
  },
  {
    days: 'Day 05',
    title: 'Formal Pre-Investors Forum',
    points: [
      'Structured pitch sessions before an assembled panel of impact investors, DFIs, and high-net-worth agricultural investors',
    ],
  },
  {
    days: 'Days 06–07',
    title: 'Investor Matchmaking & Deal Facilitation',
    points: [
      'Curated investor matchmaking',
      'One-on-one deal facilitation sessions',
      'Structured follow-up discussions and next-step commitments',
    ],
  },
];

export default function BotswanaForumPage() {
  usePageMeta({
    title: 'Botswana Forum',
    description:
      'Explore Phase 3B: the proposed one-week AAIRI Onsite Bootcamp and Pre-Investors Forum in Botswana.',
    canonicalPath: '/investors/botswana',
  });

  return (
    <>
      <PageHeader
        eyebrow="Phase 03B — Botswana"
        title="Botswana — From Investment Readiness to Investor Engagement."
        description="A proposed one-week intensive onsite bootcamp refresher and Pre-Investors Forum positioning Botswana as a business-friendly gateway to Southern African agribusiness markets."
        breadcrumbs={[
          { label: 'Investors', to: '/investors' },
          { label: 'Botswana Forum' },
        ]}
        statusLabel="Proposed Event — Dates Pending Confirmation"
      />

      {/* Botswana Editorial Context */}
      <Section>
        <Container>
          <div className="mb-10 flex items-start gap-3 border-l-2 border-warning pl-4 text-xs leading-relaxed text-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden="true" />
            <p>
              <strong className="text-fg">Clarifications Pending:</strong> The concept note cites
              both <em>10–30 enterprises</em> (Sections 3, 4.2, 4.4, 7) and <em>10–20 SMEs</em>{' '}
              (Section 4 table), and references both <em>December 2026</em> (cover page) and{' '}
              <em>April 2027</em> (Sections 4 &amp; 4.3). Travel sponsorship, visa terms,
              accommodation, and exact venue details will be published only once formally confirmed.
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <EditorialImageFrame
                src="/images/events/botswana-forum.jpg"
                alt="Botswana agribusiness landscape and Southern African regional enterprise gateway"
                label="Host Nation Gateway"
                caption="Proposed host for the one-week onsite bootcamp and Pre-Investors Forum."
                aspect="4/3"
                tone="green"
              />
            </div>

            <div className="lg:col-span-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Host Nation Role
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-fg">
                Why Botswana?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Botswana is identified in the concept note for its business-friendly regulatory
                environment, strategic position as a gateway to Southern African markets, and
                proposed logistical support including venue provision and visa facilitation.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button to="/contact?category=Investor+enquiry">
                  Register Investor Interest
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button to="/investors/toronto" variant="outline">
                  Toronto Follow-Up Forum
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Connected 7-Day Visual Itinerary (No Identical Cards) */}
      <Section tone="surface">
        <Container>
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Proposed Seven-Day Programme
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg sm:text-4xl">
            Day-by-Day Onsite Itinerary
          </h2>

          <div className="mt-10 space-y-0 border-l border-primary/40 pl-6 sm:pl-8">
            {BOTSWANA_ITINERARY.map((block) => (
              <div
                key={block.days}
                className="relative border-b border-hairline py-8 first:pt-2 last:border-b-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-9 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-primary bg-bg sm:-left-[39px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <div className="grid gap-4 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <span className="font-display text-sm font-bold uppercase tracking-wider text-primary">
                      {block.days}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-fg">{block.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted lg:col-span-8">
                    {block.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
