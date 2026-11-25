import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { HOME_CONTENT } from '@/content/home';

export function ImpactTargetsSection() {
  return (
    <Section tone="elevated">
      <Container>
        <div className="max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Expected Impact (Targets)
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            Measurable Targets for African Agricultural Transformation.
          </h2>
          <p className="mt-3 text-sm text-muted sm:text-base">
            The figures below represent AAIRI’s planned programme targets and provisional
            commitments subject to refinement—not secured capital or completed outcomes.
          </p>
        </div>

        {/* Typographic editorial columns with 1px hairlines (no cards) */}
        <div className="mt-10 grid gap-8 border-y border-hairline py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-hairline">
          {HOME_CONTENT.impactTargets.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.05}
              className="flex flex-col justify-between lg:px-7 lg:first:pl-0 lg:last:pr-0"
            >
              <div>
                <p className="font-display text-4xl font-extrabold tracking-tight text-primary">
                  {item.metric}
                </p>
                <p className="mt-3 font-display text-base font-bold text-fg">{item.label}</p>
              </div>
              <p className="mt-4 text-xs text-muted">{item.caveat}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
