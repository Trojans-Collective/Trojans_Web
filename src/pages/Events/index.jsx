import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { ModalOverlay } from '../../components/ui/ModalOverlay';
import { EVENTS_DATA, EVENT_CATEGORIES } from '../../data/events';

export function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const filteredEvents = activeCategory === 'All'
    ? EVENTS_DATA
    : EVENTS_DATA.filter((event) => event.category === activeCategory);

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          title="Moments from the collective."
          subtitle="A selection of photographs from the event archive."
        />

        <label className="sr-only" htmlFor="event-category">Filter event photographs</label>
        <select
          id="event-category"
          value={activeCategory}
          onChange={(event) => setActiveCategory(event.target.value)}
          className="mb-8 rounded-sm border border-white/10 bg-obsidian-surface px-3 py-2 text-sm text-silver-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
        >
          {EVENT_CATEGORIES.map((category) => <option key={category}>{category}</option>)}
        </select>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <button
              key={event.id}
              type="button"
              onClick={() => setSelectedEvent(event)}
              className="group text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
            >
              <ImageFrame assetId={event.assetId} aspectRatio="16/9" />
              <span className="mt-3 block font-display text-lg text-silver-bright transition-colors group-hover:text-lime">
                {event.title}
              </span>
            </button>
          ))}
        </div>

        <ModalOverlay
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent?.title}
          subtitle={selectedEvent?.category}
        >
          {selectedEvent && (
            <ImageFrame assetId={selectedEvent.assetId} aspectRatio="16/9" showPlaceholderTag={false} />
          )}
        </ModalOverlay>
      </div>
    </PageTransition>
  );
}

export default EventsPage;
