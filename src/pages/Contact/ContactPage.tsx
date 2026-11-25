import { zodResolver } from '@hookform/resolvers/zod';
import { Globe, Info, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { SITE_CONFIG } from '@/config/site';
import { usePageMeta } from '@/hooks/usePageMeta';
import { ApiClientError, isBackendConfigured } from '@/services/api/client';
import { submitContactEnquiry } from '@/services/contact/contactService';

const ENQUIRY_CATEGORIES = [
  'Agribusiness application',
  'Bootcamp enquiry',
  'Investor enquiry',
  'Awards and recognition',
  'Sponsorship',
  'Strategic partnership',
  'Media enquiry',
  'General enquiry',
] as const;

const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  organisation: z.string().optional(),
  email: z.string().email('Please enter a valid email address.'),
  category: z.string().min(1, 'Please choose an enquiry category.'),
  message: z.string().min(15, 'Please provide at least 15 characters in your message.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  usePageMeta({
    title: 'Contact AAIRI',
    description:
      'Connect with the AAIRI secretariat for agribusiness applications, bootcamp, investor, awards, sponsorship, partnership, or media enquiries.',
    canonicalPath: '/contact',
  });

  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') ?? 'General enquiry';
  const validInitialCategory = ENQUIRY_CATEGORIES.includes(
    initialCategory as (typeof ENQUIRY_CATEGORIES)[number],
  )
    ? initialCategory
    : 'General enquiry';

  const [validatedData, setValidatedData] = useState<ContactFormValues | null>(null);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      category: validInitialCategory,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError(null);
    setSubmittedId(null);
    if (!isBackendConfigured()) {
      setValidatedData(data);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitContactEnquiry(data);
      setSubmittedId(result.data.enquiryId);
      setValidatedData(null);
    } catch (err) {
      setSubmitError(
        err instanceof ApiClientError ? err.message : 'Unable to send enquiry. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact Secretariat"
        title="Let's Connect and Transform African Agriculture."
        description="Reach the AAIRI programme secretariat for agribusiness applications, investor engagement, awards, sponsorship, or institutional partnerships."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Split-Screen Contact Experience */}
      <Section>
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-5">
              <EditorialImageFrame
                src="/images/events/contact-secretariat.jpg"
                alt="AAIRI Secretariat and international programme coordination"
                label="Official Secretariat"
                caption="Direct communication with AAIRI programme leadership."
                aspect="4/3"
                tone="green"
              />

              <div className="border-y border-hairline py-6">
                <h2 className="font-display text-lg font-bold text-fg">
                  Official Programme Contact
                </h2>
                <p className="mt-3 text-sm font-semibold text-fg">
                  {SITE_CONFIG.contact.person}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {SITE_CONFIG.contact.title}
                </p>

                <ul className="mt-5 space-y-3 text-sm text-fg">
                  {SITE_CONFIG.contact.emails.map((email) => (
                    <li key={email} className="flex items-center gap-2.5">
                      <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <a href={`mailto:${email}`} className="hover:text-primary hover:underline">
                        {email}
                      </a>
                    </li>
                  ))}
                  {SITE_CONFIG.contact.phones.map((phone) => (
                    <li key={phone} className="flex items-center gap-2.5">
                      <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="hover:text-primary hover:underline"
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                  <li className="flex items-center gap-2.5">
                    <Globe className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>www.aairi.africa</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-fg">Send an Enquiry</h2>
                <p className="mt-1 text-sm text-muted">
                  All fields are validated locally. Live electronic submission awaits backend
                  email-service integration.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-name" className="block text-xs font-semibold text-fg">
                        Full Name
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        {...register('fullName')}
                        className="mt-1.5 w-full rounded-lg border border-border bg-input-bg px-3.5 py-2.5 text-sm text-fg"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-error">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="c-org" className="block text-xs font-semibold text-fg">
                        Organisation (Optional)
                      </label>
                      <input
                        id="c-org"
                        type="text"
                        {...register('organisation')}
                        className="mt-1.5 w-full rounded-lg border border-border bg-input-bg px-3.5 py-2.5 text-sm text-fg"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-email" className="block text-xs font-semibold text-fg">
                        Email Address
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        {...register('email')}
                        className="mt-1.5 w-full rounded-lg border border-border bg-input-bg px-3.5 py-2.5 text-sm text-fg"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-error">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="c-category" className="block text-xs font-semibold text-fg">
                        Enquiry Category
                      </label>
                      <select
                        id="c-category"
                        {...register('category')}
                        className="mt-1.5 w-full rounded-lg border border-border bg-input-bg px-3.5 py-2.5 text-sm text-fg"
                      >
                        {ENQUIRY_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      {errors.category && (
                        <p className="mt-1 text-xs text-error">{errors.category.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-msg" className="block text-xs font-semibold text-fg">
                      Message
                    </label>
                    <textarea
                      id="c-msg"
                      rows={5}
                      {...register('message')}
                      className="mt-1.5 w-full rounded-lg border border-border bg-input-bg px-3.5 py-2.5 text-sm text-fg"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-error">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Validate & Prepare Enquiry'}
                  </Button>
                </form>

                {submitError && (
                  <p className="mt-4 rounded-lg border border-error/40 bg-error/10 p-3 text-xs text-error">
                    {submitError}
                  </p>
                )}

                {submittedId && (
                  <div className="mt-6 rounded-lg border border-success/40 bg-success/10 p-4 text-xs text-fg">
                    <strong>Enquiry Received:</strong> Reference <strong>{submittedId}</strong>.
                    The AAIRI secretariat will respond shortly.
                  </div>
                )}

                {validatedData && (
                  <div className="mt-6 flex items-start gap-3 rounded-lg border border-warning/40 bg-warning/10 p-4 text-xs text-fg">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden="true" />
                    <div>
                      <strong>Backend Service Pending:</strong> Your{' '}
                      <strong>{validatedData.category}</strong> enquiry has passed validation, but
                      live form transmission is not yet connected to a backend API. Please email{' '}
                      <a
                        href={`mailto:${SITE_CONFIG.contact.emails[0]}?subject=${encodeURIComponent(
                          `[AAIRI] ${validatedData.category} — ${validatedData.fullName}`,
                        )}&body=${encodeURIComponent(validatedData.message)}`}
                        className="font-semibold text-primary underline"
                      >
                        {SITE_CONFIG.contact.emails[0]}
                      </a>{' '}
                      to send this message directly.
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
