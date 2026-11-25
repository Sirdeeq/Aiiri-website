import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Badge } from './Badge';
import { Container } from './Container';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

type HeaderTone = 'default' | 'contrast' | 'teal';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  statusLabel?: string;
  tone?: HeaderTone;
}

const HEADER_TONE_CLASSES: Record<HeaderTone, string> = {
  default: 'bg-surface-elevated text-fg border-b border-border',
  contrast: 'bg-band-contrast-bg text-band-contrast-fg border-b border-border',
  teal: 'bg-secondary text-secondary-fg border-b border-border',
};

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  statusLabel,
  tone = 'default',
}: PageHeaderProps) {
  const isContrast = tone === 'contrast' || tone === 'teal';

  return (
    <header className={`relative overflow-hidden py-14 sm:py-20 ${HEADER_TONE_CLASSES[tone]}`}>
      <Container>
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol
            className={`flex flex-wrap items-center gap-1.5 text-xs font-medium ${
              isContrast ? 'text-band-contrast-muted' : 'text-muted'
            }`}
          >
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb) => (
              <li key={crumb.label} className="inline-flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isContrast ? 'text-band-contrast-fg' : 'text-fg'} aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <p
              className={`text-xs font-bold uppercase tracking-[0.18em] ${
                isContrast ? 'text-accent' : 'text-primary'
              }`}
            >
              {eyebrow}
            </p>
            {statusLabel && <Badge variant="accent">{statusLabel}</Badge>}
          </div>

          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p
            className={`mt-5 max-w-3xl text-base leading-relaxed sm:text-lg ${
              isContrast ? 'text-band-contrast-muted' : 'text-muted'
            }`}
          >
            {description}
          </p>
        </motion.div>
      </Container>
    </header>
  );
}
