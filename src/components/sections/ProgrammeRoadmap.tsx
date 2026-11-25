import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/Badge';
import { PROGRAMME_PHASES } from '@/data/programme-phases';

const PHASE_NUMBERS = ['01', '02', '03A', '03B', '04'] as const;

export function ProgrammeRoadmap() {
  return (
    <div className="relative mt-12">
      {/* Desktop Horizontal Connected Spine */}
      <div className="hidden lg:block">
        <div className="relative mb-8">
          <div className="h-[1px] w-full bg-border" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left' }}
            className="absolute left-0 top-0 h-[2px] w-full bg-primary"
          />
        </div>

        <div className="grid grid-cols-5 gap-6">
          {PROGRAMME_PHASES.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative flex flex-col justify-between pt-2"
            >
              {/* Milestone node on the line */}
              <span
                aria-hidden="true"
                className="absolute -top-[39px] left-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-bg transition-transform group-hover:scale-125"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>

              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-display text-4xl font-extrabold tracking-tight text-primary/35 transition-colors group-hover:text-primary">
                    {PHASE_NUMBERS[index]}
                  </span>
                  <Badge variant="default">Planned</Badge>
                </div>

                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-fg">
                  {phase.title}
                </h3>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  {phase.timelineLabel}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted">{phase.overview}</p>
              </div>

              <Link
                to={phase.route}
                className="mt-5 inline-flex items-center gap-1.5 border-t border-hairline pt-3 text-xs font-semibold text-primary hover:underline"
              >
                {phase.ctaLabel}
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile & Tablet Vertical Connected Journey */}
      <div className="relative space-y-8 border-l border-primary/40 pl-6 lg:hidden">
        {PROGRAMME_PHASES.map((phase, index) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="relative pb-6 border-b border-hairline last:border-b-0"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-primary bg-bg"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-2xl font-extrabold text-primary">
                {PHASE_NUMBERS[index]}
              </span>
              <Badge variant="default">Planned</Badge>
            </div>

            <h3 className="mt-2 font-display text-lg font-bold text-fg">{phase.title}</h3>
            <p className="mt-1 text-xs font-semibold text-accent">{phase.timelineLabel}</p>
            <p className="mt-2 text-sm text-muted">{phase.overview}</p>

            <Link
              to={phase.route}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              {phase.ctaLabel}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
