import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { HOME_CONTENT } from '@/content/home';

export function HeroSection() {
  const { hero } = HOME_CONTENT;

  return (
    <section className="relative overflow-hidden border-b border-border bg-bg py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="border-l-2 border-primary pl-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {hero.eyebrow}
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-[3.75rem]">
              {hero.headline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.supporting}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to={hero.primaryCta.to} size="lg">
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button to={hero.secondaryCta.to} variant="outline" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hairline pt-5 text-xs text-muted">
              <span>
                Initiated by <strong className="text-fg">Adesewa Concept Ltd (ACL)</strong>
              </span>
              <span aria-hidden="true" className="hidden sm:inline">
                •
              </span>
              <span>AVC Summit Initiative</span>
              <span aria-hidden="true" className="hidden sm:inline">
                •
              </span>
              <span>Programme Period: 2026–2027</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <EditorialImageFrame
              src="/images/hero/aairi-hero.jpg"
              alt="African agribusiness entrepreneurs and modern agro-processing enterprise transformation"
              label="AAIRI 2026–2027"
              caption="Connecting African agribusiness SMEs with global impact capital."
              aspect="4/5"
              tone="green"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
