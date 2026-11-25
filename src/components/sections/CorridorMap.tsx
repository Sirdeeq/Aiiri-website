import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { CORRIDOR_NODES } from '@/data/countries';

export function CorridorMap() {
  const [activeId, setActiveId] = useState<string>(CORRIDOR_NODES[1].id);
  const activeNode = CORRIDOR_NODES.find((n) => n.id === activeId) ?? CORRIDOR_NODES[1];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-12">
      {/* Interactive SVG Corridor Visual */}
      <div className="lg:col-span-7">
        <div className="relative overflow-hidden rounded-xl border border-border bg-surface-elevated p-6 sm:p-8">
          <svg
            viewBox="0 0 600 280"
            className="h-auto w-full"
            role="img"
            aria-label="Proposed Pennsylvania, Botswana, and Toronto investment corridor"
          >
            {/* Subtle latitude/longitude arcs */}
            <path
              d="M 40 220 Q 300 40 560 180"
              fill="none"
              stroke="var(--hairline)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <path
              d="M 40 150 Q 300 250 560 110"
              fill="none"
              stroke="var(--hairline)"
              strokeWidth="1"
            />

            {/* Animated Corridor Connections */}
            <motion.path
              d="M 135 95 Q 250 185 335 195"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            />
            <motion.path
              d="M 335 195 Q 420 130 470 72"
              fill="none"
              stroke="var(--secondary)"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
            />

            {/* Hub 1: Pennsylvania */}
            <g
              onClick={() => setActiveId('pennsylvania')}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveId('pennsylvania')}
            >
              <circle
                cx="135"
                cy="95"
                r={activeId === 'pennsylvania' ? 14 : 9}
                fill="var(--secondary)"
                opacity="0.25"
              />
              <circle cx="135" cy="95" r="6" fill="var(--secondary)" />
              <text
                x="135"
                y="72"
                textAnchor="middle"
                fill="var(--fg)"
                fontSize="12"
                fontWeight="700"
              >
                Pennsylvania, USA
              </text>
            </g>

            {/* Hub 2: Botswana */}
            <g
              onClick={() => setActiveId('botswana')}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveId('botswana')}
            >
              <circle
                cx="335"
                cy="195"
                r={activeId === 'botswana' ? 16 : 10}
                fill="var(--primary)"
                opacity="0.25"
              />
              <circle cx="335" cy="195" r="7" fill="var(--primary)" />
              <text
                x="335"
                y="225"
                textAnchor="middle"
                fill="var(--fg)"
                fontSize="13"
                fontWeight="800"
              >
                Botswana (Host Hub)
              </text>
            </g>

            {/* Hub 3: Toronto */}
            <g
              onClick={() => setActiveId('toronto')}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveId('toronto')}
            >
              <circle
                cx="470"
                cy="72"
                r={activeId === 'toronto' ? 14 : 9}
                fill="var(--accent)"
                opacity="0.25"
              />
              <circle cx="470" cy="72" r="6" fill="var(--accent)" />
              <text
                x="470"
                y="50"
                textAnchor="middle"
                fill="var(--fg)"
                fontSize="12"
                fontWeight="700"
              >
                Toronto, Canada
              </text>
            </g>
          </svg>

          {/* Hub Selector Pills */}
          <div className="mt-4 flex flex-wrap gap-2 border-t border-hairline pt-4">
            {CORRIDOR_NODES.map((node) => (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveId(node.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  activeId === node.id
                    ? 'bg-primary text-primary-fg'
                    : 'border border-border bg-surface text-muted hover:text-fg'
                }`}
              >
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {node.location}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Hub Details (editorial, no card) */}
      <div className="lg:col-span-5">
        <Badge variant="default">Proposed Corridor Hub</Badge>
        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
          {activeNode.region}
        </p>
        <h3 className="mt-2 font-display text-2xl font-extrabold text-fg sm:text-3xl">
          {activeNode.location}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted">{activeNode.role}</p>
        <p className="mt-5 border-t border-hairline pt-4 text-xs text-muted">{activeNode.note}</p>
      </div>
    </div>
  );
}
