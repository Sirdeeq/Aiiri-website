import { ProgrammeRoadmap } from '@/components/sections/ProgrammeRoadmap';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function ProgrammeTimelineSection() {
  return (
    <Section tone="elevated">
      <Container>
        <div className="max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Programme Journey
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl lg:text-5xl">
            From Enterprise Potential to Investment Readiness.
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Four sequential phases and five integrated components. Dates shown reflect proposed
            schedules subject to final confirmation.
          </p>
        </div>

        <ProgrammeRoadmap />
      </Container>
    </Section>
  );
}
