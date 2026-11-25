import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { Section } from '@/components/ui/Section';
import { VALUE_CHAINS } from '@/data/value-chains';

export function ValueChainsSection() {
  const [selectedId, setSelectedId] = useState(VALUE_CHAINS[0].id);
  const selected = VALUE_CHAINS.find((v) => v.id === selectedId) ?? VALUE_CHAINS[0];

  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Agricultural Value Chains
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
              Opportunities Across the Agricultural Ecosystem.
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Select a value chain to inspect focus areas across production, processing, technology,
              logistics, finance, and climate-resilient trade.
            </p>

            <div className="mt-8 sticky top-24">
              <EditorialImageFrame
                src={`/images/agriculture/${selected.id}.jpg`}
                alt={selected.title}
                label="Value Chain Focus"
                caption={selected.description}
                aspect="4/3"
                tone="green"
              />
            </div>
          </div>

          {/* Hairline-divided interactive editorial ledger */}
          <div className="divide-y divide-hairline border-y border-hairline lg:col-span-7">
            {VALUE_CHAINS.map((chain, index) => {
              const isSelected = chain.id === selected.id;
              return (
                <button
                  key={chain.id}
                  type="button"
                  onClick={() => setSelectedId(chain.id)}
                  className={`group flex w-full items-start justify-between gap-4 py-4 px-3 text-left transition-colors cursor-pointer ${
                    isSelected ? 'bg-surface-elevated' : 'hover:bg-surface-elevated/50'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-display text-xs font-bold tabular-nums ${
                        isSelected ? 'text-primary' : 'text-muted'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-base font-bold transition-colors ${
                          isSelected ? 'text-primary' : 'text-fg group-hover:text-primary'
                        }`}
                      >
                        {chain.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{chain.description}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`mt-1 h-4 w-4 shrink-0 transition-transform ${
                      isSelected
                        ? 'text-primary translate-x-0.5 -translate-y-0.5'
                        : 'text-muted opacity-40 group-hover:opacity-100'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
