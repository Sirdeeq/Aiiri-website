import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null);

  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-surface">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-trigger-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-elevated cursor-pointer"
            >
              <div>
                {item.subtitle && (
                  <span className="block text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.subtitle}
                  </span>
                )}
                <span className="font-display text-base font-semibold text-fg sm:text-lg">
                  {item.title}
                </span>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-primary' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`accordion-panel-${item.id}`}
                role="region"
                aria-labelledby={`accordion-trigger-${item.id}`}
                className="border-t border-border/60 bg-surface-elevated/40 px-5 py-4 text-sm text-muted"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
