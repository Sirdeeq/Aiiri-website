import { SITE_CONFIG } from '@/config/site';

interface BrandMarkProps {
  compact?: boolean;
}

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-fg shadow-sm"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v18" strokeLinecap="round" />
          <path d="M12 10c4 0 7-3 7-7-4 0-7 3-7 7Z" />
          <path d="M12 14c-4 0-7-3-7-7 4 0 7 3 7 7Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-tight text-fg">
          {SITE_CONFIG.shortName}
        </span>
        {!compact && (
          <span className="hidden text-[10px] font-medium tracking-wider text-muted sm:block">
            {SITE_CONFIG.period} INITIATIVE
          </span>
        )}
      </span>
    </span>
  );
}
