import type { LucideIcon } from 'lucide-react';
import { Button } from './Button';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  ctaLabel,
  ctaTo,
}: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-surface p-10 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface-elevated text-primary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-fg">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted">{description}</p>
      {ctaLabel && ctaTo && (
        <div className="mt-6">
          <Button to={ctaTo} variant="outline" size="sm">
            {ctaLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
