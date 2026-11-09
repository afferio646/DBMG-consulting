/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab } from '../types.ts';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About DBMG' },
    { id: 'industries', label: 'Industries' },
    { id: 'velocity-re', label: 'Velocity RE', badge: 'Off-Market' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'ai-solutions', label: 'AI Solutions' },
  ];

  const handleSelectTab = (tab: NavTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brandNavy text-white border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleSelectTab('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue rounded-sm shrink-0"
          >
            <img
              src="/assets/aistudio/dbmg_logo_part_70be1000.PNG"
              alt="DBMG Consulting Logo"
              className="w-10 h-10 rounded object-contain shadow-sm group-hover:brightness-105 transition-all"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white whitespace-nowrap">
                DBMG <span className="font-light text-slate-300">CONSULTING</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase">
                Advisory &amp; Strategy
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const isVelocity = item.id === 'velocity-re';

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`px-3.5 py-2 rounded-md transition-all text-xs uppercase tracking-wider font-semibold whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? isVelocity
                        ? 'bg-brandBlue text-white shadow-sm'
                        : 'bg-white/10 text-white shadow-inner border border-white/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && !isActive && (
                    <span className="text-[9px] font-mono px-1.5 py-0.2 text-brandBlue bg-brandBlue/15 rounded border border-brandBlue/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleSelectTab('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-brandRed hover:bg-[#8f1515] transition-colors rounded shadow-sm cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandRed focus:ring-offset-brandNavy"
            >
              <span>Initiate Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-md focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#011438] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-150">
          <div className="grid gap-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const isVelocity = item.id === 'velocity-re';

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`w-full text-left px-4 py-3 rounded text-sm font-semibold tracking-wide flex items-center justify-between transition-colors ${
                    isActive
                      ? isVelocity
                        ? 'bg-brandBlue text-white'
                        : 'bg-white/10 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-brandBlue/30 text-white rounded">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-brandRed" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 mt-2">
            <button
              onClick={() => handleSelectTab('contact')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-brandRed hover:bg-[#8f1515] rounded shadow"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 mt-3 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-brandBlue" />
              <span>100% Confidential Off-Market Advisory</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
