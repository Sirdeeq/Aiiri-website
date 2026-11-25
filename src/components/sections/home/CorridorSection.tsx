import { CorridorMap } from '@/components/sections/CorridorMap';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function CorridorSection() {
  return (
    <Section>
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            International Investment Corridor
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            Connecting African Enterprise with International Opportunities.
          </h2>
          <p className="mt-4 text-base text-muted">
            AAIRI proposes a structured transatlantic agricultural investment corridor linking{' '}
            <strong className="text-fg">Pennsylvania, Botswana, and Toronto</strong> (alongside
            prospective Asian agricultural innovation exchange) to strengthen capital flows,
            technology transfer, policy alignment, and market access.
          </p>
        </div>

        <CorridorMap />
      </Container>
    </Section>
  );
}
