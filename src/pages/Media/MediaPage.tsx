import { FileText, Image, Newspaper, Video } from 'lucide-react';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { EditorialImageFrame } from '@/components/ui/EditorialImageFrame';
import { EmptyState } from '@/components/ui/EmptyState';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { usePageMeta } from '@/hooks/usePageMeta';

type MediaCategory = 'All' | 'Announcements' | 'Press Releases' | 'Photo Gallery' | 'Videos' | 'Documents';

const MEDIA_TABS: { label: MediaCategory; icon: typeof Newspaper }[] = [
  { label: 'All', icon: Newspaper },
  { label: 'Announcements', icon: Newspaper },
  { label: 'Press Releases', icon: FileText },
  { label: 'Photo Gallery', icon: Image },
  { label: 'Videos', icon: Video },
  { label: 'Documents', icon: FileText },
];

export default function MediaPage() {
  usePageMeta({
    title: 'Media & Updates',
    description:
      'Official AAIRI programme announcements, press releases, approved photo and video galleries, and downloadable documents.',
    canonicalPath: '/media',
  });

  const [activeTab, setActiveTab] = useState<MediaCategory>('All');

  return (
    <>
      <PageHeader
        eyebrow="Media Centre"
        title="Media & Updates"
        description="Official programme announcements, press releases, approved event galleries, and downloadable documents will be published here as they are cleared for release."
        breadcrumbs={[{ label: 'Media & Updates' }]}
      />

      <Section>
        <Container>
          {/* Featured Editorial Banner Slot */}
          <div className="mb-10 grid items-center gap-8 border-b border-hairline pb-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <EditorialImageFrame
                src="/images/gallery/media-featured.jpg"
                alt="AAIRI 2026–2027 official media and communications archive"
                label="Featured Media Slot"
                caption="Approved press photography and programme highlights will appear here."
                aspect="16/9"
                tone="green"
              />
            </div>
            <div className="lg:col-span-5">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Press &amp; Communications
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-fg sm:text-3xl">
                Official Newsroom &amp; Approved Documents
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                All media releases, event galleries, and downloadable prospectuses published in
                this centre are vetted by Adesewa Concept Ltd and AAIRI’s communications partners.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pb-6">
            {MEDIA_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.label;
              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(tab.label)}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-primary text-primary-fg'
                      : 'border border-border bg-surface text-muted hover:text-fg'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <EmptyState
            icon={Newspaper}
            title={`No Approved ${activeTab === 'All' ? 'Media Items' : activeTab} Published Yet`}
            description="In line with AAIRI’s content governance standards, no placeholder press releases, unapproved photographs, or unconfirmed announcements are displayed. Approved updates and downloadable documents will appear here once released."
            ctaLabel="Submit a Media Enquiry"
            ctaTo="/contact?category=Media+enquiry"
          />
        </Container>
      </Section>
    </>
  );
}
