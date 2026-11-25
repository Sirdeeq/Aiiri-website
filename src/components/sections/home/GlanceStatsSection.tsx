import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { HOME_CONTENT } from '@/content/home';

export function GlanceStatsSection() {
  return (
    <Section tone="surface" className="py-12 sm:py-16">
      <Container>
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2 border-b border-hairline pb-4">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Programme At A Glance
          </p>
          <p className="text-xs text-muted">
            Planned programme targets — not completed achievements
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-hairline">
          {HOME_CONTENT.glanceStats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.05}
              className="lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <p className="font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 font-display text-sm font-bold text-fg">{stat.label}</p>
              <p className="mt-1 text-xs text-muted">{stat.note}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
