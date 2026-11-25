import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
}

export function Card({ children, className = '', elevated = false }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border p-6 transition-colors ${
        elevated ? 'bg-surface-elevated' : 'bg-surface'
      } ${className}`}
    >
      {children}
    </div>
  );
}
