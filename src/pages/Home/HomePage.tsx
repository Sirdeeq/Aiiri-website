import { AboutPreviewSection } from '@/components/sections/home/AboutPreviewSection';
import { AudiencePathwaysSection } from '@/components/sections/home/AudiencePathwaysSection';
import { AwardsPreviewSection } from '@/components/sections/home/AwardsPreviewSection';
import { BootcampPreviewSection } from '@/components/sections/home/BootcampPreviewSection';
import { CorridorSection } from '@/components/sections/home/CorridorSection';
import { FinalConversionSection } from '@/components/sections/home/FinalConversionSection';
import { GlanceStatsSection } from '@/components/sections/home/GlanceStatsSection';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { ImpactTargetsSection } from '@/components/sections/home/ImpactTargetsSection';
import { PartnersPreviewSection } from '@/components/sections/home/PartnersPreviewSection';
import { ProgrammeTimelineSection } from '@/components/sections/home/ProgrammeTimelineSection';
import { ValueChainsSection } from '@/components/sections/home/ValueChainsSection';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function HomePage() {
  usePageMeta({
    title: 'AAIRI | African Agribusiness Investment-Readiness & Recognition Initiative',
    description:
      'Connecting African agribusiness SMEs with global capital and recognising leaders who champion agricultural transformation.',
    canonicalPath: '/',
  });

  return (
    <>
      <HeroSection />
      <GlanceStatsSection />
      <AboutPreviewSection />
      <ProgrammeTimelineSection />
      <ValueChainsSection />
      <AudiencePathwaysSection />
      <CorridorSection />
      <BootcampPreviewSection />
      <AwardsPreviewSection />
      <PartnersPreviewSection />
      <ImpactTargetsSection />
      <FinalConversionSection />
    </>
  );
}
