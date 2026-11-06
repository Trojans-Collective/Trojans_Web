import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FOOTER_LINKS } from '../../data/navigation';

const FOOTER_COLUMNS = [
  { title: 'Explore', links: FOOTER_LINKS.experiences },
  { title: 'Collective', links: FOOTER_LINKS.collective },
  { title: 'Contact', links: FOOTER_LINKS.connect },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/10 bg-obsidian-deep text-silver-muted">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 flex items-center gap-3 group">
              <img
                src="/assets/brand/trojans-logo.svg"
                alt=""
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-lg font-bold text-silver-bright transition-colors group-hover:text-lime">
                TROJANS COLLECTIVE
              </span>
            </Link>
            <p className="max-w-sm font-sans text-sm leading-relaxed text-silver-muted">
              Not a club. A collective of builders.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={`${column.title} links`}>
              <h2 className="mb-4 font-display text-sm font-semibold text-silver-bright">{column.title}</h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.path || link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-sans text-sm transition-colors hover:text-lime"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="inline-flex items-center gap-1 font-sans text-sm transition-colors hover:text-lime"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-silver-dark sm:flex-row">
          <span>&copy; {currentYear} Trojans Collective</span>
          <Link to="/" className="transition-colors hover:text-lime">Back to home</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
