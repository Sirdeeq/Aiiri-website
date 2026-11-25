import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { HOME_CONTENT } from '@/content/home';

export function AudiencePathwaysSection() {
  return (
    <Section tone="surface" className="py-0 sm:py-0 lg:py-0">
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Who Should Participate?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            Four Pathways Across the Ecosystem.
          </h2>
        </div>

        {/* Hairline-divided editorial strips (no repetitive cards) */}
        <div className="mt-10 grid divide-y divide-hairline border-y border-hairline md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {HOME_CONTENT.audiencePathways.map((pathway, index) => (
            <Link
              key={pathway.id}
              to={pathway.to}
              className="group flex flex-col justify-between py-8 transition-colors hover:bg-surface-elevated md:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              <div>
                <span className="font-display text-3xl font-extrabold text-primary/35 transition-colors group-hover:text-primary">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-fg group-hover:text-primary">
                  {pathway.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pathway.description}</p>
              </div>

              <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                {pathway.ctaLabel}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
