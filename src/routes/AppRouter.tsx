import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';

const HomePage = lazy(() => import('@/pages/Home/HomePage'));
const AboutPage = lazy(() => import('@/pages/About/AboutPage'));
const ProgrammePage = lazy(() => import('@/pages/Programme/ProgrammePage'));
const ApplicationsPage = lazy(() => import('@/pages/Applications/ApplicationsPage'));
const BootcampPage = lazy(() => import('@/pages/Bootcamp/BootcampPage'));
const AwardsPage = lazy(() => import('@/pages/Awards/AwardsPage'));
const InvestorsPage = lazy(() => import('@/pages/Investors/InvestorsPage'));
const BotswanaForumPage = lazy(() => import('@/pages/BotswanaForum/BotswanaForumPage'));
const TorontoForumPage = lazy(() => import('@/pages/TorontoForum/TorontoForumPage'));
const PartnersPage = lazy(() => import('@/pages/Partners/PartnersPage'));
const SponsorshipPage = lazy(() => import('@/pages/Sponsorship/SponsorshipPage'));
const MediaPage = lazy(() => import('@/pages/Media/MediaPage'));
const FAQPage = lazy(() => import('@/pages/FAQ/FAQPage'));
const ContactPage = lazy(() => import('@/pages/Contact/ContactPage'));
const LegalPage = lazy(() => import('@/pages/Legal/LegalPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFoundPage'));

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-bg text-muted">
      <p className="text-sm font-medium">Loading AAIRI...</p>
    </div>
  );
}

export function AppRouter() {
  return (
    <MainLayout>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programme" element={<ProgrammePage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/bootcamp" element={<BootcampPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/investors/botswana" element={<BotswanaForumPage />} />
          <Route path="/investors/toronto" element={<TorontoForumPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/sponsorship" element={<SponsorshipPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}
