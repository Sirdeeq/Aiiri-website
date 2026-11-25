import { HelpCircle, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Accordion } from '@/components/ui/Accordion';
import { Container } from '@/components/ui/Container';
import { EmptyState } from '@/components/ui/EmptyState';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { FAQ_CATEGORIES, FAQ_ITEMS } from '@/content/faq';
import { usePageMeta } from '@/hooks/usePageMeta';
import type { FaqCategory } from '@/types/programme';

export default function FAQPage() {
  usePageMeta({
    title: 'Frequently Asked Questions',
    description:
      'Find source-verified answers on AAIRI applications, eligibility, the eight-week online bootcamp, fees, awards, and the Botswana and Toronto forums.',
    canonicalPath: '/faq',
  });

  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | FaqCategory>('All');

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesQuery =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  const accordionItems = filteredItems.map((item) => ({
    id: item.id,
    subtitle: item.category,
    title: item.question,
    content: <p className="leading-relaxed">{item.answer}</p>,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Frequently Asked Questions"
        title="Programme Questions & Answers"
        description="Answers below reflect verified information from the AAIRI concept note. Where operational details remain pending approval, further updates will be announced."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Search & Category Filter */}
            <div className="space-y-6 lg:col-span-4">
              <div>
                <label htmlFor="faq-search" className="block text-xs font-bold uppercase text-fg">
                  Search Questions
                </label>
                <div className="relative mt-2">
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                    aria-hidden="true"
                  />
                  <input
                    id="faq-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by keyword..."
                    className="w-full rounded-lg border border-border bg-input-bg py-2.5 pl-9 pr-3.5 text-sm text-fg"
                  />
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase text-fg">Categories</p>
                <div className="mt-2 flex flex-wrap gap-2 lg:flex-col">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('All')}
                    className={`rounded-lg px-3 py-2 text-left text-xs font-semibold transition-colors cursor-pointer ${
                      selectedCategory === 'All'
                        ? 'bg-primary text-primary-fg'
                        : 'border border-border bg-surface text-muted hover:text-fg'
                    }`}
                  >
                    All Categories ({FAQ_ITEMS.length})
                  </button>
                  {FAQ_CATEGORIES.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-lg px-3 py-2 text-left text-xs font-semibold transition-colors cursor-pointer ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-fg'
                          : 'border border-border bg-surface text-muted hover:text-fg'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-8">
              {accordionItems.length > 0 ? (
                <Accordion items={accordionItems} defaultOpenId={accordionItems[0].id} />
              ) : (
                <EmptyState
                  icon={HelpCircle}
                  title="No Matching Questions Found"
                  description="Try clearing your search filter or contact the AAIRI secretariat directly with your question."
                  ctaLabel="Contact AAIRI"
                  ctaTo="/contact"
                />
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
