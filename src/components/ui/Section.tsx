import type { ReactNode } from 'react';

type SectionTone = 'default' | 'surface' | 'elevated';

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
}

const TONE_CLASSES: Record<SectionTone, string> = {
  default: 'bg-bg text-fg',
  surface: 'bg-surface text-fg border-y border-border',
  elevated: 'bg-surface-elevated text-fg border-y border-border',
};

export function Section({ children, tone = 'default', id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${TONE_CLASSES[tone]} ${className}`}>
      {children}
    </section>
  );
}
