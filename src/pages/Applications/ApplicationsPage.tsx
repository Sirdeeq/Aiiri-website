import { CheckCircle2, Info, ShieldAlert } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { VALUE_CHAINS } from '@/data/value-chains';
import { usePageMeta } from '@/hooks/usePageMeta';

const SELECTION_CRITERIA = [
  'Stage of business development',
  'Revenue trajectory',
  'Scalability of business model',
  'Market potential',
  'Bankability',
  'Leadership quality of the founding team',
  'Social impact (women, youth, PWDs, and retirees)',
  'Environmental sustainability',
];

const REGISTRATION_JOURNEY = [
  { step: '01', title: 'Review Eligibility', detail: 'Confirm sector alignment and SME readiness criteria.' },
  { step: '02', title: 'Complete Application', detail: 'Submit enterprise profile once Phase 1 opens.' },
  { step: '03', title: 'Selection Notice', detail: 'Receive cohort selection or registration instructions.' },
  { step: '04', title: 'Approved Payment', detail: 'Complete verified bootcamp fee requirements (TBA).' },
  { step: '05', title: 'Confirmation', detail: 'Receive official onboarding credentials and schedule.' },
  { step: '06', title: 'Programme Prep', detail: 'Prepare baseline enterprise data for Weeks 1–2.' },
];

const PREVIEW_STEPS = [
  { step: 1, title: 'Personal Information', fields: ['Full name', 'Role / Title', 'Email & Phone', 'Country of residence'] },
  { step: 2, title: 'Business Information', fields: ['Enterprise name', 'Country of operation', 'Years in operation', 'Legal registration status'] },
  { step: 3, title: 'Agricultural Value Chain', fields: ['Primary value chain category', 'Secondary ecosystem activities'] },
  { step: 4, title: 'Business Development & Investment Needs', fields: ['Current revenue band', 'Capital/readiness needs', 'Target market scope'] },
  { step: 5, title: 'Social & Environmental Impact', fields: ['Women/youth/PWD/retiree inclusion', 'Climate & sustainability practices'] },
  { step: 6, title: 'Supporting Documentation', fields: ['Business profile / pitch deck (secure upload pending backend)'] },
  { step: 7, title: 'Review & Consent', fields: ['Data protection consent & programme terms acknowledgement'] },
];

export default function ApplicationsPage() {
  usePageMeta({
    title: 'Call for Applications',
    description:
      'Review AAIRI eligibility, selection criteria, agricultural value chains, and register your interest ahead of the official application window.',
    canonicalPath: '/applications',
  });

  const [activeStep, setActiveStep] = useState(1);
  const currentStep = PREVIEW_STEPS.find((s) => s.step === activeStep) ?? PREVIEW_STEPS[0];

  return (
    <>
      <PageHeader
        eyebrow="Phase 01 — Call for Applications"
        title="Take the Next Step Towards Investment Readiness."
        description="AAIRI targets 400 qualified African agribusiness SMEs across agricultural value chains. Applications are not yet open; review the criteria and proposed registration journey below."
        breadcrumbs={[
          { label: 'Programme', to: '/programme' },
          { label: 'Call for Applications' },
        ]}
        statusLabel="Interest Registration Only"
      />

      {/* Proposed 01–06 Registration Journey Strip */}
      <Section tone="surface" className="py-12 sm:py-16">
        <Container>
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-hairline pb-4">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Proposed Registration Journey (Subject to Approval)
            </p>
            <p className="text-xs text-muted">No live payment or application intake is active yet</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0 lg:divide-x lg:divide-hairline">
            {REGISTRATION_JOURNEY.map((item) => (
              <div key={item.step} className="lg:px-5 lg:first:pl-0 lg:last:pr-0">
                <span className="font-display text-2xl font-extrabold text-primary">{item.step}</span>
                <h2 className="mt-2 font-display text-sm font-bold text-fg">{item.title}</h2>
                <p className="mt-1 text-xs text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Selection Criteria & Value Chains (Editorial Split, No Cards) */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Evaluation Framework
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-fg sm:text-3xl">
                Eight Selection Criteria
              </h2>
              <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                {SELECTION_CRITERIA.map((criterion, index) => (
                  <li key={criterion} className="flex items-center gap-3 py-3 text-sm text-fg">
                    <span className="font-display text-xs font-bold text-primary">
                      0{index + 1}
                    </span>
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <Badge variant="primary">Inclusive Growth Focus</Badge>
              <h2 className="mt-3 text-2xl font-extrabold text-fg sm:text-3xl">
                Who Should Apply?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Growth-oriented African agribusiness SMEs across all 10+ agricultural value chains,
                with strong emphasis on enterprises led by or empowering{' '}
                <strong className="text-fg">
                  women, youth, persons with disabilities (PWDs), and retirees
                </strong>
                .
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {VALUE_CHAINS.map((vc) => (
                  <span
                    key={vc.id}
                    className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-xs font-medium text-fg"
                  >
                    {vc.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Proposed 7-Step Application Architecture Preview */}
      <Section tone="elevated">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="warning">Proposed Form Architecture — Preview Only</Badge>
            <h2 className="mt-3 text-2xl font-extrabold text-fg sm:text-3xl">
              Proposed Multi-Step Application Experience
            </h2>
            <p className="mt-2 text-sm text-muted">
              No confidential business data or documents are collected or stored on this page until
              secure backend infrastructure and approved data protection policies are active.
            </p>
          </div>

          <div className="mt-8 border-y border-hairline py-8">
            <div className="flex flex-wrap gap-2 pb-6">
              {PREVIEW_STEPS.map((item) => (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(item.step)}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                    activeStep === item.step
                      ? 'bg-primary text-primary-fg'
                      : 'border border-border bg-surface text-muted hover:text-fg'
                  }`}
                >
                  Step {item.step}: {item.title}
                </button>
              ))}
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Step {currentStep.step} of {PREVIEW_STEPS.length}
            </p>
            <h3 className="mt-1 font-display text-xl font-bold text-fg">{currentStep.title}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {currentStep.fields.map((field) => (
                <li
                  key={field}
                  className="flex items-center gap-2.5 border-l-2 border-primary/40 bg-surface px-4 py-3 text-sm text-muted"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{field}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep((s) => Math.max(1, s - 1))}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={activeStep === PREVIEW_STEPS.length}
                  onClick={() => setActiveStep((s) => Math.min(PREVIEW_STEPS.length, s + 1))}
                >
                  Next
                </Button>
              </div>

              <Button to="/contact?category=Agribusiness+application" size="sm">
                Register Interest via Secretariat
              </Button>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 text-xs text-muted sm:flex-row sm:gap-8">
            <div className="flex items-start gap-2.5">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden="true" />
              <p>
                Full submissions, document uploads, and reference numbers require backend security
                and official launch authorisation.
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <p>
                Explore the{' '}
                <Button to="/bootcamp" variant="ghost" size="sm" className="px-1 py-0 underline">
                  Eight-Week Online Bootcamp
                </Button>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
