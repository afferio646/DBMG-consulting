/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavTab } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomeView } from './views/HomeView.tsx';
import { AboutView } from './views/AboutView.tsx';
import { IndustriesView } from './views/IndustriesView.tsx';
import { VelocityREView } from './views/VelocityREView.tsx';
import { CaseStudiesView } from './views/CaseStudiesView.tsx';
import { ContactView } from './views/ContactView.tsx';
import  AiSolutions from './components/AiSolutions';
import { WorkshopView } from './components/WorkshopView'; 
import { ArrowUp } from 'lucide-react';

export default function App() {
  const isWorkshop = window.location.hash === '#workshop' || window.location.pathname === '/workshop';
  if (isWorkshop) {
    return <WorkshopView />;
  }
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavTab;
      const validTabs: NavTab[] = ['home', 'about', 'industries', 'velocity-re', 'case-studies', 'contact', 'ai-solutions'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll for back-to-top affordance
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-brandRed selection:text-white">
      {/* Sticky Navigation Bar configured in Deep Sapphire Navy (#021b4a) */}
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main Viewport Container */}
      <main className="flex-grow">
        {activeTab === 'home' && <HomeView onTabChange={handleTabChange} />}
        {activeTab === 'about' && <AboutView onTabChange={handleTabChange} />}
        {activeTab === 'industries' && <IndustriesView onTabChange={handleTabChange} />}
        {activeTab === 'velocity-re' && <VelocityREView onTabChange={handleTabChange} />}
        {activeTab === 'case-studies' && <CaseStudiesView onTabChange={handleTabChange} />}
        {activeTab === 'contact' && <ContactView onTabChange={handleTabChange} />}
        {activeTab === 'ai-solutions' && <AiSolutions />}
      </main>

      {/* Corporate Executive Footer */}
      <Footer onTabChange={handleTabChange} />

      {/* Subtle Scroll to Top Affordance */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-brandNavy hover:bg-slate-800 text-white rounded-full shadow-lg border border-slate-700 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brandBlue"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
