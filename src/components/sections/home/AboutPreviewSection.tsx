import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { HOME_CONTENT } from '@/content/home';

export function AboutPreviewSection() {
  const { about } = HOME_CONTENT;

  return (
    <Section>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <EditorialImageFrame
              src="/images/agriculture/agribusiness-enterprise.jpg"
              alt="Modern African agro-processing and agricultural value chain operations"
              label="Continental Mandate"
              caption="Bridging enterprise readiness, policy recognition, and global capital."
              aspect="4/3"
              tone="teal"
            />
          </Reveal>

          <Reveal delay={0.08} className="space-y-5 lg:col-span-6">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {about.eyebrow}
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-fg sm:text-4xl">
              {about.headline}
            </h2>
            <p className="max-w-prose text-base leading-relaxed text-muted">
              {about.paragraphs[0]}
            </p>
            <p className="max-w-prose text-base leading-relaxed text-muted">
              {about.paragraphs[1]}
            </p>
            <div className="pt-2">
              <Button to={about.cta.to} variant="outline">
                {about.cta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
