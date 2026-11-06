import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';

// Page Components
import { HomePage } from '../pages/Home';
import { AboutPage } from '../pages/About';
import { MemoriesPage } from '../pages/Memories';
import { PeoplePage } from '../pages/People';
import { ProjectsPage } from '../pages/Projects';
import { EventsPage } from '../pages/Events';
import { AchievementsPage } from '../pages/Achievements';
import { MuseumPage } from '../pages/Museum';
import { JoinPage } from '../pages/Join';
import { ContactPage } from '../pages/Contact';

// 404 Error Screen
function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <span className="font-mono text-xs text-lime tracking-widest uppercase mb-2">
        // ERROR 404
      </span>
      <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-silver-bright mb-4">
        COORDINATE NOT FOUND
      </h1>
      <p className="font-sans text-silver-muted text-sm sm:text-base max-w-md mb-8">
        The requested archival node does not exist in the Trojans Collective registry.
      </p>
      <a
        href="/"
        className="px-6 py-2.5 rounded-sm bg-lime text-obsidian font-mono text-xs uppercase tracking-wider font-semibold hover:bg-lime-hover shadow-glow-lime-sm transition-all"
      >
        Return to Headquarters
      </a>
    </div>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="memories" element={<MemoriesPage />} />
        <Route path="explore" element={<MemoriesPage />} />
        <Route path="people" element={<PeoplePage />} />
        <Route path="builders" element={<PeoplePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="achievements" element={<AchievementsPage />} />
        <Route path="museum" element={<MuseumPage />} />
        <Route path="journey" element={<MuseumPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
