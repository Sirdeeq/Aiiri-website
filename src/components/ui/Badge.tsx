import type { ReactNode } from 'react';

type BadgeVariant = 'default' | 'primary' | 'accent' | 'warning';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const BADGE_CLASSES: Record<BadgeVariant, string> = {
  default: 'border-border bg-surface-elevated text-muted',
  primary: 'border-primary/30 bg-primary/10 text-primary',
  accent: 'border-accent/40 bg-accent/10 text-accent',
  warning: 'border-warning/40 bg-warning/10 text-warning',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${BADGE_CLASSES[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
