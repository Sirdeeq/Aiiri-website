import { useEffect } from 'react';
import { SITE_CONFIG } from '@/config/site';

interface PageMetaOptions {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function usePageMeta({ title, description, canonicalPath }: PageMetaOptions) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_CONFIG.shortName)
      ? title
      : `${title} | ${SITE_CONFIG.shortName}`;
    document.title = fullTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    if (canonicalPath) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `${SITE_CONFIG.contact.website}${canonicalPath}`);
    }
  }, [title, description, canonicalPath]);
}
