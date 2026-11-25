import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { BOOTCAMP_CONTENT, BOOTCAMP_MODULES } from '@/content/bootcamp';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function BootcampPage() {
  usePageMeta({
    title: 'Eight-Week Online Bootcamp',
    description:
      'Explore the proposed eight-week AAIRI online bootcamp curriculum covering business model validation, financial modelling, investor pitch preparation, and AGOA export readiness.',
    canonicalPath: '/bootcamp',
  });

  const [activeId, setActiveId] = useState(BOOTCAMP_MODULES[0].id);
  const activeModule = BOOTCAMP_MODULES.find((m) => m.id === activeId) ?? BOOTCAMP_MODULES[0];

  return (
    <>
      <PageHeader
        eyebrow={BOOTCAMP_CONTENT.eyebrow}
        title={BOOTCAMP_CONTENT.title}
        description={BOOTCAMP_CONTENT.description}
        breadcrumbs={[
          { label: 'Programme', to: '/programme' },
          { label: 'Online Bootcamp' },
        ]}
        statusLabel="Paid Programme — Fee Details TBA"
        tone="teal"
      />

      {/* Key Format Specs (Hairline Ledger, No Cards) */}
      <Section tone="surface" className="py-10 sm:py-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-hairline">
            {BOOTCAMP_CONTENT.formatDetails.map((item) => (
              <div key={item.label} className="lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-primary">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-fg">{item.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Interactive 4-Stage Learning Journey */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Eight-Week Learning Journey
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
              Four Structured Learning Stages
            </h2>
          </div>

          {/* Connected Stage Selector */}
          <div className="mt-10 grid divide-y divide-hairline border-y border-hairline sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {BOOTCAMP_MODULES.map((mod, index) => {
              const isSelected = mod.id === activeModule.id;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveId(mod.id)}
                  className={`p-5 text-left transition-colors cursor-pointer ${
                    isSelected ? 'bg-surface-elevated' : 'hover:bg-surface-elevated/50'
                  }`}
                >
                  <span
                    className={`font-display text-xs font-bold uppercase tracking-wider ${
                      isSelected ? 'text-primary' : 'text-muted'
                    }`}
                  >
                    Stage 0{index + 1} • {mod.weeks}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold text-fg">{mod.title}</h3>
                </button>
              );
            })}
          </div>

          {/* Active Stage Editorial Detail */}
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <EditorialImageFrame
                src={`/images/programmes/${activeModule.id}.jpg`}
                alt={activeModule.title}
                label={activeModule.weeks}
                caption={activeModule.summary}
                aspect="4/3"
                tone="green"
              />
            </div>

            <div className="lg:col-span-6">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                {activeModule.weeks}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-fg sm:text-3xl">
                {activeModule.title}
              </h3>
              <p className="mt-3 text-base text-muted">{activeModule.summary}</p>

              <ul className="mt-6 space-y-3 border-y border-hairline py-5">
                {activeModule.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5 text-sm text-fg">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-start gap-2.5 text-xs text-muted">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <p>
                  Formal end-of-bootcamp assessment selects the top 10–30 enterprises (10–20 in
                  summary table; subject to confirmation) for Botswana.
                </p>
              </div>

              <div className="mt-6">
                <Button to="/contact?category=Bootcamp+enquiry">
                  Enquire About the Bootcamp
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
