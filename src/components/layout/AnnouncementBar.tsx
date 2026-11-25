import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';

export function AnnouncementBar() {
  return (
    <div className="border-b border-border bg-secondary text-secondary-fg">
      <Container className="flex min-h-10 flex-wrap items-center justify-between gap-2 py-1.5 text-xs">
        <p className="font-medium">
          AAIRI 2026–2027 <span className="mx-1.5 opacity-60">|</span> Building Africa&apos;s Next
          Generation of Investment-Ready Agribusinesses
        </p>
        <Link
          to="/applications"
          className="inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline"
        >
          Register Interest
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </Container>
    </div>
  );
}
