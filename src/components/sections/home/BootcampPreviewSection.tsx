import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { HOME_CONTENT } from '@/content/home';

export function BootcampPreviewSection() {
  return (
    <Section tone="elevated">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Phase 02 — Eight-Week Online Bootcamp
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
              Eight Weeks to Build Stronger, Investment-Ready Businesses.
            </h2>
            <p className="mt-4 max-w-prose text-base text-muted">
              Selected SMEs will complete a structured virtual curriculum covering commercial
              validation, financial modelling, investor pitch preparation, and international export
              readiness. Participation is planned as a paid programme (fee and payment details to
              be announced).
            </p>

            <ul className="mt-7 grid gap-x-6 gap-y-2.5 border-y border-hairline py-6 sm:grid-cols-2">
              {HOME_CONTENT.bootcampTopics.map((topic) => (
                <li key={topic} className="flex items-start gap-2.5 text-sm text-fg">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Button to="/bootcamp">
                Explore the Bootcamp
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6">
            <EditorialImageFrame
              src="/images/programmes/bootcamp-training.jpg"
              alt="Agribusiness founders participating in structured investment-readiness coaching"
              label="Structured Curriculum"
              caption="Four two-week modules from business model validation to AGOA export readiness."
              aspect="4/3"
              tone="green"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
