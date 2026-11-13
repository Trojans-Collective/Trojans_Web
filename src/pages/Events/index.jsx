import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowUpRight, Sparkles, X, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Button } from '../../components/ui/Button';
import { EVENTS_DATA, EVENT_CATEGORIES } from '../../data/events';

export function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = activeCategory === 'All'
    ? EVENTS_DATA
    : EVENTS_DATA.filter((e) => e.category === activeCategory);

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            05 / Culture & Gatherings
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-silver-bright tracking-tight leading-[0.95] mb-6">
            Events & Living <br />
            <span className="text-lime">Culture</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-silver-muted leading-relaxed">
            The hackathon arenas, deep technical sessions, sprint weekends, and collaborative lab nights that forge our collective engineering character.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap items-center gap-2" role="tablist">
          {EVENT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-colors ${
                activeCategory === category
                  ? 'bg-lime text-obsidian font-bold'
                  : 'bg-obsidian-surface text-silver-muted hover:text-silver-bright border border-obsidian-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* ASYMMETRIC PHOTOGRAPHIC CHRONICLE */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-16 mb-24">
          {filteredEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={event.id}
                className="bg-obsidian-surface rounded-2xl border border-obsidian-border overflow-hidden p-6 sm:p-10 transition-colors hover:border-lime/30"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Photo Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="rounded-xl overflow-hidden border border-obsidian-border shadow-xl">
                      <ImageFrame
                        assetId={event.assetId}
                        aspectRatio="16/9"
                        caption={`${event.title} — ${event.location}`}
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  {/* Narrative Column */}
                  <div className={`lg:col-span-5 flex flex-col justify-between ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs text-lime uppercase tracking-wider">
                          {event.category}
                        </span>
                        <span className="font-mono text-xs text-silver-dark">
                          {event.date}
                        </span>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-silver-bright mb-3">
                        {event.title}
                      </h2>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-silver-muted mb-4">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-lime" /> {event.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-silver" /> {event.attendance}
                        </span>
                      </div>

                      <p className="font-sans text-sm text-silver-muted leading-relaxed mb-6">
                        {event.summary}
                      </p>

                      <div className="space-y-1.5 mb-6">
                        {event.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-xs font-sans text-silver-bright">
                            <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-obsidian-border">
                      <button
                        type="button"
                        onClick={() => setSelectedEvent(event)}
                        className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-lime hover:underline"
                      >
                        Enlarge Photographic Record <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fullscreen Photo Lightbox Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-md">
            <div className="relative w-full max-w-4xl rounded-2xl border border-obsidian-border bg-obsidian-surface p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-silver-muted hover:text-silver-bright hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 rounded-xl overflow-hidden border border-obsidian-border">
                <ImageFrame
                  assetId={selectedEvent.assetId}
                  aspectRatio="16/9"
                  hoverZoom={false}
                />
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-lime uppercase tracking-wider">
                  {selectedEvent.category}
                </span>
                <span className="font-mono text-xs text-silver-dark">
                  {selectedEvent.location}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-silver-bright mb-3">
                {selectedEvent.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-silver-muted leading-relaxed mb-6">
                {selectedEvent.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedEvent.highlights.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-3 py-1.5 rounded bg-obsidian-deep border border-obsidian-border text-silver-bright"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-obsidian-border flex items-center justify-end">
                <Button
                  onClick={() => setSelectedEvent(null)}
                  variant="outline"
                  size="sm"
                >
                  Close Record
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Suggest an Event / Hackathon Team */}
        <section className="rounded-xl border border-obsidian-border bg-obsidian-surface p-8 sm:p-12 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-silver-bright mb-4">
            Compete With Trojans Collective
          </h3>
          <p className="font-sans text-sm sm:text-base text-silver-muted max-w-xl mx-auto mb-8">
            Are you heading to a major collegiate hackathon and looking for multidisciplinary squad mates?
          </p>
          <Button to="/join" variant="primary" size="md" icon={ArrowUpRight} iconPosition="right">
            Join a Hackathon Squad
          </Button>
        </section>
      </div>
    </PageTransition>
  );
}

export default EventsPage;
