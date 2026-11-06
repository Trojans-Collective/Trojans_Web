import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../navigation/Navbar';
import { Footer } from './Footer';

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-obsidian text-silver relative overflow-x-hidden">
      {/* Background Cyber Grid Layer */}
      <div className="fixed inset-0 bg-cyber-grid pointer-events-none opacity-[0.12] z-0" />
      <div className="fixed inset-0 bg-radial-vignette pointer-events-none z-0" />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Viewport */}
      <main className="flex-1 relative z-10 pt-20">
        <Outlet />
      </main>

      {/* Global Minimal Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;
