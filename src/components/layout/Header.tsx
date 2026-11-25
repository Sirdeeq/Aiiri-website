import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MAIN_NAV_ITEMS, type NavItem } from '@/data/navigation';
import { ThemeSwitcher } from '@/features/theme/ThemeSwitcher';
import { BrandMark } from './BrandMark';

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isGroupActive = (item: NavItem) =>
    item.children?.some((child) => location.pathname === child.to.split('?')[0]) ?? false;

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/85"
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <Link to="/" aria-label="AAIRI Home" className="shrink-0">
          <BrandMark />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {MAIN_NAV_ITEMS.map((item) => {
            if (item.children) {
              const isOpen = openDropdown === item.label;
              const active = isGroupActive(item);
              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                    className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      active || isOpen
                        ? 'bg-surface-elevated text-primary'
                        : 'text-fg hover:bg-surface-elevated'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      role="menu"
                      aria-label={`${item.label} submenu`}
                      className="absolute left-0 top-full mt-2 w-80 rounded-xl border border-border bg-surface p-2 shadow-lg"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          role="menuitem"
                          className="block rounded-lg px-3.5 py-2.5 transition-colors hover:bg-surface-elevated"
                        >
                          <span className="block text-sm font-semibold text-fg">{child.label}</span>
                          {child.description && (
                            <span className="mt-0.5 block text-xs text-muted">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.label}
                to={item.to!}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-surface-elevated text-primary'
                      : 'text-fg hover:bg-surface-elevated'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeSwitcher />
          <Button to="/applications" size="sm">
            Register Interest
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-fg hover:bg-surface-elevated cursor-pointer"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-border bg-surface lg:hidden"
        >
          <Container className="space-y-4 py-5">
            <nav aria-label="Mobile navigation" className="space-y-1">
              {MAIN_NAV_ITEMS.map((item) => {
                if (item.children) {
                  const expanded = mobileExpanded === item.label;
                  return (
                    <div key={item.label} className="rounded-lg border border-border/70">
                      <button
                        type="button"
                        aria-expanded={expanded}
                        onClick={() => setMobileExpanded(expanded ? null : item.label)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-fg cursor-pointer"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                      {expanded && (
                        <div className="space-y-1 border-t border-border/60 bg-surface-elevated/50 p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.to}
                              className="block rounded-md px-3 py-2 text-sm text-fg hover:bg-surface-elevated"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.label}
                    to={item.to!}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-sm font-semibold ${
                        isActive ? 'bg-surface-elevated text-primary' : 'text-fg hover:bg-surface-elevated'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
              <ThemeSwitcher />
              <Button to="/applications" size="sm" className="w-full sm:w-auto">
                Register Interest
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
