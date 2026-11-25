import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { usePageMeta } from '@/hooks/usePageMeta';

const TARGET_INVESTORS = [
  'Impact investors',
  'Development finance institutions (DFIs)',
  'Financial institutions',
  'Agricultural investment funds',
  'Institutional investors',
  'Private & high-net-worth investors',
  'International business networks',
];

const PIPELINE_STAGES = [
  {
    step: '01',
    title: 'Enterprise Preparation',
    description:
      '400 selected SMEs complete an eight-week structured bootcamp covering financial modelling, governance, and bankable business planning.',
  },
  {
    step: '02',
    title: 'Structured Assessment',
    description:
      'Formal end-of-bootcamp evaluation shortlists the most investment-ready enterprises for onsite pitch preparation.',
  },
  {
    step: '03',
    title: 'Investor Engagement & Matchmaking',
    description:
      'Curated pitch sessions and one-on-one deal facilitation at the Botswana Pre-Investors Forum and Toronto Follow-Up Forum.',
  },
  {
    step: '04',
    title: 'Follow-Up & Deal Tracking',
    description:
      'Structured post-forum follow-up supporting due diligence, cross-border market access, and capital deployment tracking.',
  },
];

export default function InvestorsPage() {
  usePageMeta({
    title: 'Investors Overview',
    description:
      'Discover AAIRI’s structured investment-readiness pipeline connecting impact investors, DFIs, and institutional capital with African agribusiness SMEs.',
    canonicalPath: '/investors',
  });

  return (
    <>
      <PageHeader
        eyebrow="Investor Engagement"
        title="Discover Africa's Emerging Agribusiness Opportunities."
        description="AAIRI builds a structured, investment-ready pipeline of African agribusiness SMEs for impact investors, development finance institutions, and international capital networks."
        breadcrumbs={[{ label: 'Investors' }]}
        statusLabel="Investor Pipeline"
        tone="teal"
      />

      {/* Editorial Split */}
      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Capital Alignment
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-fg">
                Who We Engage
              </h2>
              <p className="mt-3 text-base text-muted">
                AAIRI convenes capital providers seeking structured, impact-aligned agricultural
                deal flow across African value chains:
              </p>
              <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                {TARGET_INVESTORS.map((investor) => (
                  <li key={investor} className="flex items-center gap-3 py-3 text-sm text-fg">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{investor}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/contact?category=Investor+enquiry">
                  Register Investor Interest
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button to="/investors/botswana" variant="outline">
                  Botswana Forum
                </Button>
                <Button to="/investors/toronto" variant="outline">
                  Toronto Forum
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <EditorialImageFrame
                src="/images/programmes/investor-engagement.jpg"
                alt="International impact investors and African agribusiness founders in structured deal discussions"
                label="Institutional Deal Flow"
                caption="Structured readiness, due diligence preparation, and curated matchmaking."
                aspect="4/3"
                tone="teal"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Connected 4-Stage Investment-Readiness Pipeline */}
      <Section tone="surface">
        <Container>
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
            From Preparation to Deal Facilitation
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-fg sm:text-4xl">
            Investment-Readiness Pipeline
          </h2>

          <div className="mt-10 grid divide-y divide-hairline border-y border-hairline md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            {PIPELINE_STAGES.map((stage) => (
              <div key={stage.step} className="py-7 md:px-6 lg:first:pl-0 lg:last:pr-0">
                <span className="font-display text-3xl font-extrabold text-primary/40">
                  {stage.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-fg">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{stage.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 border-l-2 border-primary pl-4 text-xs text-muted">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <p>
              <strong className="text-fg">Investor Governance Notice:</strong> AAIRI does not publish
              fictional investment listings or guarantee financial returns, financing, or deal
              completion. Any future confidential deal room will require separately approved
              authentication, access controls, and data protection architecture.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
