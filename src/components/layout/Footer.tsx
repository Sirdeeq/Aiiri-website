import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/config/site';
import { ThemeSwitcher } from '@/features/theme/ThemeSwitcher';
import { BrandMark } from './BrandMark';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-fg">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Positioning */}
          <div className="space-y-4">
            <BrandMark />
            <p className="text-sm font-semibold text-fg">{SITE_CONFIG.positioning}</p>
            <p className="text-xs leading-relaxed text-muted">{SITE_CONFIG.supportingMessage}</p>
            <p className="text-xs text-muted">
              Initiated by <strong className="text-fg">{SITE_CONFIG.initiator}</strong>
            </p>
          </div>

          {/* Programme */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-fg">
              Programme
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <Link to="/about" className="hover:text-primary">
                  About AAIRI
                </Link>
              </li>
              <li>
                <Link to="/programme" className="hover:text-primary">
                  Programme Overview
                </Link>
              </li>
              <li>
                <Link to="/applications" className="hover:text-primary">
                  Call for Applications
                </Link>
              </li>
              <li>
                <Link to="/bootcamp" className="hover:text-primary">
                  Eight-Week Online Bootcamp
                </Link>
              </li>
              <li>
                <Link to="/awards" className="hover:text-primary">
                  Awards &amp; Recognition
                </Link>
              </li>
            </ul>
          </div>

          {/* Capital & Collaboration */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-fg">
              Forums &amp; Partners
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <Link to="/investors" className="hover:text-primary">
                  Investors Overview
                </Link>
              </li>
              <li>
                <Link to="/investors/botswana" className="hover:text-primary">
                  Botswana Forum
                </Link>
              </li>
              <li>
                <Link to="/investors/toronto" className="hover:text-primary">
                  Toronto Forum
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-primary">
                  Institutional Partners
                </Link>
              </li>
              <li>
                <Link to="/sponsorship" className="hover:text-primary">
                  Sponsorship Opportunities
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-primary">
                  Media &amp; Updates
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Theme */}
          <div className="space-y-4">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-fg">
              Contact
            </h2>
            <p className="text-xs font-semibold text-fg">{SITE_CONFIG.contact.person}</p>
            <ul className="space-y-2 text-xs text-muted">
              {SITE_CONFIG.contact.emails.map((email) => (
                <li key={email} className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={`mailto:${email}`} className="hover:text-primary">
                    {email}
                  </a>
                </li>
              ))}
              {SITE_CONFIG.contact.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-primary">
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <p className="mb-2 text-xs font-semibold text-muted">Theme</p>
              <ThemeSwitcher />
            </div>
          </div>
        </div>

        {/* Draft Disclaimer */}
        <div className="mt-10 rounded-lg border border-border bg-surface-elevated p-4 text-xs leading-relaxed text-muted">
          <strong className="text-fg">Programme Governance Notice (Draft Disclaimer):</strong>{' '}
          Participation in AAIRI training, bootcamps, or investor forums does not guarantee funding,
          capital commitments, visa approval, or deal completion. Programme targets, schedules, and
          tentative partnerships remain subject to formal confirmation.
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.shortName} — Initiated by{' '}
            {SITE_CONFIG.initiator}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy (Draft)
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms (Draft)
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
