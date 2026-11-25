import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { Reveal } from '@/components/ui/Reveal';
import { AWARD_CATEGORIES } from '@/data/award-categories';

export function AwardsPreviewSection() {
  return (
    <section className="border-y border-border bg-band-contrast-bg py-16 text-band-contrast-fg sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Phase 03A — Awards &amp; Recognition Conference
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Celebrating the Leaders Transforming African Agriculture.
            </h2>
            <p className="mt-4 max-w-prose text-base text-band-contrast-muted">
              The flagship Awards &amp; Recognition Conference honours federal and state government
              officials, development finance leaders, and private-sector champions whose policies
              and advocacy make agricultural investment possible.
            </p>

            <div className="mt-8 divide-y divide-white/15 border-y border-white/15">
              {AWARD_CATEGORIES.map((category, index) => (
                <div key={category.id} className="flex items-baseline justify-between gap-4 py-3.5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-xs font-bold text-accent">
                      0{index + 1}
                    </span>
                    <span className="font-display text-sm font-bold">{category.title}</span>
                  </div>
                  <span className="hidden text-xs text-band-contrast-muted sm:inline">
                    {category.targetGroup}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button to="/awards" variant="primary">
                Discover the Awards
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6">
            <EditorialImageFrame
              src="/images/events/awards-ceremony.jpg"
              alt="International policy dialogue and agricultural leadership recognition conference"
              label="Flagship Recognition"
              caption="Honouring policy leadership, impact investment, and agricultural innovation."
              aspect="4/5"
              tone="gold"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
