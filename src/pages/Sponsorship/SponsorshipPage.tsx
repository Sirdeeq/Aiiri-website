import { zodResolver } from '@hookform/resolvers/zod';
import { FileText, Info } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { SITE_CONFIG } from '@/config/site';
import { usePageMeta } from '@/hooks/usePageMeta';
import { ApiClientError, isBackendConfigured } from '@/services/api/client';
import { submitSponsorshipEnquiry } from '@/services/sponsorship/sponsorshipService';

const sponsorshipSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  organisation: z.string().min(2, 'Please enter your organisation name.'),
  email: z.string().email('Please enter a valid work email address.'),
  focusArea: z.string().min(1, 'Please select a sponsorship area of interest.'),
  message: z.string().min(15, 'Please provide at least 15 characters describing your interest.'),
});

type SponsorshipFormValues = z.infer<typeof sponsorshipSchema>;

export default function SponsorshipPage() {
  usePageMeta({
    title: 'Sponsorship Opportunities',
    description:
      'Partner with AAIRI to support African agribusiness SME capacity building, the Awards & Recognition Conference, and international investor forums.',
    canonicalPath: '/sponsorship',
  });

  const [validatedPreview, setValidatedPreview] = useState<SponsorshipFormValues | null>(null);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SponsorshipFormValues>({
    resolver: zodResolver(sponsorshipSchema),
    defaultValues: {
      focusArea: 'Programme & Bootcamp Support',
    },
  });

  const onSubmit = async (data: SponsorshipFormValues) => {
    setSubmitError(null);
    setSubmittedId(null);
    if (!isBackendConfigured()) {
      setValidatedPreview(data);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitSponsorshipEnquiry({ ...data, requestProspectus: true });
      setSubmittedId(result.data.sponsorshipId);
      setValidatedPreview(null);
    } catch (err) {
      setSubmitError(
        err instanceof ApiClientError
          ? err.message
          : 'Unable to submit sponsorship enquiry. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Sponsorship"
        title="Partner With the Future of African Agribusiness."
        description="Support enterprise investment readiness, leadership recognition, and cross-border agribusiness capital mobilisation."
        breadcrumbs={[
          { label: 'Partners', to: '/partners' },
          { label: 'Sponsorship' },
        ]}
      />

      <Section>
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <EditorialImageFrame
                src="/images/events/sponsorship-forum.jpg"
                alt="International agribusiness conference and institutional sponsorship showcase"
                label="Programme Sponsorship"
                caption="Supporting SME capacity building, policy recognition, and investor forums."
                aspect="4/3"
                tone="gold"
              />

              <div className="border-y border-hairline py-5">
                <Badge variant="default">Sponsorship Prospectus</Badge>
                <h2 className="mt-3 font-display text-xl font-bold text-fg">
                  Prospectus &amp; Packages
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Official sponsorship tiers, pricing, and benefit schedules are currently being
                  finalised by the AAIRI secretariat. No unapproved tiers or guaranteed exposure
                  commitments are published here.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                  <FileText className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>Approved sponsorship prospectus PDF will be linked here once released.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-fg">Sponsorship Enquiry</h2>
                <p className="mt-1 text-sm text-muted">
                  Complete this validated enquiry form to register your organisation’s sponsorship
                  interest.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="sp-name" className="block text-xs font-semibold text-fg">
                        Full Name
                      </label>
                      <input
                        id="sp-name"
                        type="text"
                        {...register('fullName')}
                        className="mt-1.5 w-full rounded-lg border border-border bg-input-bg px-3.5 py-2.5 text-sm text-fg"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-error">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="sp-org" className="block text-xs font-semibold text-fg">
                        Organisation
                      </label>
                      <input
                        id="sp-org"
                        type="text"
                        {...register('organisation')}
                        className="mt-1.5 w-full rounded-lg border border-border bg-input-bg px-3.5 py-2.5 text-sm text-fg"
                      />
                      {errors.organisation && (
                        <p className="mt-1 text-xs text-error">{errors.organisation.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="sp-email" className="block text-xs font-semibold text-fg">
                        Work Email
                      </label>
                      <input
                        id="sp-email"
                        type="email"
                        {...register('email')}
                        className="mt-1.5 w-full rounded-lg border border-border bg-input-bg px-3.5 py-2.5 text-sm text-fg"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-error">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="sp-area" className="block text-xs font-semibold text-fg">
                        Area of Interest
                      </label>
                      <select
                        id="sp-area"
                        {...register('focusArea')}
                        className="mt-1.5 w-full rounded-lg border border-border bg-input-bg px-3.5 py-2.5 text-sm text-fg"
                      >
                        <option value="Programme & Bootcamp Support">
                          Programme &amp; Bootcamp Support
                        </option>
                        <option value="Awards & Recognition Conference">
                          Awards &amp; Recognition Conference
                        </option>
                        <option value="Botswana Pre-Investors Forum">
                          Botswana Pre-Investors Forum
                        </option>
                        <option value="Toronto Follow-Up Forum">Toronto Follow-Up Forum</option>
                      </select>
                      {errors.focusArea && (
                        <p className="mt-1 text-xs text-error">{errors.focusArea.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sp-msg" className="block text-xs font-semibold text-fg">
                      Enquiry Details
                    </label>
                    <textarea
                      id="sp-msg"
                      rows={4}
                      {...register('message')}
                      className="mt-1.5 w-full rounded-lg border border-border bg-input-bg px-3.5 py-2.5 text-sm text-fg"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-error">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Validate Sponsorship Enquiry'}
                  </Button>
                </form>

                {submitError && (
                  <p className="mt-4 rounded-lg border border-error/40 bg-error/10 p-3 text-xs text-error">
                    {submitError}
                  </p>
                )}

                {submittedId && (
                  <div className="mt-6 rounded-lg border border-success/40 bg-success/10 p-4 text-xs text-fg">
                    <strong>Sponsorship Enquiry Received:</strong> Reference{' '}
                    <strong>{submittedId}</strong>.
                  </div>
                )}

                {validatedPreview && (
                  <div className="mt-6 flex items-start gap-3 rounded-lg border border-warning/40 bg-warning/10 p-4 text-xs text-fg">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden="true" />
                    <div>
                      <strong>Backend Delivery Pending:</strong> Your sponsorship enquiry for{' '}
                      <strong>{validatedPreview.organisation}</strong> has been validated, but live
                      form submission is not yet connected to a backend email service. Please send
                      your enquiry directly to{' '}
                      <a
                        href={`mailto:${SITE_CONFIG.contact.emails[0]}?subject=${encodeURIComponent(
                          `AAIRI Sponsorship Enquiry — ${validatedPreview.organisation}`,
                        )}`}
                        className="font-semibold text-primary underline"
                      >
                        {SITE_CONFIG.contact.emails[0]}
                      </a>
                      .
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
