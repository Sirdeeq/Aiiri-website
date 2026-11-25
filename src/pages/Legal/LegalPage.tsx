import { FileWarning } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { EmptyState } from '@/components/ui/EmptyState';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { usePageMeta } from '@/hooks/usePageMeta';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

export default function LegalPage({ type }: LegalPageProps) {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy (Draft)' : 'Terms of Use (Draft)';

  usePageMeta({
    title,
    description: `${title} for the African Agribusiness Investment-Readiness & Recognition Initiative (AAIRI).`,
    canonicalPath: isPrivacy ? '/privacy' : '/terms',
  });

  return (
    <>
      <PageHeader
        eyebrow="Legal & Governance"
        title={title}
        description="Legal documentation is awaiting formal sign-off by Adesewa Concept Ltd before full publication."
        breadcrumbs={[{ label: title }]}
        statusLabel="Pending Legal Approval"
      />
      <Section>
        <Container>
          <EmptyState
            icon={FileWarning}
            title={`${title} Pending Publication Approval`}
            description="No confidential personal or application data is collected on this frontend-only preview. Approved legal text will be published here prior to opening live applications."
            ctaLabel="Return Home"
            ctaTo="/"
          />
        </Container>
      </Section>
    </>
  );
}
