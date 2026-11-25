# AAIRI — International Programme Website

Official frontend web application for the **African Agribusiness Investment-Readiness & Recognition Initiative (AAIRI)**, initiated by **Adesewa Concept Ltd (ACL)**.

> **Positioning:** Connecting Capital. Recognising Leadership. Transforming Agriculture.

---

## Technology Stack

- **Core:** Vite + React 19 + TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + semantic CSS custom properties
- **Themes:** Three full themes (`light`, `dark`, `dark-grey`) managed via Zustand + `data-theme` attribute + FOUC-prevention inline script
- **Routing:** React Router v7 with route-level code splitting (`React.lazy`)
- **UI & Motion:** Lucide React + Motion for React (`reducedMotion="user"`)
- **Forms & Validation:** React Hook Form + Zod
- **Testing & Quality:** Vitest, React Testing Library, ESLint, Prettier

## Getting Started

```bash
npm install
npm run dev
```

### Verification Commands

```bash
npm run typecheck   # TypeScript strict check
npm run lint        # ESLint check
npm test            # Vitest + React Testing Library
npm run build       # Production build to dist/
```

## Hosting & Direct-Route Refresh Configuration

Because this is a Vite SPA, configure your production host (Netlify, Vercel, Cloudflare Pages, or Nginx) to rewrite all non-file routes to `/index.html` so direct visits and page refreshes on routes such as `/programme` or `/investors/botswana` resolve cleanly.

## Pending Backend Integrations & Content Approvals

1. **Brand & Photography Assets (`public/branding/` & `public/images/`):**
   - Official AAIRI high-resolution logo (light/dark variants) and `favicon.ico`
   - Official Adesewa Concept Ltd (ACL) logo
   - Approved partner logos (partners currently gated by `publicationApproved: false` in `src/data/partners.ts`)
   - Approved portrait of Princess Adesola O. Debbie Daramola and approved agribusiness/event photography
2. **Content & Schedule Clarifications (`Nov 2026 Updated AAII_2026_Concept Note.pdf`):**
   - Confirm **AAIRI** vs **AAII** as the sole public abbreviation
   - Confirm exact dates for Phase 1 (`Dec – Jan 2026` vs `Dec 2026 – Jan 2027`), Botswana Forum (`Dec 2026` vs `April 2027`), and Toronto Forum (`June` vs `Q3 2027`)
   - Confirm Botswana shortlist target (`10–20` vs `10–30` enterprises)
   - Clarify `UPENN` vs `Penn State University` and publication status of tentative/pending-endorsement partners
   - Supply Bootcamp fee/payment terms, approved social media URLs, sponsorship prospectus PDF, and final Privacy Policy / Terms wording
3. **Backend & Service Integrations (`src/services/`):**
   - Email/CRM endpoint for Contact, Investor Interest, and Sponsorship forms
   - Secure application intake API, file-upload storage, reference number generation, and confirmation email service (before enabling live Phase 1 submissions)
"# Aiiri-website" 
