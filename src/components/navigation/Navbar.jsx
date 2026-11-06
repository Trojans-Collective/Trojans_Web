import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-obsidian/90 py-3 backdrop-blur-md'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden p-1">
                <img
                  src="/assets/brand/trojans-logo.svg"
                  alt="Trojans Collective Crest"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold tracking-wider text-silver-bright transition-colors group-hover:text-lime">
                  TROJANS COLLECTIVE
                </span>
              </div>
            </Link>

            <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:gap-2 lg:flex">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'px-2.5 py-2 font-sans text-sm transition-colors',
                      isActive
                        ? 'text-lime'
                        : 'text-silver-muted hover:text-silver-bright'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-4 md:flex">
              <Button
                to="/join"
                variant="primary"
                size="sm"
                icon={ArrowUpRight}
                iconPosition="right"
              >
                Join
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <Button
                to="/join"
                variant="primary"
                size="sm"
                className="text-[10px] px-2.5 py-1"
              >
                Join
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-sm p-2 text-silver-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-lime" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-obsidian-deep/90 backdrop-blur-md"
          />

          <nav id="mobile-navigation" aria-label="Mobile navigation" className="fixed bottom-0 left-0 right-0 top-[72px] flex flex-col justify-between overflow-y-auto bg-obsidian px-6 py-6">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center justify-between border-b border-white/5 py-3 font-display text-lg transition-colors',
                      isActive
                        ? 'text-lime'
                        : 'text-silver hover:text-white'
                    )
                  }
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 text-silver-dark" />
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-6">
              <Button
                to="/join"
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={ArrowUpRight}
                iconPosition="right"
              >
                Join the collective
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
