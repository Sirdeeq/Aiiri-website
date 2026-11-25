import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';

const CONVERSION_PATHS = [
  {
    label: 'Agribusiness Applicants',
    description: 'Review eligibility criteria and register your interest.',
    to: '/applications',
  },
  {
    label: 'Global Investors',
    description: 'Connect with assessed African agribusiness deal flow.',
    to: '/investors',
  },
  {
    label: 'Sponsors',
    description: 'Support programme delivery and international forums.',
    to: '/sponsorship',
  },
  {
    label: 'Strategic Partners',
    description: 'Collaborate on training, policy, or trade facilitation.',
    to: '/partners',
  },
];

export function FinalConversionSection() {
  return (
    <section className="bg-secondary py-16 text-secondary-fg sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Get Involved
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Be Part of Africa&apos;s Agricultural Transformation.
          </h2>
          <p className="mt-4 text-base opacity-85">
            Select the pathway aligned with your organisation to register interest, explore
            institutional collaboration, or connect with the AAIRI secretariat.
          </p>
        </div>

        <div className="mt-12 grid divide-y divide-white/20 border-y border-white/20 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {CONVERSION_PATHS.map((path, index) => (
            <Link
              key={path.label}
              to={path.to}
              className="group flex flex-col justify-between py-6 transition-colors hover:bg-white/5 sm:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              <div>
                <span className="font-display text-xs font-bold text-accent">0{index + 1}</span>
                <h3 className="mt-2 font-display text-lg font-bold">{path.label}</h3>
                <p className="mt-2 text-xs leading-relaxed opacity-80">{path.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent">
                Proceed
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
