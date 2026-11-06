import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { NAV_LINKS, PRIMARY_ACTIONS } from '../../data/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
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
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-obsidian/90 backdrop-blur-md border-obsidian-border py-3 shadow-card'
            : 'bg-transparent border-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Identifier */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-sm overflow-hidden bg-obsidian-surface border border-obsidian-border group-hover:border-lime/50 transition-colors p-1 flex items-center justify-center">
                <img
                  src="/assets/brand/trojans-logo.svg"
                  alt="Trojans Collective Crest"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-wider text-silver-bright group-hover:text-lime transition-colors">
                  TROJANS COLLECTIVE
                </span>
                <span className="font-mono text-[9px] tracking-widest text-silver-dark uppercase">
                  BUILDERS // EST. 2024
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'px-3 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5',
                      isActive
                        ? 'text-lime bg-lime/10 border border-lime/30 font-medium'
                        : 'text-silver-muted hover:text-white hover:bg-white/5 border border-transparent'
                    )
                  }
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] px-1 py-0.2 rounded-xs bg-lime-muted text-lime border border-lime/20 font-mono">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA & Live System Status */}
            <div className="hidden md:flex items-center gap-3">
              <Badge variant="lime" dot dotPulse size="sm" className="hidden xl:inline-flex">
                SYSTEM ONLINE
              </Badge>

              <Button
                to="/museum"
                variant="secondary"
                size="sm"
                icon={Terminal}
              >
                Museum [3D]
              </Button>

              <Button
                to="/join"
                variant="primary"
                size="sm"
                icon={ArrowUpRight}
                iconPosition="right"
              >
                Join Us
              </Button>
            </div>

            {/* Mobile Menu Hamburger Toggle */}
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
                className="p-2 rounded-sm text-silver-muted hover:text-white bg-obsidian-surface border border-obsidian-border focus:outline-none focus:ring-1 focus:ring-lime"
                aria-label="Toggle Navigation Menu"
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
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-obsidian-deep/90 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-[72px] left-0 right-0 bottom-0 bg-obsidian-card border-t border-obsidian-border p-6 overflow-y-auto flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <div className="pb-3 mb-2 border-b border-obsidian-border flex items-center justify-between">
                <span className="font-mono text-xs text-silver-dark uppercase tracking-widest">
                  NAVIGATION DIRECTORY
                </span>
                <Badge variant="lime" dot dotPulse size="sm">
                  ACTIVE
                </Badge>
              </div>

              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'p-3 rounded-sm font-mono text-sm uppercase tracking-wider flex items-center justify-between transition-colors border',
                      isActive
                        ? 'text-lime bg-lime/10 border-lime/30 font-semibold'
                        : 'text-silver hover:text-white hover:bg-white/5 border-obsidian-border'
                    )
                  }
                >
                  <div className="flex flex-col">
                    <span className="font-display font-medium text-base tracking-normal">
                      {link.label}
                    </span>
                    <span className="text-[10px] text-silver-dark font-sans lowercase">
                      {link.description}
                    </span>
                  </div>
                  {link.badge ? (
                    <span className="font-mono text-[10px] text-lime px-2 py-0.5 rounded-xs bg-lime-muted border border-lime/30">
                      {link.badge}
                    </span>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-silver-dark" />
                  )}
                </NavLink>
              ))}
            </div>

            <div className="pt-6 border-t border-obsidian-border flex flex-col gap-3">
              <Button
                to="/museum"
                variant="secondary"
                size="md"
                className="w-full justify-center"
                icon={Terminal}
              >
                Virtual 3D Museum
              </Button>
              <Button
                to="/join"
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={ArrowUpRight}
                iconPosition="right"
              >
                Join Trojans Collective
              </Button>
              <p className="text-center font-mono text-[10px] text-silver-dark mt-2 tracking-widest">
                TROJANS COLLECTIVE // COLLECTIVE OF BUILDERS
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
