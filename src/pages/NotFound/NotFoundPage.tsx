import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found',
    description: 'The requested AAIRI page could not be found.',
  });

  return (
    <Section>
      <Container className="py-12 text-center">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
          404 Error
        </p>
        <h1 className="mt-3 text-4xl font-extrabold text-fg sm:text-5xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted">
          The page you are looking for may have moved or does not exist. Return to the AAIRI
          homepage or explore the programme overview.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Button>
          <Button to="/programme" variant="outline">
            Programme Overview
          </Button>
        </div>
      </Container>
    </Section>
  );
}
