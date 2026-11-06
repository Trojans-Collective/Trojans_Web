import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FOOTER_LINKS } from '../../data/navigation';
import { Badge } from '../ui/Badge';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian-deep border-t border-obsidian-border text-silver-muted mt-24">
      {/* Top Banner / Philosophy Callout */}
      <div className="border-b border-obsidian-border py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-lime shadow-glow-lime-sm animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-lime uppercase">
                SYSTEM DEPLOYMENT // PHASE 1
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-silver-bright">
              "Not a club. A collective of builders."
            </h3>
          </div>
          <Badge variant="outline" size="md">
            ARCHITECTURAL NODE // V1.0.0
          </Badge>
        </div>
      </div>

      {/* Main Footer Directory Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-8 h-8 rounded-sm bg-obsidian-surface border border-obsidian-border p-1 flex items-center justify-center">
                <img
                  src="/assets/brand/trojans-logo.svg"
                  alt="Trojans Collective Crest"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-lg text-silver-bright group-hover:text-lime transition-colors">
                TROJANS COLLECTIVE
              </span>
            </Link>
            <p className="font-sans text-sm text-silver-muted max-w-sm leading-relaxed mb-6">
              A student-led technology and hackathon collective. We learn, build, compete, and explore through authentic engineering craft.
            </p>
            <div className="font-mono text-xs text-silver-dark flex flex-col gap-1">
              <span>CAMPUS HEADQUARTERS // INNOVATION LAB</span>
              <span>ENGINEERING CULTURE // HACKATHON ARENA</span>
            </div>
          </div>

          {/* Links: Experiences */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-silver-bright mb-4 font-semibold">
              // Experiences
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.experiences.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm hover:text-lime transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-silver-dark group-hover:text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Collective */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-silver-bright mb-4 font-semibold">
              // Collective
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.collective.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm hover:text-lime transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-silver-dark group-hover:text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Connect */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-silver-bright mb-4 font-semibold">
              // Connect
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm hover:text-lime transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-silver-dark group-hover:text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="font-sans text-sm hover:text-lime transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-silver-dark group-hover:text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terminal Coordinates */}
        <div className="border-t border-obsidian-border mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-silver-dark">
          <div>
            &copy; {currentYear} TROJANS COLLECTIVE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>STATUS: 200 OK</span>
            <span>•</span>
            <span>FRAMEWORK: REACT + VITE + THREE.JS</span>
            <span>•</span>
            <span className="text-lime">NO GENERIC TEMPLATES</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
