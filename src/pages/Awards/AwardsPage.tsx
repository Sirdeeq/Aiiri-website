import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { AWARDS_CONTENT } from '@/content/awards';
import { AWARD_CATEGORIES } from '@/data/award-categories';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function AwardsPage() {
  usePageMeta({
    title: 'Awards & Recognition',
    description:
      'Discover the AAIRI Awards & Recognition Conference honouring government officials, impact leaders, and private-sector champions transforming African agriculture.',
    canonicalPath: '/awards',
  });

  const [selectedId, setSelectedId] = useState(AWARD_CATEGORIES[0].id);
  const selected = AWARD_CATEGORIES.find((c) => c.id === selectedId) ?? AWARD_CATEGORIES[0];

  return (
    <>
      <PageHeader
        eyebrow={AWARDS_CONTENT.eyebrow}
        title={AWARDS_CONTENT.title}
        description={AWARDS_CONTENT.description}
        breadcrumbs={[
          { label: 'Programme', to: '/programme' },
          { label: 'Awards & Recognition' },
        ]}
        statusLabel="Proposed Conference"
        tone="contrast"
      />

      {/* Interactive Numbered Category Showcase (No Repetitive Icon Cards) */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Proposed Award Categories
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-fg">
                Recognising Policy, Capital &amp; Sector Leadership
              </h2>

              <div className="mt-8 divide-y divide-hairline border-y border-hairline">
                {AWARD_CATEGORIES.map((category, index) => {
                  const isActive = category.id === selected.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedId(category.id)}
                      className={`flex w-full items-baseline justify-between gap-4 px-3 py-4 text-left transition-colors cursor-pointer ${
                        isActive ? 'bg-surface-elevated' : 'hover:bg-surface-elevated/50'
                      }`}
                    >
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`font-display text-sm font-bold ${
                            isActive ? 'text-accent' : 'text-muted'
                          }`}
                        >
                          0{index + 1}
                        </span>
                        <span className="font-display text-base font-bold text-fg">
                          {category.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6 lg:col-span-6">
              <EditorialImageFrame
                src="/images/events/awards-ceremony.jpg"
                alt={selected.title}
                label={selected.targetGroup}
                caption={selected.description}
                aspect="4/3"
                tone="gold"
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-accent">
                  {selected.targetGroup}
                </p>
                <h3 className="mt-1 font-display text-2xl font-extrabold text-fg">
                  {selected.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{selected.description}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Dark Contrast Band — Target Recipients & Conference Programme */}
      <section className="border-y border-border bg-band-contrast-bg py-16 text-band-contrast-fg sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Target Recipients
              </p>
              <div className="divide-y divide-white/15 border-y border-white/15">
                {AWARDS_CONTENT.targetRecipients.map((recipient) => (
                  <div key={recipient.title} className="py-5">
                    <h3 className="font-display text-lg font-bold">{recipient.title}</h3>
                    <p className="mt-2 text-sm text-band-contrast-muted">{recipient.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Planned Conference Activities
              </p>
              <ul className="mt-6 space-y-3.5">
                {AWARDS_CONTENT.conferenceActivities.map((activity) => (
                  <li key={activity} className="flex items-start gap-3 text-sm">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/15 pt-4 text-xs text-band-contrast-muted">
                Nomination rules, venue details, speakers, and judging panels will be published only
                after formal confirmation.
              </p>
              <div className="mt-6">
                <Button to="/contact?category=Awards+and+recognition" variant="primary">
                  Submit Recognition Enquiry
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
