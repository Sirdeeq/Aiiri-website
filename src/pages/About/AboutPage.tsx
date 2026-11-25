import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { ABOUT_CONTENT } from '@/content/about';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function AboutPage() {
  usePageMeta({
    title: 'About AAIRI',
    description:
      'Learn about AAIRI’s objectives, strategic value proposition, leadership by Princess Adesola O. Debbie Daramola, and initiating organisation Adesewa Concept Ltd.',
    canonicalPath: '/about',
  });

  const [bioExpanded, setBioExpanded] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow={ABOUT_CONTENT.eyebrow}
        title={ABOUT_CONTENT.title}
        description={ABOUT_CONTENT.description}
        breadcrumbs={[{ label: 'About AAIRI' }]}
        statusLabel="2026–2027 Programme"
        tone="teal"
      />

      {/* Editorial Context Split */}
      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <EditorialImageFrame
                src="/images/agriculture/about-overview.jpg"
                alt="African agribusiness leaders and modern agricultural production"
                label="Background & Context"
                caption="Bridging enterprise-level investment readiness and public-sector policy leadership."
                aspect="4/3"
                tone="green"
              />
            </div>

            <div className="space-y-4 lg:col-span-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Why AAIRI Was Established
              </p>
              <h2 className="text-2xl font-extrabold tracking-tight text-fg sm:text-3xl">
                Closing the Twin Gaps in African Agribusiness.
              </h2>
              {ABOUT_CONTENT.context.map((paragraph) => (
                <p key={paragraph} className="max-w-prose text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Hairline-Divided Objectives Ledger (No Cards) */}
      <Section tone="surface">
        <Container>
          <div className="max-w-3xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Strategic Mandate
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
              Primary &amp; Secondary Objectives
            </h2>
          </div>

          <div className="mt-10 grid divide-y divide-hairline border-y border-hairline md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            {ABOUT_CONTENT.primaryObjectives.map((obj, index) => (
              <div key={obj.title} className="py-7 md:px-6 lg:first:pl-0 lg:last:pr-0">
                <span className="font-display text-3xl font-extrabold text-primary/40">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-fg">{obj.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{obj.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="font-display text-lg font-bold text-fg">Secondary Objectives</h3>
              <p className="mt-2 text-sm text-muted">
                Supporting long-term institutional capacity, replication, and inclusive empowerment.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {ABOUT_CONTENT.secondaryObjectives.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-l-2 border-primary/40 pl-4 text-sm text-muted"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Editorial Leadership Spread */}
      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <EditorialImageFrame
                src="/images/leadership/princess-adesola-daramola.jpg"
                alt={ABOUT_CONTENT.leadership.name}
                label="Programme Leadership"
                caption="Official portrait to be placed in public/images/leadership/"
                aspect="4/5"
                tone="gold"
              />
            </div>

            <div className="lg:col-span-7">
              <Badge variant="accent">Initiator &amp; Programme Lead</Badge>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
                {ABOUT_CONTENT.leadership.name}
              </h2>

              <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
                {ABOUT_CONTENT.leadership.roles.map((role) => (
                  <li key={role} className="py-2.5 text-sm font-medium text-primary">
                    {role}
                  </li>
                ))}
              </ul>

              <p className="mt-6 max-w-prose text-base leading-relaxed text-muted">
                {ABOUT_CONTENT.leadership.bio}
              </p>

              <button
                type="button"
                aria-expanded={bioExpanded}
                onClick={() => setBioExpanded((prev) => !prev)}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:underline cursor-pointer"
              >
                {bioExpanded ? 'Hide Vision Statement' : 'Read Broader Vision'}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${bioExpanded ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {bioExpanded && (
                <p className="mt-3 max-w-prose border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">
                  Sustainable African agricultural development requires simultaneously building
                  enterprise capacity, mobilising patient capital, and honouring the leaders in
                  government and civil society who create the enabling conditions for both.
                </p>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Initiating Organisation — ACL (Separated from AAIRI Targets) */}
      <Section tone="elevated">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Badge variant="default">Initiating Organisation — Prior Track Record</Badge>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-fg">
                {ABOUT_CONTENT.initiator.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {ABOUT_CONTENT.initiator.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/programme">
                  Explore AAIRI Programme
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button to="/contact" variant="outline">
                  Contact Secretariat
                </Button>
              </div>
            </div>

            <div className="divide-y divide-hairline border-y border-hairline lg:col-span-7">
              {ABOUT_CONTENT.initiator.reportedActivities.map((activity) => (
                <div key={activity} className="flex items-start gap-3 py-4 text-sm text-fg">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
