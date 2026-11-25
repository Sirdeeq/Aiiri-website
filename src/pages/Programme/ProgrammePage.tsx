import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import { useState } from 'react';
import { ProgrammeRoadmap } from '@/components/sections/ProgrammeRoadmap';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { PROGRAMME_PHASES } from '@/data/programme-phases';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function ProgrammePage() {
  usePageMeta({
    title: 'Programme Overview',
    description:
      'Explore AAIRI’s four sequential phases and five components from the continent-wide Call for Applications to the Botswana and Toronto Investor Forums.',
    canonicalPath: '/programme',
  });

  const [selectedId, setSelectedId] = useState(PROGRAMME_PHASES[0].id);
  const activePhase = PROGRAMME_PHASES.find((p) => p.id === selectedId) ?? PROGRAMME_PHASES[0];

  return (
    <>
      <PageHeader
        eyebrow="AAIRI 2026–2027"
        title="Programme Overview"
        description="A connected four-phase, five-component journey taking high-potential African agribusiness SMEs from continent-wide selection to international investor engagement."
        breadcrumbs={[{ label: 'Programme Overview' }]}
        statusLabel="Planned Programme"
      />

      {/* Connected Scroll-Animated Roadmap */}
      <Section tone="surface">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Connected Roadmap
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-fg sm:text-3xl">
                Five Milestones Across Four Phases
              </h2>
            </div>
          </div>

          <ProgrammeRoadmap />

          <div className="mt-10 flex items-start gap-3 border-l-2 border-warning pl-4 text-xs leading-relaxed text-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden="true" />
            <p>
              <strong className="text-fg">Schedule Governance Note:</strong> Where the concept note
              contains conflicting date references (e.g., Dec 2026 vs April 2027 for Botswana, or
              10–20 vs 10–30 shortlisted SMEs), final dates and cohort numbers remain pending
              confirmation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Interactive Phase Deep-Dive (Tabbed Editorial View) */}
      <Section>
        <Container>
          <div className="flex flex-wrap gap-2 border-b border-hairline pb-4">
            {PROGRAMME_PHASES.map((phase) => (
              <button
                key={phase.id}
                type="button"
                onClick={() => setSelectedId(phase.id)}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-colors cursor-pointer ${
                  activePhase.id === phase.id
                    ? 'bg-primary text-primary-fg'
                    : 'border border-border bg-surface text-muted hover:text-fg'
                }`}
              >
                {phase.phaseLabel}: {phase.shortTitle}
              </button>
            ))}
          </div>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="primary">{activePhase.phaseLabel}</Badge>
                <span className="text-xs font-semibold text-accent">
                  {activePhase.timelineLabel}
                </span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-fg">{activePhase.title}</h2>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">
                {activePhase.overview}
              </p>

              <div className="mt-8 grid gap-8 border-t border-hairline pt-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-fg">
                    Objectives
                  </h3>
                  <ul className="mt-3 space-y-2.5 text-sm text-muted">
                    {activePhase.objectives.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-fg">
                    Key Activities
                  </h3>
                  <ul className="mt-3 space-y-2.5 text-sm text-muted">
                    {activePhase.activities.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
                <p className="text-xs text-muted">
                  <strong className="text-fg">Target:</strong> {activePhase.targetParticipants}
                </p>
                <Button to={activePhase.ctaRoute}>
                  {activePhase.ctaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EditorialImageFrame
                src={`/images/programmes/${activePhase.id}.jpg`}
                alt={activePhase.title}
                label={activePhase.phaseLabel}
                caption={activePhase.expectedOutcomes[0]}
                aspect="4/3"
                tone="teal"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
