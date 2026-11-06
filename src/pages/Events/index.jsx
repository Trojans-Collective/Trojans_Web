import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { ModalOverlay } from '../../components/ui/ModalOverlay';
import { EVENTS_DATA, EVENT_CATEGORIES } from '../../data/events';
import { Calendar, MapPin, Users, ArrowUpRight, Flame } from 'lucide-react';
import { formatEditorialDate } from '../../utils/formatters';

export function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = activeCategory === 'All'
    ? EVENTS_DATA
    : EVENTS_DATA.filter((e) => e.category === activeCategory);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          index="06_ARENA"
          tag="CINEMATIC EVENT GALLERY"
          title="Code Sprints, Tech Bytes & Hackathons"
          subtitle="From 24-hour hackathons and intensive coding sprints to deep technical workshops and keynote discourses."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {EVENT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-colors border ${
                activeCategory === cat
                  ? 'bg-lime text-obsidian border-lime font-semibold'
                  : 'bg-obsidian-surface text-silver-muted border-obsidian-border hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="p-5 rounded-md bg-obsidian-card border border-obsidian-border hover:border-lime/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div
                  className="cursor-pointer mb-4"
                  onClick={() => setSelectedEvent(evt)}
                >
                  <ImageFrame
                    assetId={evt.assetId}
                    aspectRatio="16/9"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-lime uppercase tracking-widest">
                    {evt.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-silver-dark">
                    <Calendar className="w-3 h-3 text-lime" />
                    <span>{formatEditorialDate(evt.date)}</span>
                  </div>
                </div>

                <h3
                  onClick={() => setSelectedEvent(evt)}
                  className="font-display text-xl font-bold text-silver-bright group-hover:text-lime transition-colors cursor-pointer mb-2"
                >
                  {evt.title}
                </h3>

                <p className="font-sans text-xs text-silver-muted leading-relaxed mb-4">
                  {evt.summary}
                </p>

                {/* Highlights List */}
                <div className="space-y-1 mb-6">
                  {evt.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 font-mono text-[11px] text-silver-dark">
                      <span className="w-1 h-1 rounded-full bg-lime" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Meta */}
              <div className="pt-4 border-t border-obsidian-border flex items-center justify-between font-mono text-[10px] text-silver-dark">
                <div className="flex items-center gap-1 truncate max-w-[160px]">
                  <MapPin className="w-3 h-3 shrink-0 text-silver-muted" />
                  <span className="truncate">{evt.location}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedEvent(evt)}
                  className="text-lime hover:text-lime-hover uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  <span>Gallery</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Event Detail Lightbox / Modal */}
        <ModalOverlay
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent?.title}
          subtitle={`${selectedEvent?.category} // ${selectedEvent?.date}`}
        >
          {selectedEvent && (
            <div className="space-y-6">
              <ImageFrame
                assetId={selectedEvent.assetId}
                aspectRatio="16/9"
                showPlaceholderTag={false}
              />
              <div>
                <h5 className="font-mono text-xs text-lime uppercase tracking-widest mb-1">
                  EVENT SUMMARY
                </h5>
                <p className="font-sans text-sm text-silver leading-relaxed">
                  {selectedEvent.summary}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-obsidian-border font-mono text-xs text-silver-dark">
                <div>
                  <span className="text-silver-muted block mb-0.5">LOCATION</span>
                  <span>{selectedEvent.location}</span>
                </div>
                <div>
                  <span className="text-silver-muted block mb-0.5">ATTENDANCE / SCALE</span>
                  <span>{selectedEvent.attendance}</span>
                </div>
              </div>

              <div>
                <h5 className="font-mono text-xs text-silver-muted uppercase tracking-widest mb-2">
                  KEY HIGHLIGHTS
                </h5>
                <div className="space-y-1">
                  {selectedEvent.highlights.map((hl) => (
                    <div key={hl} className="flex items-center gap-2 font-mono text-xs text-silver">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </ModalOverlay>
      </div>
    </PageTransition>
  );
}

export default EventsPage;
