import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AppRouter } from '@/routes/AppRouter';

function renderAt(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <AppRouter />
    </MemoryRouter>,
  );
}

describe('AAIRI Routes, FAQ, and Forms', () => {
  it('renders the homepage headline and primary CTAs', async () => {
    renderAt('/');
    expect(
      await screen.findByRole(
        'heading',
        {
          name: /Connecting Capital\. Recognising Leadership\. Transforming Agriculture\./i,
        },
        { timeout: 5000 },
      ),
    ).toBeInTheDocument();
  });

  it('renders the 404 page for unknown routes', async () => {
    renderAt('/unknown-route-xyz');
    expect(await screen.findByRole('heading', { name: /Page Not Found/i })).toBeInTheDocument();
  });

  it('filters FAQ items by search keyword', async () => {
    const user = userEvent.setup();
    renderAt('/faq');
    const searchInput = await screen.findByLabelText(/Search Questions/i);
    await user.type(searchInput, 'Botswana');
    expect(
      screen.getByRole('button', { name: /How many enterprises will be selected for the Botswana/i }),
    ).toBeInTheDocument();
  });

  it('validates Contact form fields and shows honest backend-pending notice on valid submit', async () => {
    const user = userEvent.setup();
    renderAt('/contact');
    await user.click(await screen.findByRole('button', { name: /Validate & Prepare Enquiry/i }));
    expect(await screen.findByText(/Please enter your full name/i)).toBeInTheDocument();

    await user.type(screen.getByLabelText(/Full Name/i), 'Adaeze Okafor');
    await user.type(screen.getByLabelText(/Email Address/i), 'adaeze@example.com');
    await user.type(
      screen.getByLabelText(/^Message$/i),
      'Interested in learning more about the AAIRI 2026-2027 agribusiness cohort.',
    );
    await user.click(screen.getByRole('button', { name: /Validate & Prepare Enquiry/i }));

    expect(await screen.findByText(/Backend Service Pending/i)).toBeInTheDocument();
  });
});
