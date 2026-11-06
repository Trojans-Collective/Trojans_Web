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
      <h1 className="mb-4 font-display text-4xl font-bold text-silver-bright sm:text-6xl">
        Page not found
      </h1>
      <p className="mb-8 max-w-md font-sans text-sm text-silver-muted sm:text-base">
        This page is not available.
      </p>
      <a
        href="/"
        className="rounded-sm bg-lime px-6 py-2.5 font-sans text-sm font-medium text-obsidian transition-colors hover:bg-lime-hover"
      >
        Return home
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
