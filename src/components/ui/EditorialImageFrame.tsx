import { motion } from 'motion/react';
import { useState } from 'react';

type AspectRatio = '16/9' | '4/3' | '4/5' | '21/9' | '1/1';
type VisualTone = 'green' | 'teal' | 'gold';

interface EditorialImageFrameProps {
  src?: string;
  alt: string;
  label: string;
  caption?: string;
  aspect?: AspectRatio;
  tone?: VisualTone;
  className?: string;
}

const ASPECT_CLASSES: Record<AspectRatio, string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '4/5': 'aspect-[4/5]',
  '21/9': 'aspect-[21/9]',
  '1/1': 'aspect-square',
};

const TONE_ACCENTS: Record<VisualTone, string> = {
  green: 'from-primary/20 via-surface-elevated to-secondary/15',
  teal: 'from-secondary/25 via-surface-elevated to-primary/10',
  gold: 'from-accent/20 via-band-contrast-bg to-secondary/20',
};

export function EditorialImageFrame({
  src,
  alt,
  label,
  caption,
  aspect = '16/9',
  tone = 'green',
  className = '',
}: EditorialImageFrameProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = Boolean(src) && !imgFailed;

  return (
    <figure className={`group relative overflow-hidden rounded-xl border border-border ${className}`}>
      <div className={`relative w-full overflow-hidden ${ASPECT_CLASSES[aspect]}`}>
        {showImage ? (
          <motion.img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setImgFailed(true)}
            initial={{ scale: 1.03 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            role="img"
            aria-label={alt}
            className={`relative flex h-full w-full flex-col justify-between bg-gradient-to-br p-6 sm:p-8 ${TONE_ACCENTS[tone]}`}
          >
            {/* Subtle architectural grid & botanical contour lines */}
            <svg
              aria-hidden="true"
              viewBox="0 0 400 240"
              className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 190 Q120 120 230 165 T400 110"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M0 215 Q140 155 260 190 T400 140"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.9"
              />
              <circle cx="330" cy="56" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>

            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-block border-b border-primary/50 pb-1 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                {label}
              </span>
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            </div>

            <div className="relative z-10 max-w-md">
              <p className="font-display text-sm font-semibold text-fg sm:text-base">{alt}</p>
              {caption && <p className="mt-1 text-xs text-muted">{caption}</p>}
            </div>
          </div>
        )}
      </div>
    </figure>
  );
}
